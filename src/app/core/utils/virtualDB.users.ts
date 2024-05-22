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
        new User('someone1', 'somehow1', 'a@a', 'tel aviv', 'Aa1234567'),
        new User('someone2', 'somehow2', 'b@b', 'tel aviv', 'Aa1234567'),
    ]
}