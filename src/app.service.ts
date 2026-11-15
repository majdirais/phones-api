import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';   // ← add

@Injectable()
export class AppService {
  constructor(private readonly config: ConfigService) {}   // ← add

  getHello(): string {
    return 'Hello World!';
  }

  getAppName(): string {                                              // ← add
    return this.config.get<string>('APP_NAME', 'Nest Application');   // ← add
  }                                                                   // ← add
}