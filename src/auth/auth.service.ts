/**
 * File: auth.service.ts
 * Author: Dexter
 * Note:
 */

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}

    async login(user: any) {
        // TODO: find user in db

        // generate and sign token
        const token = this._createToken(user);

        return {...token}
    }

    private _createToken({ user }: any): any {
        const expiresIn = process.env.EXPIRESIN;

        const payload = { username: user.email, sub: user._id, id: user._id };
        const accessToken = {
            access_token: this.jwtService.sign(payload),
            id: user._id,
            expiresIn
        };

        return accessToken;
    }

    async validateUser(payload: any): Promise<any> {
        // TODO: implement logic to fetch data from db
        const user = true;
        if (!user) {
          throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
        }
        return user;
      }
}