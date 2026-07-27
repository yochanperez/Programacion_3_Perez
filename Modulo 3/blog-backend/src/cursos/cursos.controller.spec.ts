SERVICEimport { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { paginate } from 'nestjs-typeorm-paginate';
import { Curso } from './curso.entity';
import { CreateCursoDto } from './dto/create-curso.dto';

@Injectable()
export class CursosService {
  constructor(
    @InjectRepository(Curso)
    private readonly cursosRepository: Repository<Curso>,
  ) {}

  async create(dto: CreateCursoDto): Promise<Curso | null> {
    try {
      const curso = this.cursosRepository.create(dto);
      return await this.cursosRepository.save(curso);
    } catch (err) {
      console.error('Error creating curso:', err);
      return null;
    }
  }

  async findAll(options: { page: number; limit: number; search?: string; sort?: string; order?: 'ASC' | 'DESC' }): Promise<any | null> {
    try {
      const { page, limit, search, sort, order } = options;
      const query = this.cursosRepository.createQueryBuilder('curso');

      if (search) {
        query.where('curso.title ILIKE :search OR curso.instructor ILIKE :search', {
          search: `%${search}%`,
        });
      }

      if (sort) {
        query.orderBy(`curso.${sort}`, (order ?? 'ASC') as 'ASC' | 'DESC');
      }

      return await paginate<Curso>(query, { page, limit });
    } catch (err) {
      console.error('Error fetching cursos:', err);
      return null;
    }
  }

  async findOne(id: string): Promise<Curso | null> {
    try {
      return await this.cursosRepository.findOne({ where: { id } });
    } catch (err) {
      console.error('Error finding curso:', err);
      return null;
    }
  }

  async update(id: string, dto: Partial<CreateCursoDto>): Promise<Curso | null> {
    try {
      const curso = await this.cursosRepository.findOne({ where: { id } });
      if (!curso) return null;
      Object.assign(curso, dto);
      return await this.cursosRepository.save(curso);
    } catch (err) {
      console.error('Error updating curso:', err);
      return null;
    }
  }

  async remove(id: string): Promise<Curso | null> {
    try {
      const curso = await this.cursosRepository.findOne({ where: { id } });
      if (!curso) return null;
      return await this.cursosRepository.remove(curso);
    } catch (err) {
      console.error('Error removing curso:', err);
      return null;
    }
  }
}