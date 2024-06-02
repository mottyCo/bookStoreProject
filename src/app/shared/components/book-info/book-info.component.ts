import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../../core/models/bookInterface';
import { UsersService } from '../../../features/services/users.service';
import { CurrentUserService } from '../../../core/services/currect-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrl: './book-info.component.css'
})
export class BookInfoComponent implements OnInit {
  @Input() book!: Book


  priceAfterDiscount! : number | null
  constructor(private usersService : UsersService, public currentUser : CurrentUserService, private router : Router){

  }
  addToCart(){
    if(this.currentUser.user){
      this.usersService.addBookToCart(this.book)
      this.currentUser.updateTotalPrice()
    }else{
      this.router.navigate(['login'])
    }
  }
  addToFavorite(){
    if(this.currentUser.user){
      this.usersService.addBookToFavorite(this.book)
    }else{
      this.router.navigate(['login'])
    }

  }
  removeFromCart(){
    this.usersService.removeBookFromCart(this.book)
    this.currentUser.updateTotalPrice()
  }
  removeFromFavorite(){
    this.usersService.removeBookFromFavorite(this.book)
  }
  ngOnInit(){
    if(this.book.discountByPrecent != null){
      this.priceAfterDiscount = this.book.price - (this.book.price *( this.book.discountByPrecent / 100))
    }else{
      this.priceAfterDiscount = null
    }
  }
}
