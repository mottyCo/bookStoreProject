import { Injectable } from '@angular/core';
import { VirtualUsersDB } from '../../core/utils/virtualDB.users';
import { User } from '../../core/models/user.interface';

@Injectable()
export class EditUsersService {

  constructor(private usersDB : VirtualUsersDB) { }
  currentUser : User | null = null
  getAllUsers(){
    return this.usersDB.users
  }
  filterUsers(searchKey : string){
    return this.usersDB.users.filter((user) => {
      return user.firstName.includes(searchKey) || user.lastName.includes(searchKey) ? true : false
    })
  }
  editUserDetails(user : User, firstName : null | string, lastName : null | string, email : null | string, address : null | string, password : null | string){
    if(firstName)
      user.firstName = firstName
    if(lastName)
      user.lastName = lastName
    if(email)
      user.email = email
    if(address)
      user.address = address
    if(password)
      user.password = password
    this.currentUser = null
  }
  deleteUser(user : User){
    const index = this.usersDB.users.indexOf(user)
    this.usersDB.users.splice(index, 1)
    this.currentUser = null
  }
  deleteAllUsers(){
    this.usersDB.users = []
    this.currentUser = null
  }
  addUser(firstName : string, lastName : string, email : string, address : string, password : string){
    const newUser = new User(firstName, lastName, email, address, password)
    this.usersDB.users.push(newUser);
    this.currentUser = null
  }
}
