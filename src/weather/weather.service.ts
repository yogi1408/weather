import { Injectable, NotFoundException } from '@nestjs/common';
import axios from 'axios';
import { LocationRepo } from 'src/shared/dbaccess/location.repo';

@Injectable()
export class WeatherService {
  constructor(private locationRepo: LocationRepo) {}

  async getWeather(id: number) {
    const location = await this.locationRepo.getById(id);
    if (!location) {
      throw new NotFoundException(`Location with ID ${id} not found`);
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${process.env.APIKEY}&units=metric`;
    const response = await axios.get(url);
    return response.data;
  }
}
