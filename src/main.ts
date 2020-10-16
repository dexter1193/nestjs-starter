import { NestFactory } from '@nestjs/core';
import { ConfigType } from '@nestjs/config';
import { AppModule } from './app/app.module';
import { AppConfig } from './config/app.config';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
	const appConfig: ConfigType<typeof AppConfig> = app.get(AppConfig.KEY);
	app.enableCors();
	await app.listen(appConfig.PORT);
  console.log('-----------------***** APP started at Port: ' + appConfig.PORT + ' *****-----------------');
}

bootstrap();
