import { Injectable } from '@angular/core';
import { VirtualUsersDB } from '../../core/utils/virtualDB.users';
import { User } from '../../core/models/user.interface';
import { CorrectUserService } from '../../core/services/correct-user.service';
import { Router } from '@angular/router';
import { Book } from '../../core/models/bookInterface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private usersDB : VirtualUsersDB  , private correctUser : CorrectUserService, private router : Router) { }
  addUser(firstName : string, lastName : string, email : string, address : string, password : string){
    const newUser = new User(firstName, lastName,email,address,password)
    for(let user of this.usersDB.users){
      if(user.email === email)
        return false
    }
    this.usersDB.users.push(newUser)
    this.correctUser.user = newUser
    return true
  }
  logOut(user : User | null){
    if(user === this.correctUser.user)
      this.correctUser.user = null
    this.router.navigate(['home'])
  }
  canUserLogin(email : string | null , password : string | null){
    for(let user of this.usersDB.users){
      if(user.email === email && user.password === password){
        this.correctUser.user = user    
        return true
      }   
    }
    return false
  }

  addBookToFavorite(book : Book){
    if(!this.correctUser.user?.favoriteBooksList.includes(book))
      this.correctUser.user?.favoriteBooksList.push(book)
  }
  addBookToCart(book : Book){
    if(!this.correctUser.user?.cart.includes(book))
      this.correctUser.user?.cart.push(book)
  }
  removeBookFromCart(book : Book){
    const index = this.correctUser.user?.cart.indexOf(book)
    if(index != undefined)
      this.correctUser.user?.cart.splice(index, 1)
  }
  removeBookFromFavorite(book : Book){
    const index = this.correctUser.user?.favoriteBooksList.indexOf(book)
    if(index != undefined)
      this.correctUser.user?.favoriteBooksList.splice(index, 1)
  }
}
