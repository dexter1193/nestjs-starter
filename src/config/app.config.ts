/**
 * File: app.config.ts
 * Author: Dexter
 * Note:
 */

import { registerAs } from '@nestjs/config';

// Configuration factory class for application wide configuration.
const AppConfig = registerAs('APP', () => ({
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000
}));

export { AppConfig };