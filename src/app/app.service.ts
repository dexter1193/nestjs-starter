/**
 * File: app.service.ts
 * Author: Dexter
 * Note:
 */

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  /**
     * Healthcheck endpoint that returns 200 if the service is running
     */
    getHealthcheck(): string {
      return 'The service is up and running';
  }
}
