import { Global, Module } from '@nestjs/common';
import { LocationRepo } from './dbaccess/location.repo';
import { PrismaService } from './dbaccess/prisma.service';

@Global()
@Module({
  controllers: [],
  providers: [LocationRepo, PrismaService],
  exports: [LocationRepo, PrismaService],
})
export class SharedModule {}
