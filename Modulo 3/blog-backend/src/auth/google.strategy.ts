// src/auth/google.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { ConfigService } from '@nestjs/config';
import type { Request } from 'express';
import { UsersService } from '../users/users.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    config: ConfigService,
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {
    super({
      clientID: config.get<string>('GOOGLE_CLIENT_ID') ?? '',
      clientSecret: config.get<string>('GOOGLE_CLIENT_SECRET') ?? '',
      callbackURL: config.get<string>('GOOGLE_CALLBACK_URL') ?? '',
      scope: ['email', 'profile'],
      passReqToCallback: true,
    });
  }

  async validate(
    req: Request,
    _accessToken: string,
    _refreshToken: string,
    profile: any, // Cambiado a any para evitar problemas de reflexión de metadatos
    done: VerifyCallback,
  ) {
    try {
      const email = profile.emails?.[0]?.value;
      const googleId = profile.id;
      const avatarUrl = profile.photos?.[0]?.value;

      if (!email) {
        return done(new Error('Google no devolvió un email de usuario'), false);
      }

      // Verificamos si viene un state de vinculación
      const state = req.query?.state as string | undefined;
      
      // Solo intentamos validar el JWT si viene un state con formato JWT válido
      // (Evita romper el login cuando Google genera su propio string aleatorio de "state")
      if (state && state.split('.').length === 3) {
        try {
          const payload = this.jwtService.verify<{ id: string }>(state);
          const linkedUser = await this.usersService.linkGoogleId(payload.id, googleId, avatarUrl);
          return done(null, linkedUser);
        } catch (err) {
          console.error('Error verificando state de Google OAuth (JWT inválido):', err);
          // Si falla la firma del JWT, asumimos que no es para vinculación y no tiramos un error 500
        }
      }

      // Proceso normal de Registro / Inicio de Sesión
      let user = await this.usersService.findByGoogleId(googleId);

      if (!user) {
        user = await this.usersService.findByEmail(email);
      }

      if (!user) {
        user = await this.usersService.createFromGoogle({
          username: email.split('@')[0],
          email,
          googleId,
          avatarUrl,
        });
      } else if (!user.googleId) {
        user = await this.usersService.linkGoogleId(user.id!, googleId, avatarUrl);
      }

      return done(null, user);
    } catch (error: any) {
      console.error('Error crítico en el validador de GoogleStrategy:', error);
      return done(error, false);
    }
  }
}