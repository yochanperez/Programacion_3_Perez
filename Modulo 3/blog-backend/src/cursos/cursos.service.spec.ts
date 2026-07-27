SERVICE.SPEC jest.mock('nestjs-typeorm-paginate', () => ({
  paginate: jest.fn(),
}));

import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { paginate } from 'nestjs-typeorm-paginate';
import { CursosService } from './cursos.service';
import { Curso } from './curso.entity';

const mockPaginate = paginate as jest.Mock;

const CURSO_ID      = 'aaaaaaaaaaaaaaaaaaaaaaaa';
const CURSO_ID_2    = 'bbbbbbbbbbbbbbbbbbbbbbbb';
const NOT_FOUND_ID  = '999999999999999999999999';

describe('CursosService', () => {
  let service: CursosService;

  const mockQueryBuilder = {
    where:   jest.fn().mockReturnThis(),
    orderBy: jest.fn().mockReturnThis(),
  };

  const mockCursosRepository = {
    create:             jest.fn(),
    save:               jest.fn(),
    findOne:            jest.fn(),
    remove:             jest.fn(),
    createQueryBuilder: jest.fn(),
  };

  beforeEach(async () => {
    jest.clearAllMocks();
    mockCursosRepository.createQueryBuilder.mockReturnValue(mockQueryBuilder);
    mockQueryBuilder.where.mockReturnThis();
    mockQueryBuilder.orderBy.mockReturnThis();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CursosService,
        { provide: getRepositoryToken(Curso), useValue: mockCursosRepository },
      ],
    }).compile();

    service = module.get<CursosService>(CursosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // ─────────────────────────────────────────────────────────────
  describe('create()', () => {

    it('should create and return a curso', async () => {
      const mockCurso = { id: CURSO_ID, title: 'NestJS Avanzado', instructor: 'Ana García' };
      mockCursosRepository.create.mockReturnValue(mockCurso);
      mockCursosRepository.save.mockResolvedValue(mockCurso);
      expect(await service.create({ title: 'NestJS Avanzado', instructor: 'Ana García' })).toEqual(mockCurso);
    });

    it('should call repository.create with the provided dto', async () => {
      const dto = { title: 'Docker Básico', instructor: 'Luis Pérez' };
      mockCursosRepository.create.mockReturnValue({});
      mockCursosRepository.save.mockResolvedValue({ id: CURSO_ID_2, ...dto });
      await service.create(dto);
      expect(mockCursosRepository.create).toHaveBeenCalledWith(dto);
    });

    it('should return null when repository throws', async () => {
      mockCursosRepository.create.mockReturnValue({});
      mockCursosRepository.save.mockRejectedValue(new Error('Constraint error'));
      expect(await service.create({ title: 'Duplicado', instructor: 'x' })).toBeNull();
    });

  });

  // ─────────────────────────────────────────────────────────────
  describe('findOne()', () => {

    it('should return a curso when it exists', async () => {
      const mockCurso = { id: CURSO_ID, title: 'NestJS Avanzado' };
      mockCursosRepository.findOne.mockResolvedValue(mockCurso);
      const result = await service.findOne(CURSO_ID);
      expect(result).toEqual(mockCurso);
      expect(mockCursosRepository.findOne).toHaveBeenCalledWith({ where: { id: CURSO_ID } });
    });

    it('should return null when curso does not exist', async () => {
      mockCursosRepository.findOne.mockResolvedValue(null);
      expect(await service.findOne(NOT_FOUND_ID)).toBeNull();
    });

    it('should return null when repository throws', async () => {
      mockCursosRepository.findOne.mockRejectedValue(new Error('DB error'));
      expect(await service.findOne(CURSO_ID)).toBeNull();
    });

  });

  // ─────────────────────────────────────────────────────────────
  describe('update()', () => {

    it('should return null when curso does not exist', async () => {
      mockCursosRepository.findOne.mockResolvedValue(null);
      expect(await service.update(NOT_FOUND_ID, { title: 'Nuevo' })).toBeNull();
    });

    it('should update and return the curso', async () => {
      mockCursosRepository.findOne.mockResolvedValue({ id: CURSO_ID, title: 'Viejo' });
      mockCursosRepository.save.mockResolvedValue({ id: CURSO_ID, title: 'Nuevo' });
      expect(await service.update(CURSO_ID, { title: 'Nuevo' })).toEqual({ id: CURSO_ID, title: 'Nuevo' });
    });

    it('should apply dto fields to the existing curso', async () => {
      mockCursosRepository.findOne.mockResolvedValue({ id: CURSO_ID, title: 'Viejo' });
      mockCursosRepository.save.mockImplementation((curso) => Promise.resolve(curso));
      const result = await service.update(CURSO_ID, { title: 'Actualizado' });
      expect(result).toHaveProperty('title', 'Actualizado');
    });

    it('should return null when save throws', async () => {
      mockCursosRepository.findOne.mockResolvedValue({ id: CURSO_ID, title: 'Curso' });
      mockCursosRepository.save.mockRejectedValue(new Error('Save error'));
      expect(await service.update(CURSO_ID, { title: 'x' })).toBeNull();
    });

  });

  // ─────────────────────────────────────────────────────────────
  describe('remove()', () => {

    it('should return null when curso does not exist', async () => {
      mockCursosRepository.findOne.mockResolvedValue(null);
      expect(await service.remove(NOT_FOUND_ID)).toBeNull();
    });

    it('should call repository.remove with the found curso', async () => {
      const mockCurso = { id: CURSO_ID, title: 'NestJS' };
      mockCursosRepository.findOne.mockResolvedValue(mockCurso);
      mockCursosRepository.remove.mockResolvedValue(mockCurso);
      await service.remove(CURSO_ID);
      expect(mockCursosRepository.remove).toHaveBeenCalledWith(mockCurso);
    });

    it('should return the removed curso', async () => {
      const mockCurso = { id: CURSO_ID, title: 'NestJS' };
      mockCursosRepository.findOne.mockResolvedValue(mockCurso);
      mockCursosRepository.remove.mockResolvedValue(mockCurso);
      expect(await service.remove(CURSO_ID)).toEqual(mockCurso);
    });

    it('should return null when remove throws', async () => {
      mockCursosRepository.findOne.mockResolvedValue({ id: CURSO_ID });
      mockCursosRepository.remove.mockRejectedValue(new Error('FK constraint'));
      expect(await service.remove(CURSO_ID)).toBeNull();
    });

  });

  // ─────────────────────────────────────────────────────────────
  describe('findAll()', () => {

    const mockPaginationResult = {
      items: [
        { id: CURSO_ID,   title: 'NestJS Avanzado' },
        { id: CURSO_ID_2, title: 'Docker Básico' },
      ],
      meta: { currentPage: 1, totalPages: 1, itemCount: 2, totalItems: 2, itemsPerPage: 10 },
    };

    it('should return paginated cursos', async () => {
      mockPaginate.mockResolvedValue(mockPaginationResult);
      expect(await service.findAll({ page: 1, limit: 10 })).toEqual(mockPaginationResult);
    });

    it('should call createQueryBuilder with "curso" alias', async () => {
      mockPaginate.mockResolvedValue(mockPaginationResult);
      await service.findAll({ page: 1, limit: 10 });
      expect(mockCursosRepository.createQueryBuilder).toHaveBeenCalledWith('curso');
    });

    it('should call where when search is provided', async () => {
      mockPaginate.mockResolvedValue(mockPaginationResult);
      await service.findAll({ page: 1, limit: 10, search: 'NestJS' });
      expect(mockQueryBuilder.where).toHaveBeenCalled();
    });

    it('should not call where when search is not provided', async () => {
      mockPaginate.mockResolvedValue(mockPaginationResult);
      await service.findAll({ page: 1, limit: 10 });
      expect(mockQueryBuilder.where).not.toHaveBeenCalled();
    });

    it('should call orderBy when sort is provided', async () => {
      mockPaginate.mockResolvedValue(mockPaginationResult);
      await service.findAll({ page: 1, limit: 10, sort: 'title', order: 'ASC' });
      expect(mockQueryBuilder.orderBy).toHaveBeenCalledWith('curso.title', 'ASC');
    });

    it('should return null when paginate throws', async () => {
      mockPaginate.mockRejectedValue(new Error('DB error'));
      expect(await service.findAll({ page: 1, limit: 10 })).toBeNull();
    });

  });

});