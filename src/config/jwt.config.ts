/**
 * File: jwt.config.ts
 * Author: Dexter
 * Note:
 */

import { registerAs, ConfigType } from '@nestjs/config';
import { JwtOptionsFactory, JwtModuleOptions } from '@nestjs/jwt';
import { Inject, Injectable } from '@nestjs/common';

// Configuration factory class for JWT token configuration.
const JwtConfig = registerAs('JWT', () => ({
  TOKEN_SECRET: process.env.JWT_TOKEN_SECRET
}));

@Injectable()
class JwtConfigService implements JwtOptionsFactory {
  constructor(
    @Inject(JwtConfig.KEY)
    private jwtConfig: ConfigType<typeof JwtConfig>
  ){}
  createJwtOptions(): JwtModuleOptions {
    return {
      secret: this.jwtConfig.TOKEN_SECRET,
      signOptions: {
        expiresIn: '30m'
      }
    };
  }
}

export { JwtConfig, JwtConfigService };