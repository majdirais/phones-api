import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';   // ← add
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({   // ← add
    whitelist: true,                        // ← add
    forbidNonWhitelisted: true,             // ← add
    transform: true,                        // ← add
  }));                                      // ← add

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Phones API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  const config = app.get(ConfigService);
  const port = Number(config.get<string>('PORT') ?? '3000');

  await app.listen(port);
  console.log(`Application running on http://localhost:${port}`);
}
bootstrap();