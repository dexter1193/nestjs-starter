import { NestFactory } from '@nestjs/core';
import { ConfigType } from '@nestjs/config';
import { AppModule } from './app/app.module';
import { AppConfig } from './config/app.config';
import { WinstonModule } from 'nest-winston';
import { loggerConfig } from './config/logger.config';

async function bootstrap() {
	const app = await NestFactory.create(AppModule, {
		logger: WinstonModule.createLogger(loggerConfig)
	});
	const appConfig: ConfigType<typeof AppConfig> = app.get(AppConfig.KEY);
	app.enableCors();
	await app.listen(appConfig.PORT);
  console.log('-----------------***** APP started at Port: ' + appConfig.PORT + ' *****-----------------');
}

bootstrap();
