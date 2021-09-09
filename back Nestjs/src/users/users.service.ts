import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { UserDocument } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  
  async create(createUserDto: CreateUserDto): Promise<User> {
    const saltOrRounds = 10;
    const name = createUserDto['name'];
    const email = createUserDto['email'];
    const password = createUserDto['password'];
    const hash = await bcrypt.hash(password, saltOrRounds);
    const newUser = ({"name": name, "email": email, "password": hash});
    try {
      return (await new this.userModel(newUser).save())
    } catch (error) {
      return (null)
    }
  }

  async findAll() {
    return this.userModel.find();
  }

  // async findOne(_id: ObjectId) {
  //   return this.userModel.findById(_id);
  // }

  async findOne(name: string) {
    return this.userModel.findOne({ name });
  }

  async update(_id: ObjectId, updateUserDto: UpdateUserDto) {
    const saltOrRounds = 10;
    const admin = updateUserDto['admin'];
    const name = updateUserDto['name'];
    const email = updateUserDto['email'];
    const password = updateUserDto['password']
    const hash = await bcrypt.hash(password, saltOrRounds);
    const updatedUser = ({"admin": admin, "name": name, "email": email, "password": hash});
    return this.userModel.updateOne({ _id }, { $set: {...updatedUser}});
  }

  async remove(_id: ObjectId) {
    return this.userModel.deleteOne({ _id });
  }
}
  