import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) { }

  async login(loginDto: LoginDto): Promise<string | null> {
    try {
      let user: User | null = null;
      if (loginDto.username) {
        user = await this.usersService.findByUsername(loginDto.username);
      }
      if (!user && loginDto.email) {
        user = await this.usersService.findByEmail(loginDto.email);
      }
      if (!user) return null;

      const isValid = await bcrypt.compare(loginDto!.password!, user.password!);
      if (!isValid) return null;

      const payload = { id: user.id, username: user.username };
      return this.jwtService.sign(payload);
    } catch (err) {
      console.error('Unexpected login error:', err);
      return null;
    }
  }

  async register(createUserDto: CreateUserDto): Promise<string | null> {
    try {
      const user = await this.usersService.create(createUserDto);
      if (!user) return null;

      const payload = { id: user.id, email: user.username };
      return this.jwtService.sign(payload);
    } catch (err) {
      console.error('Register error:', err);
      return null;
    }
  }

  async loginWithUser(user: User): Promise<string> {
    const payload = { id: user.id, username: user.username };
    return this.jwtService.sign(payload);
  }
}
