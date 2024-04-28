import { Module } from '@nestjs/common';
import { WeatherController } from './weather.controller';
import { CacheModule } from '@nestjs/cache-manager';
import { WeatherService } from './weather.service';

@Module({
  imports: [CacheModule.register()],
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class WeatherModule {}
