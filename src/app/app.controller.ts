/**
 * File: app.controller.ts
 * Author: Dexter
 * Note:
 */

import { Controller, Req, Post, Get, Inject, Logger, LoggerService } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly authService: AuthService,
    @Inject(Logger) private readonly logger: LoggerService) {}
  
  /**
	 * Health Check endpoint to determine whether the application is working all well and good.
	 */
	@Get('health-check')
	getHealthCheck(): string {
		return this.appService.getHealthcheck();
	}

  @Post('/login')
  login(@Req() req) {
    this.logger.error('we are in');
    this.logger.debug(req.body);
    return this.authService.login(req.body);
  }
}
