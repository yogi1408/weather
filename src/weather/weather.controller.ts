// src/controllers/weather.controller.ts

import { Controller, Get, Param } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get(':location_id')
  async getWeatherForecast(@Param('location_id') id: string) {
    const weatherData = await this.weatherService.getWeather(parseInt(id, 10));
    return {
      temperature: weatherData.main.temp,
      humidity: weatherData.main.humidity,
      windSpeed: weatherData.wind.speed,
      name: weatherData.name,
    };
  }
}
