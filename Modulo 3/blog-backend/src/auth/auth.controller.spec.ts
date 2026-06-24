import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UnauthorizedException, BadRequestException } from '@nestjs/common';

describe('AuthController', () => {
  let controller: AuthController;
  let service: AuthService;

  const mockAuthService = {
    login: jest.fn(),
    register: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: mockAuthService,
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('login()', () => {
    it('should return access_token on successful login', async () => {
      const expectedResponse = { access_token: 'mi.jwt.token' };
      mockAuthService.login.mockResolvedValue(expectedResponse);

      const result = await controller.login({ email: 'admin@test.com', password: 'pass' });
      expect(result).toEqual(expectedResponse);
    });

    it('should throw or return whatever the service throws', async () => {
      // Como tu controlador delega todo, si el servicio falla, la excepción sube
      mockAuthService.login.mockRejectedValue(new UnauthorizedException('Invalid credentials'));

      await expect(
        controller.login({ email: 'x@test.com', password: 'wrong' }),
      ).rejects.toThrow(UnauthorizedException);
    });
  });

  describe('register()', () => {
    it('should return access_token on successful registration', async () => {
      const expectedResponse = { access_token: 'nuevo.jwt.token' };
      mockAuthService.register.mockResolvedValue(expectedResponse);

      const result = await controller.register({ username: 'nuevo', password: 'pass', email: 'n@n.com' });
      expect(result).toEqual(expectedResponse);
    });

    it('should throw or return whatever the service throws on fail', async () => {
      mockAuthService.register.mockRejectedValue(new BadRequestException('Failed to register user'));

      await expect(
        controller.register({ username: 'x', password: 'y', email: 'z@z.com' }),
      ).rejects.toThrow(BadRequestException);
    });
  });
});