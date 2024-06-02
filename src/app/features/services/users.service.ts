import { Injectable } from '@angular/core';
import { VirtualUsersDB } from '../../core/utils/virtualDB.users';
import { User } from '../../core/models/user.interface';
import { CurrentUserService } from '../../core/services/currect-user.service';
import { Router } from '@angular/router';
import { Book } from '../../core/models/bookInterface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private usersDB : VirtualUsersDB  , private currentUser : CurrentUserService, private router : Router) { }
  addUser(firstName : string, lastName : string, email : string, address : string, password : string){
    const newUser = new User(firstName, lastName,email,address,password)
    for(let user of this.usersDB.users){
      if(user.email === email)
        return false
    }
    this.usersDB.users.push(newUser)
    this.currentUser.user = newUser
    return true
  }
  logOut(user : User | null){
    if(user === this.currentUser.user)
      this.currentUser.user = null
    this.router.navigate(['home'])
  }
  canUserLogin(email : string | null , password : string | null){
    for(let user of this.usersDB.users){
      if(user.email === email && user.password === password){
        this.currentUser.user = user
        return true
      }
    }
    return false
  }

  addBookToFavorite(book : Book){
    if(!this.currentUser.user?.favoriteBooksList.includes(book))
      this.currentUser.user?.favoriteBooksList.push(book)
  }
  addBookToCart(book : Book){
    if(!this.currentUser.user?.cart.includes(book))
      this.currentUser.user?.cart.push(book)
  }
  removeBookFromCart(book : Book){
    const index = this.currentUser.user?.cart.indexOf(book)
    if(index != undefined)
      this.currentUser.user?.cart.splice(index, 1)
  }
  removeBookFromFavorite(book : Book){
    const index = this.currentUser.user?.favoriteBooksList.indexOf(book)
    if(index != undefined)
      this.currentUser.user?.favoriteBooksList.splice(index, 1)
  }
}
