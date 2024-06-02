import { Injectable } from '@angular/core';
import { VirtualUsersDB } from '../utils/virtualDB.users';
import { User } from '../models/user.interface';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../models/bookInterface';
import { BooksCategories } from '../models/booksCategories';


@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  user: User | null = null
  constructor(private usersDB : VirtualUsersDB) {
    this.user = usersDB.users[0]
  }
  totalCartPrice : number = 0
  totalPriceUpdator = new BehaviorSubject(0);

  updateTotalPrice(){
    let newTotalPrice  = 0
    if(this.user?.cart){
      for(let book of this.user?.cart){
        if (book.discountByPrecent !== null) {
          newTotalPrice+= book.price - (book.price *( book.discountByPrecent / 100))
        }else{
          newTotalPrice += book.price
        }

      }
    }
    this.totalCartPrice = newTotalPrice
    this.totalPriceUpdator.next(this.totalCartPrice)
  }
  resetCart(){
    this.totalPriceUpdator.next(0)
    if(this.user)
      this.user.cart = []
  }
}
