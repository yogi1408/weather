import { Injectable, NotFoundException } from '@nestjs/common';
import axios from 'axios';
import { LocationRepo } from 'src/shared/dbaccess/location.repo';

@Injectable()
export class HistoryService {
  constructor(private locationRepo: LocationRepo) {}

  async getHistoricalWeather(id: number, days: number) {
    const location = await this.locationRepo.getById(id);
    if (!location) {
      throw new NotFoundException(`Location with ID ${id} not found`);
    }
    const url = `https://pro.openweathermap.org/data/2.5/forecast/climate?lat=${location.latitude}&lon=${location.longitude}&cnt=${days}&appid=${process.env.APIKEY}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error(
        `Error fetching historical weather data: ${error.message}`,
      );
    }
  }
}
