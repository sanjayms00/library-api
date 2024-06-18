import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  // Setting API Path
  const apiPath = 'api';
  app.setGlobalPrefix(apiPath);
  app.useGlobalPipes(new ValidationPipe());

  // Swagger Options
  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Nest-js Swagger API')
    .setDescription('Swagger API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  // Swagger path: http://localhost:3200/api/docs
  SwaggerModule.setup(`${apiPath}/docs`, app, document);

  await app.listen(3000);
}
bootstrap();
