import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';   // ← add
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhonesModule } from './phones/phones.module';

@Module({
  imports: [
    ConfigModule.forRoot({   // ← add
      isGlobal: true,        // ← add
    }),                      // ← add
    PhonesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}