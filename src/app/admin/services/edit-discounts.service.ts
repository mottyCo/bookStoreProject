import { Injectable } from '@angular/core';
import { VirtualDB } from '../../core/utils/virtualDB.booksList';

@Injectable()
export class EditDiscountsService {

  constructor(private booksDB : VirtualDB) { }

  addDiscountForAllBooks(precent : number){
    for (let book of this.booksDB.books) {
      book.discountByPrecent = precent
    }
  }

  removeDiscountFromAllBooks(){
    for (let book of this.booksDB.books) {
      book.discountByPrecent = null
    }
  }
}
