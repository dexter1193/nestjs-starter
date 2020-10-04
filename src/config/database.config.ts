/**
 * File: database.config.ts
 * Author: Dexter
 * Note:
 */

import { registerAs } from '@nestjs/config';

// Configuration factory class for database configuration.
const DatabaseConfig = registerAs('DBConfig', () => ({
    DBTYPE: process.env.DATABASE_TYPE,
    DBHOST: process.env.DATABASE_HOST || 'localhost',
    DBPORT: process.env.DATABASE_PORT || 5432,
    DBUSERNAME: process.env.DATABASE_USERNAME,
    DBPASSWORD: process.env.DATABASE_PASSWORD,
    DBNAME: process.env.DATABASE_NAME
}));

export { DatabaseConfig };