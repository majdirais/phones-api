import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';   // ← add
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()                  // ← add
    .setTitle('Phones API')                                    // ← add
    .setVersion('1.0')                                         // ← add
    .build();                                                  // ← add
  const document = SwaggerModule.createDocument(app, swaggerConfig);   // ← add
  SwaggerModule.setup('api', app, document);                   // ← add

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();