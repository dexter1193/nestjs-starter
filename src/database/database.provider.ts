/**
 * File: database.provider.ts
 * Author: Dexter
 * Note:
 */

import { createConnection } from 'typeorm';
import { ConfigService } from '@nestjs/config';


const databaseConnection = [
    {
        provide: 'DATABASE_CONNECTION',
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => await createConnection({
            type: configService.get('DBTYPE'),
            host: configService.get('DBHOST'),
            port: configService.get('DBPORT'),
            username: configService.get('DBUSERNAME'),
            password: configService.get('DBPASSWORD'),
            database: configService.get('DBNAME'),
            synchronize: true,
            entities: [
                'dist/**/*.entity{.ts,.js}'
            ]
        })
    }
];

export { databaseConnection }