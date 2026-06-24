import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException, BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

// 1. Añadimos esto justo aquí para interceptar todo el módulo de bcrypt
jest.mock('bcrypt', () => ({
  compare: jest.fn(),
}));

describe('AuthService', () => {
  let service: AuthService;

  const mockUsersService = {
    findByEmail: jest.fn(),
    create: jest.fn(),
  };

  const mockJwtService = {
    sign: jest.fn(() => 'registro.token'),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useValue: mockUsersService },
        { provide: JwtService, useValue: mockJwtService },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('login()', () => {
    it('should throw UnauthorizedException when user does not exist', async () => {
      mockUsersService.findByEmail.mockResolvedValue(null);

      await expect(
        service.login({ email: 'no-existe@test.com', password: '123' }),
      ).rejects.toThrow(UnauthorizedException);
    });

    it('should throw UnauthorizedException when password is incorrect', async () => {
      const mockUser = { email: 'test@test.com', password: 'hashed_password' };
      mockUsersService.findByEmail.mockResolvedValue(mockUser);
      
      // 2. Ahora cambiamos el jest.spyOn por el mock directo que creamos arriba:
      (bcrypt.compare as jest.Mock).mockResolvedValue(false);

      await expect(
        service.login({ email: 'test@test.com', password: 'wrong_password' }),
      ).rejects.toThrow(UnauthorizedException);
    });

    it('should return an object with access_token on successful login', async () => {
      const mockUser = { id: 1, email: 'test@test.com', password: 'hashed_password' };
      mockUsersService.findByEmail.mockResolvedValue(mockUser);
      mockJwtService.sign.mockReturnValue('login.token');
      
      // 3. Igual acá, usamos el mock directo:
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);

      const result = await service.login({ email: 'test@test.com', password: 'password123' });
      
      expect(result).toEqual({ access_token: 'login.token' });
    });
  });

  describe('register()', () => {
    it('should throw BadRequestException when user creation fails', async () => {
      mockUsersService.create.mockResolvedValue(null);

      await expect(
        service.register({ username: 'nuevo', password: '123', email: 'n@n.com' }),
      ).rejects.toThrow(BadRequestException);
    });

    it('should return an object with access_token on successful registration', async () => {
      const mockCreatedUser = { id: 2, username: 'nuevo', email: 'nuevo@test.com' };
      mockUsersService.create.mockResolvedValue(mockCreatedUser);
      mockJwtService.sign.mockReturnValue('registro.token');

      const result = await service.register({ username: 'nuevo', password: 'pass123', email: 'nuevo@test.com' });
      
      expect(result).toEqual({ access_token: 'registro.token' });
    });

    it('should call usersService.create with correct data', async () => {
      const dto = { username: 'nuevo', password: '123', email: 'n@n.com' };
      mockUsersService.create.mockResolvedValue({ id: 3, ...dto });

      await service.register(dto);
      expect(mockUsersService.create).toHaveBeenCalledWith(dto);
    });
  });
});