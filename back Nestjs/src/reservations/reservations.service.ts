import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import {
  Reservation,
  ReservationDocument,
} from 'src/schemas/reservation.schema';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';

@Injectable()
export class ReservationsService {
  constructor(
    @InjectModel(Reservation.name)
    private ReservationModel: Model<ReservationDocument>,
  ) {}

  async create(
    createReservationDto: CreateReservationDto,
  ): Promise<Reservation> {
    return new this.ReservationModel(createReservationDto).save();
  }

  async findAll() {
    return this.ReservationModel.find();
  }

  findOne(user_name: string) {
    return this.ReservationModel.find({ user_name });
  }

  async update(_id: ObjectId, updateReservationDto: UpdateReservationDto) {
    return this.ReservationModel.updateOne(
      { _id },
      { $set: { ...updateReservationDto } },
    );
  }

  async remove(_id: ObjectId) {
    return this.ReservationModel.deleteOne({ _id });
  }
}
