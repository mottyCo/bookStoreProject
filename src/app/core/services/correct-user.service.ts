import { Injectable } from '@angular/core';
import { VirtualUsersDB } from '../utils/virtualDB.users';
import { User } from '../models/user.interface';


@Injectable({
  providedIn: 'root'
})
export class CorrectUserService {
  user: User | null = null
  constructor(private usersDB : VirtualUsersDB) { 
    // this.user = usersDB.users[0]

  }
}
