import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';

@Injectable({
    providedIn: 'root'
  })

export class VirtualUsersDB{
    constructor(){}
    admins = [
        {
            name: 'admin',
            password: 'Admin1234'
        },
    ]
    users = [
        new User('AAAA', 'aaaa', 'a@a', 'tel aviv', 'Aa1234567'),
        new User('BBBB', 'bbbb', 'b@b', 'tel aviv', 'Aa1234567'),
        new User('CCCC', 'cccc', 'c@c', 'tel aviv', 'Aa1234567'),
        new User('DDDD', 'dddd', 'd@d', 'tel aviv', 'Aa1234567'),
        new User('EEEE', 'eeee', 'e@e', 'tel aviv', 'Aa1234567'),
        new User('FFFF', 'ffff', 'f@f', 'tel aviv', 'Aa1234567'),
        new User('GGGG', 'gggg', 'g@g', 'tel aviv', 'Aa1234567'),
    ]
}
