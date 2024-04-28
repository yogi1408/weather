import { Injectable } from '@nestjs/common';
import { Prisma, location } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class LocationRepo {
  constructor(private prisma: PrismaService) {}

  async getById(id: number): Promise<location> {
    return this.prisma.location.findUnique({
      where: {
        id,
      },
    });
  }

  async create(
    data: Prisma.XOR<
      Prisma.locationCreateInput,
      Prisma.locationUncheckedCreateInput
    >,
  ): Promise<location> {
    return this.prisma.location.create({
      data,
    });
  }

  async delete(where: Prisma.locationWhereUniqueInput): Promise<location> {
    return this.prisma.location.delete({
      where,
    });
  }

  async update(params: {
    where: Prisma.locationWhereUniqueInput;
    data: Prisma.XOR<
      Prisma.locationUpdateInput,
      Prisma.locationUncheckedUpdateInput
    >;
  }): Promise<location> {
    const { where, data } = params;
    return this.prisma.location.update({
      data,
      where,
    });
  }

  async getAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.locationWhereUniqueInput;
    where?: Prisma.locationWhereInput;
    orderBy?: Prisma.locationOrderByWithRelationInput;
  }): Promise<location[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.location.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}

export { location };
