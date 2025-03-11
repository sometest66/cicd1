import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! For git webhook trigger to coolify. added secret. trying one more trigger for auto cicd';
  }
}
