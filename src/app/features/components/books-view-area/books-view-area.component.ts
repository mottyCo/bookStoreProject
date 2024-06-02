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
  currentPage : number = 0
  booksToDisplay : Book[]| undefined
  booksCollection : Book[]| undefined
  booksToDisplayInPages! : Book[][]
  booksCategories! : BooksCategories[]
  constructor(private booksService : BooksListToHomePageService){
    this.booksCollection = booksService.getAllBooks()
    this.booksCategories = booksService.categories
    this.setBooksToDisplayIntoPages()
  }

  onTypeSearchBar(event : any){
    const searchText:string = event?.target.value;
    if(this.booksCollection != undefined)
      this.booksCollection = this.booksService.getBookMatchToSearch(this.booksService.getAllBooks(), searchText)
    this.setBooksToDisplayIntoPages()
  }
  sortA2ZbookName(){
    if(this.booksCollection != undefined)
      this.booksCollection = this.booksService.sortByBookNameA2Z(this.booksCollection)
    this.setBooksToDisplayIntoPages()
  }
  sortZ2AbookName(){
    if(this.booksCollection != undefined)
      this.booksCollection = this.booksService.sortByBookNameZ2A(this.booksCollection)
    this.setBooksToDisplayIntoPages()
  }
  sortA2ZauthorName(){
    if(this.booksCollection != undefined)
      this.booksCollection = this.booksService.sortByAuthorNameA2Z(this.booksCollection)
    this.setBooksToDisplayIntoPages()
  }
  sortZ2AauthorName(){
    if(this.booksCollection != undefined)
      this.booksCollection = this.booksService.sortByAuthorNameZ2A(this.booksCollection)
    this.setBooksToDisplayIntoPages()
  }
  sortByPriceHighToLow(){
    if(this.booksCollection != undefined)
      this.booksCollection = this.booksService.sortByPriceHighToLow(this.booksCollection)
    this.setBooksToDisplayIntoPages()
  }
  sortByPriceLowToHigh(){
    if(this.booksCollection != undefined)
      this.booksCollection = this.booksService.sortByPriceLowToHigh(this.booksCollection)
    this.setBooksToDisplayIntoPages()
  }
  showBooksCategory(category : BooksCategories){
    this.booksCollection = this.booksService.showBooksCategory(category)
    this.setBooksToDisplayIntoPages()
  }
  displayDiscountOnly(){
    this.booksCollection = this.booksService.displayDiscountOnly()
    this.setBooksToDisplayIntoPages()
  }
  displayFullPriceBooksOnly(){
    this.booksCollection = this.booksService.displayFullPriceOnly()
    this.setBooksToDisplayIntoPages()
  }
  setBooksToDisplayIntoPages(){
    this.booksToDisplayInPages = [[]]
    if(this.booksCollection){
      let counter = 0
      let pageNumber = 0
      for(let book of this.booksCollection){
        if(counter === 8){
          pageNumber++
          counter = 0
          this.booksToDisplayInPages.push([])
        }  
        this.booksToDisplayInPages[pageNumber].push(book)
        counter++
      }
    }
    this.booksToDisplay = this.booksToDisplayInPages[0]
    this.currentPage = 0
  }
  displayPage(i : number){
    this.booksToDisplay = this.booksToDisplayInPages[i]
    this.currentPage = i
  }
}
