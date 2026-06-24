jest.mock('nestjs-typeorm-paginate', () => ({
  paginate: jest.fn(),
}));

import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { paginate } from 'nestjs-typeorm-paginate';
import { CursosService } from './cursos.service';

const mockPaginate = paginate as jest.Mock;

const CURSO_ID = 'aaaaaaaaaaaaaaaaaaaaaaaa';
const NOT_FOUND_ID = '999999999999999999999999';

describe('CursosService', () => {
  let service: CursosService;

  let mockCursoModel: any;
  const mockContenidoModel = {};

  beforeEach(async () => {
    jest.clearAllMocks();

    mockCursoModel = jest.fn().mockImplementation((dto) => ({
      ...dto,
      save: jest.fn().mockResolvedValue({ id: CURSO_ID, ...dto }),
    }));

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CursosService,
        { provide: getModelToken('Curso'), useValue: mockCursoModel },
        { provide: getModelToken('Contenido'), useValue: mockContenidoModel },
      ],
    }).compile();

    service = module.get<CursosService>(CursosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // ─────────────────────────────
  describe('create()', () => {
    it('should create and return a curso', async () => {
      const dto = {
        title: 'NestJS Avanzado',
        instructor: 'Ana García',
        contenidos: [],
      };

      const result = await service.create(dto as any);

      expect(result).toBeDefined();
    });

    it('should return null when error occurs', async () => {
      mockCursoModel.mockImplementation(() => ({
        save: jest.fn().mockRejectedValue(new Error('DB error')),
      }));

      const result = await service.create({} as any);
      expect(result).toBeNull();
    });
  });

  // ─────────────────────────────
  describe('findOne()', () => {
    it('should return curso', async () => {
      mockCursoModel.findById = jest.fn(() => ({
        populate: jest.fn().mockResolvedValue({ id: CURSO_ID }),
      }));

      const res = await service.findOne(CURSO_ID);
      expect(res).toBeDefined();
    });

    it('should return null if not found', async () => {
      mockCursoModel.findById = jest.fn(() => ({
        populate: jest.fn().mockResolvedValue(null),
      }));

      const res = await service.findOne(NOT_FOUND_ID);
      expect(res).toBeNull();
    });
  });

  // ─────────────────────────────
  describe('findAll()', () => {
    it('should return paginated result', async () => {
      mockCursoModel.find = jest.fn(() => ({
        skip: jest.fn().mockReturnThis(),
        limit: jest.fn().mockReturnThis(),
        populate: jest.fn().mockResolvedValue([{ id: CURSO_ID }]),
      }));

      const res = await service.findAll({ page: 1, limit: 10 });

      expect(res).toEqual({
        items: expect.any(Array),
        page: 1,
        limit: 10,
      });
    });

    it('should return null on error', async () => {
      mockCursoModel.find = jest.fn(() => {
        throw new Error('DB error');
      });

      const res = await service.findAll({ page: 1, limit: 10 });
      expect(res).toBeNull();
    });
  });
});