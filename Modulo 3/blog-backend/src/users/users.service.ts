import * as bcrypt from 'bcrypt';
import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { paginate, Pagination } from 'nestjs-typeorm-paginate';

import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { QueryDto } from 'src/common/dto/query.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // =========================
  // CREATE
  // =========================
  async create(createUserDto: CreateUserDto): Promise<User | null> {
    try {
      const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

      const user = this.userRepository.create({
        ...createUserDto,
        password: hashedPassword,
      });

      return await this.userRepository.save(user);
    } catch (err) {
      console.error('Error creating user:', err);
      return null;
    }
  }

  // =========================
  // FIND ALL
  // =========================
  async findAll(
    queryDto: QueryDto,
    isActive?: boolean,
  ): Promise<Pagination<User>> {
    try {
      const { page, limit, search, searchField, sort, order } = queryDto;

      const query = this.userRepository.createQueryBuilder('user');

      if (isActive !== undefined) {
        query.andWhere('user.isActive = :isActive', { isActive });
      }

      if (search) {
        if (searchField) {
          switch (searchField) {
            case 'username':
              query.andWhere('user.username ILIKE :search', {
                search: `%${search}%`,
              });
              break;

            case 'email':
              query.andWhere('user.email ILIKE :search', {
                search: `%${search}%`,
              });
              break;

            default:
              query.andWhere(
                '(user.username ILIKE :search OR user.email ILIKE :search)',
                { search: `%${search}%` },
              );
          }
        } else {
          query.andWhere(
            '(user.username ILIKE :search OR user.email ILIKE :search)',
            { search: `%${search}%` },
          );
        }
      }

      if (sort) {
        query.orderBy(`user.${sort}`, (order ?? 'ASC') as 'ASC' | 'DESC');
      }

      return await paginate<User>(query, { page, limit });
    } catch (err) {
      console.error('Error retrieving users:', err);
      throw new InternalServerErrorException(
        'Error al obtener los usuarios',
      );
    }
  }

  // =========================
  // FIND ONE
  // =========================
  async findOne(id: string): Promise<User | null> {
    try {
      return await this.userRepository.findOne({ where: { id } });
    } catch (err) {
      console.error('Error fetching user:', err);
      return null;
    }
  }

  // =========================
  // FIND BY EMAIL
  // =========================
  async findByEmail(email: string): Promise<User | null> {
    try {
      return await this.userRepository.findOne({ where: { email } });
    } catch (err) {
      console.error('Error fetching user by email:', err);
      return null;
    }
  }

  // =========================
  // FIND BY USERNAME (FIX FALTANTE)
  // =========================
  async findByUsername(username: string): Promise<User | null> {
    try {
      return await this.userRepository.findOne({ where: { username } });
    } catch (err) {
      console.error('Error fetching user by username:', err);
      return null;
    }
  }

  // =========================
  // UPDATE
  // =========================
  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<User | null> {
    try {
      const user = await this.userRepository.findOne({ where: { id } });

      if (!user) {
        return null;
      }

      if (updateUserDto.password) {
        updateUserDto.password = await bcrypt.hash(
          updateUserDto.password,
          10,
        );
      }

      const merged = { ...user, ...updateUserDto };

      return await this.userRepository.save(merged);
    } catch (err) {
      console.error('Error updating user:', err);
      throw new InternalServerErrorException(
        'Error al actualizar el usuario',
      );
    }
  }

  // =========================
  // REMOVE
  // =========================
  async remove(id: string): Promise<User | null> {
    try {
      const user = await this.userRepository.findOne({ where: { id } });

      if (!user) {
        return null;
      }

      await this.userRepository.remove(user);

      return user;
    } catch (err) {
      console.error('Error removing user:', err);
      throw new InternalServerErrorException(
        'Error al eliminar el usuario',
      );
    }
  }

  // =========================
  // UPDATE PROFILE
  // =========================
  async updateProfile(id: string, filename: string): Promise<User> {
    try {
      const user = await this.userRepository.findOne({ where: { id } });

      if (!user) {
        throw new NotFoundException('User not found');
      }

      user.profile = filename;

      return await this.userRepository.save(user);
    } catch (err) {
      if (err instanceof NotFoundException) {
        throw err;
      }

      console.error('Error updating profile:', err);
      throw new InternalServerErrorException(
        'Error al actualizar el perfil',
      );
    }
  }
}