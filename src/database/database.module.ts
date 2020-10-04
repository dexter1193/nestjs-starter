import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { databaseConnection } from './database.provider';

@Module({
    imports: [ConfigModule],
    providers: [...databaseConnection],
    exports: [...databaseConnection]
})
export class DatabaseModule {}
