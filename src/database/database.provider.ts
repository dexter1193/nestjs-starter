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
            type: configService.get('DBConfig.DBTYPE'),
            host: configService.get('DBConfig.DBHOST'),
            port: configService.get('DBConfig.DBPORT'),
            username: configService.get('DBConfig.DBUSERNAME'),
            password: configService.get('DBConfig.DBPASSWORD'),
            database: configService.get('DBConfig.DBNAME'),
            synchronize: true,
            entities: [
                'dist/**/*.entity{.ts,.js}'
            ]
        })
    }
];

export { databaseConnection }