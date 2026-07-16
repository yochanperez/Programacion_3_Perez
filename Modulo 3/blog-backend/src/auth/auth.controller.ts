import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { SuccessResponseDto } from 'src/common/dto/response.dto';
import { GoogleAuthGuard } from './guards/google-auth.guard';
import { Get, Delete, Req, Res, UseGuards } from '@nestjs/common';
import type { Request, Response } from 'express';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import type { User } from '../users/user.entity';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService, 
  ) {}

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  @Get('google')
  @UseGuards(GoogleAuthGuard)
  async googleAuth() {
    // Nunca se ejecuta: el guard intercepta la petición y redirige a Google.
  }

  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  async googleAuthCallback(@Req() req: Request, @Res() res: Response) {
    try {
      console.log('--- CALLBACK DE GOOGLE ACTIVADO ---');
      console.log('Usuario devuelto por Passport (req.user):', req.user);

      if (!req.user) {
        throw new Error('Passport o la estrategia no adjuntaron el usuario a req.user.');
      }

      const token = await this.authService.loginWithUser(req.user as User);
      console.log('Token JWT generado con éxito:', token);

      const frontendUrl = process.env.FRONTEND_URL ?? 'http://localhost:5173';
      return res.redirect(`${frontendUrl}/auth/google/callback?token=${token}`);
    } catch (error: any) {
      console.error('--- ❌ ERROR EN GOOGLE CALLBACK ❌ ---');
      console.error(error); 

      return res.status(500).json({
        success: false,
        message: 'Error detallado del backend',
        error: error.message || error,
        stack: error.stack,
      });
    }
  }

  @Delete('google')
  @UseGuards(JwtAuthGuard)
  async unlinkGoogle(@Req() req: Request) {
    const userId = (req.user as { id: string }).id;
    const user = await this.usersService.unlinkGoogleId(userId);
    return new SuccessResponseDto('Google account unlinked', user);
  }
}