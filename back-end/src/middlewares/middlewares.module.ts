import { Module } from '@nestjs/common';
import { MiddlewaresService } from './middlewares.service';

@Module({
  providers: [MiddlewaresService]
})
export class MiddlewaresModule {}
