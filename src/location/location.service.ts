// src/services/location.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../shared/dbaccess/prisma.service';
import { LocationRepo } from 'src/shared/dbaccess/location.repo';

@Injectable()
export class LocationService {
  constructor(private locationRepo: LocationRepo) {}
  async getAllLocations() {
    return this.locationRepo.getAll({});
  }

  async getLocationById(id: number) {
    const location = await this.locationRepo.getById(id);
    if (!location) {
      throw new NotFoundException(`Location with ID ${id} not found`);
    }
    return location;
  }

  async addLocation(res, req) {
    const { name, latitude, longitude } = req.body;
    const newLocation = await this.locationRepo.create({
      name: name,
      latitude: latitude,
      longitude: longitude,
    });
    return res.status(201).send({
      data: newLocation,
    });
  }

  async updateLocation(res, req, id: number) {
    const { name, latitude, longitude } = req.body;
    const updateLocation = await this.locationRepo.update({
      where: { id: id },
      data: { name, latitude, longitude },
    });
    return res.status(200).send({
      data: updateLocation,
    });
  }

  async deleteLocation(res, req, id: number): Promise<Location> {
    const deleteLocation = await this.locationRepo.delete({
      id: id,
    });
    return res.status(200).send({
      status_code: 200,
      data: deleteLocation,
    });
  }
}
