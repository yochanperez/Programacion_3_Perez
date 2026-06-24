import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CursosController } from './cursos.controller';
import { CursosService } from './cursos.service';

describe('CursosController', () => {
  let controller: CursosController;

  const mockCursosService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CursosController],
      providers: [
        { provide: CursosService, useValue: mockCursosService },
      ],
    }).compile();

    controller = module.get<CursosController>(CursosController);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('create works', async () => {
    mockCursosService.create.mockResolvedValue({ id: '1' });
    const res = await controller.create({ title: 'test', instructor: 'x' });
    expect(res.success).toBe(true);
  });
});