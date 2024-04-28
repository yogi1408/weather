import {
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
  Res,
  Req,
} from '@nestjs/common';
import { LocationService } from './location.service';

@Controller('locations')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get()
  getAllLocations() {
    return this.locationService.getAllLocations();
  }

  @Post()
  addLocation(@Res() res: Response, @Req() req: Request) {
    return this.locationService.addLocation(res, req);
  }

  @Get(':id')
  getLocationById(@Param('id') id: string) {
    return this.locationService.getLocationById(parseInt(id, 10));
  }

  @Put(':id')
  updateLocation(
    @Res() res: Response,
    @Req() req: Request,
    @Param('id') id: string,
  ) {
    return this.locationService.updateLocation(res, req, parseInt(id, 10));
  }

  @Delete(':id')
  deleteLocation(
    @Res() res: Response,
    @Req() req: Request,
    @Param('id') id: string,
  ) {
    return this.locationService.deleteLocation(res, req, parseInt(id, 10));
  }
}
