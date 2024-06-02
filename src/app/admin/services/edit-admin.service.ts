import { Injectable } from '@angular/core';
import { VirtualUsersDB } from '../../core/utils/virtualDB.users';

@Injectable()
export class EditAdminService {

  constructor(private userDb : VirtualUsersDB) { }
  changeAdminDetails(userName : string, password : string){
    this.userDb.admins[0].name = userName;
    this.userDb.admins[0].password = password;
  }
}
