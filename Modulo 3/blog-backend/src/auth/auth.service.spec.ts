// src/auth/auth.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException, BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

// Evitamos el error "Cannot redefine property: compare" mockeando bcrypt globalmente
jest.mock('bcrypt', () => ({
  compare: jest.fn(),
}));

describe('AuthService', () => {
  let service: AuthService;

  // Sincronizado con tu servicio: usamos findByEmail en lugar de findByUsername
  const mockUsersService = {
    findByEmail: jest.fn(),
    create:      jest.fn(),
  };

  const mockJwtService = {
    sign: jest.fn(),
  };

  beforeEach(async () => {
    jest.clearAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useValue: mockUsersService },
        { provide: JwtService,   useValue: mockJwtService   },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // ────────────────────────────────────────────────────────────
  describe('login()', () => {
    it('should throw UnauthorizedException when user does not exist', async () => {
      mockUsersService.findByEmail.mockResolvedValue(null);

      // Tu código real lanza una excepción, por lo tanto evaluamos con rejects.toThrow
      await expect(
        service.login({ email: 'noexiste@correo.com', password: '123' })
      ).rejects.toThrow(UnauthorizedException);
    });

    it('should throw UnauthorizedException when password is incorrect', async () => {
      const mockUser = { id: '1', email: 'admin@correo.com', password: 'hash' };
      mockUsersService.findByEmail.mockResolvedValue(mockUser);
      
      // Asignamos el valor directamente usando el mock global
      (bcrypt.compare as jest.Mock).mockResolvedValue(false);

      await expect(
        service.login({ email: 'admin@correo.com', password: 'wrong' })
      ).rejects.toThrow(UnauthorizedException);
    });

    it('should return an object with access_token on successful login', async () => {
      const mockUser = { id: '1', email: 'admin@correo.com', password: 'hash' };
      mockUsersService.findByEmail.mockResolvedValue(mockUser);
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);
      mockJwtService.sign.mockReturnValue('my.jwt.token');

      const result = await service.login({ email: 'admin@correo.com', password: 'correcta' });
      
      // Tu servicio retorna un objeto { access_token: ... }, no una cadena plana
      expect(result).toEqual({ access_token: 'my.jwt.token' });
    });

    it('should call jwtService.sign with correct payload', async () => {
      const mockUser = { id: '42', email: 'maria@correo.com', password: 'hash' };
      mockUsersService.findByEmail.mockResolvedValue(mockUser);
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);
      mockJwtService.sign.mockReturnValue('token');

      await service.login({ email: 'maria@correo.com', password: 'pass' });
      
      expect(mockJwtService.sign).toHaveBeenCalledWith({ id: '42', email: 'maria@correo.com' });
    });
  });

  // ────────────────────────────────────────────────────────────
  describe('register()', () => {
    it('should throw BadRequestException when user creation fails', async () => {
      mockUsersService.create.mockResolvedValue(null);

      await expect(
        service.register({ username: 'x', password: 'y', email: 'z@z.com' })
      ).rejects.toThrow(BadRequestException);
    });

    it('should return an object with access_token on successful registration', async () => {
      // Tu método register extrae user.username para mapearlo al payload.email
      mockUsersService.create.mockResolvedValue({ id: '1', username: 'nuevo' });
      mockJwtService.sign.mockReturnValue('reg.token');

      const result = await service.register({ username: 'nuevo', password: 'p', email: 'e@e.com' });
      
      expect(result).toEqual({ access_token: 'reg.token' });
      expect(mockJwtService.sign).toHaveBeenCalledWith({ id: '1', email: 'nuevo' });
    });

    it('should not call jwtService.sign when user creation fails', async () => {
      mockUsersService.create.mockResolvedValue(null);

      // Capturamos el error esperado para que continúe la ejecución de la prueba
      try {
        await service.register({ username: 'x', password: 'y', email: 'z@z.com' });
      } catch (error) {
        // Ignoramos la excepción lanzada adrede
      }

      expect(mockJwtService.sign).not.toHaveBeenCalled();
    });
  });
});