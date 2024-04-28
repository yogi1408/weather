import { Injectable, NotFoundException } from '@nestjs/common';
import axios from 'axios';
import { LocationRepo } from 'src/shared/dbaccess/location.repo';
import { Cache } from '@nestjs/cache-manager';

@Injectable()
export class WeatherService {
  constructor(
    private locationRepo: LocationRepo,
    private cacheManager: Cache,
  ) {}

  async getWeather(id: number) {
    const cacheKey = `weather_${id}`;
    const cachedData: any = await this.cacheManager.get(cacheKey);
    if (cachedData) {
      return JSON.parse(cachedData);
    }
    const location = await this.locationRepo.getById(id);
    if (!location) {
      throw new NotFoundException(`Location with ID ${id} not found`);
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${process.env.APIKEY}&units=metric`;
    const response = await axios.get(url);
    const weatherData = response.data;
    await this.cacheManager.set(cacheKey, JSON.stringify(weatherData), 100000);
    return weatherData;
  }
}
