import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService,
                private jwtService: JwtService
              ) {}

    async validateUser(name: string, pass: string): Promise<any> {
      const user = await this.usersService.findOne(name);
      if (user) {
        const isMatch = await bcrypt.compare(pass, user.password);
        if (isMatch) {
          const { password, ...result } = user;
          return result;
        }
      }
      return null;
    }

    async login(user: any) {
      const payload = { username: user._doc.name, sub: user._doc._id, password: user._doc.password };
      console.log(payload);
      return {
        access_token: this.jwtService.sign(payload),
        username: payload.username
      };
    }
    
}
