import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';   // ← add
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Phones API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  const config = app.get(ConfigService);                               // ← add
  const port = Number(config.get<string>('PORT') ?? '3000');           // ← add

  await app.listen(port);                                              // ← replaces the old app.listen line
  console.log(`Application running on http://localhost:${port}`);     // ← add
}
bootstrap();