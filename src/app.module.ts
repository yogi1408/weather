import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { RateLimitMiddleware } from './middleware/rate-limit.middleware';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { WeatherModule } from './weather/weather.module';
import { LocationModule } from './location/location.module';
import { SharedModule } from './shared/shared.service';
import { HistoryModule } from './history/history.module';

@Module({
  imports: [SharedModule, WeatherModule, LocationModule, HistoryModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RateLimitMiddleware, LoggerMiddleware).forRoutes('*');
  }
}
