/**
 * File: app.module.ts
 * Author: Dexter
 * Note:
 */

import { Module, Logger } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '../auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfig } from '../config/app.config';
import { DatabaseConfig } from '../config/database.config';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
			isGlobal: true,
			expandVariables: true,
			load: [AppConfig, DatabaseConfig]
    }),
    AuthModule,
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService, Logger],
})
export class AppModule {}
