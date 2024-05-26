import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../../core/models/bookInterface';
import { UsersService } from '../../../features/services/users.service';
import { CorrectUserService } from '../../../core/services/correct-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrl: './book-info.component.css'
})
export class BookInfoComponent implements OnInit {
  @Input() book!: Book


  priceAfterDiscount! : number | null 
  constructor(private usersService : UsersService, public correctUser : CorrectUserService, private router : Router){

  }
  addToCart(){
    if(this.correctUser.user){
      this.usersService.addBookToCart(this.book)
      this.correctUser.updateTotalPrice()
    }else{
      this.router.navigate(['login'])
    }
  }
  addToFavorite(){
    if(this.correctUser.user){
      this.usersService.addBookToFavorite(this.book)
    }else{
      this.router.navigate(['login'])
    }

  }
  removeFromCart(){
    this.usersService.removeBookFromCart(this.book)
    this.correctUser.updateTotalPrice()
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
