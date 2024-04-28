import { Controller, Get, Param, Query } from '@nestjs/common';
import { HistoryService } from './history.service';

@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Get(':location_id')
  async gethistoryForecast(
    @Param('location_id') id: string,
    @Query('days') days: string,
  ) {
    const historicalWeatherData =
      await this.historyService.getHistoricalWeather(
        parseInt(id, 10),
        parseInt(days, 10),
      );
    return historicalWeatherData;
  }
}
