import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Concert, ConcertDocument } from 'src/schemas/concert.schema';
import { CreateConcertDto } from './dto/create-concert.dto';
import { UpdateConcertDto } from './dto/update-concert.dto';

@Injectable()
export class ConcertsService {
  constructor(@InjectModel(Concert.name) private ConcertModel: Model<ConcertDocument>) {}
  async create(createConcertDto: CreateConcertDto): Promise<Concert> {
    return new this.ConcertModel(createConcertDto).save();
  }
 

  async findAll() {
    return this.ConcertModel.find();
  }

  findOne(_id: ObjectId) {
    return this.ConcertModel.findOne({ _id });
  }

  async update(_id: ObjectId, updateConcertDto: UpdateConcertDto) {
    return this.ConcertModel.updateOne({ _id }, { $set: {...updateConcertDto}});
  }

  async remove(_id: ObjectId) {
    return this.ConcertModel.deleteOne({ _id });
  }
}
