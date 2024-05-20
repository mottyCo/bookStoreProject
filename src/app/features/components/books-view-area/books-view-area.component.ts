import { Component } from '@angular/core';
import { BooksListToHomePageService } from '../../services/books-list-to-home-page.service';
import { Book } from '../../../core/models/bookInterface';
import { BooksCategories } from '../../../core/models/booksCategories';

@Component({
  selector: 'app-books-view-area',
  templateUrl: './books-view-area.component.html',
  styleUrl: './books-view-area.component.css'
})
export class BooksViewAreaComponent {
  booksToDisplay : Book[]| undefined
  booksCategories! : BooksCategories[]
  constructor(private booksService : BooksListToHomePageService){
    this.booksToDisplay = booksService.getAllBooks()
    this.booksCategories = booksService.categories
 
  }

  onTypeSearchBar(event : any){
    const searchText:string = event?.target.value;
    if(this.booksToDisplay != undefined)
      this.booksToDisplay = this.booksService.getBookMatchToSearch(this.booksService.getAllBooks(), searchText)
  }
  sortA2ZbookName(){
    if(this.booksToDisplay != undefined)
      this.booksToDisplay = this.booksService.sortByBookNameA2Z(this.booksToDisplay)
  }
  sortZ2AbookName(){
    if(this.booksToDisplay != undefined)
      this.booksToDisplay = this.booksService.sortByBookNameZ2A(this.booksToDisplay)
  }
  sortA2ZauthorName(){
    if(this.booksToDisplay != undefined)
      this.booksToDisplay = this.booksService.sortByAuthorNameA2Z(this.booksToDisplay)
  }
  sortZ2AauthorName(){
    if(this.booksToDisplay != undefined)
      this.booksToDisplay = this.booksService.sortByAuthorNameZ2A(this.booksToDisplay)
  }
  sortByPriceHighToLow(){
    if(this.booksToDisplay != undefined)
      this.booksToDisplay = this.booksService.sortByPriceHighToLow(this.booksToDisplay)
  }
  sortByPriceLowToHigh(){
    if(this.booksToDisplay != undefined)
      this.booksToDisplay = this.booksService.sortByPriceLowToHigh(this.booksToDisplay)
  }
  showBooksCategory(category : BooksCategories){
    this.booksToDisplay = this.booksService.showBooksCategory(category)
  }
  displayDiscountOnly(){
    this.booksToDisplay = this.booksService.displayDiscountOnly()
  }
  displayFullPriceBooksOnly(){
    this.booksToDisplay = this.booksService.displayFullPriceOnly()
  }
}
