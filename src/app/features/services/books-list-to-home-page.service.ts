import { Injectable } from '@angular/core';
import { VirtualDB } from '../../core/utils/virtualDB.booksList';
import { BooksCategories } from '../../core/models/booksCategories';
import { Book } from '../../core/models/bookInterface';

@Injectable({
  providedIn: 'root'
})
export class BooksListToHomePageService {
  allBooks!: Book[]
  categories!: BooksCategories[]
  constructor(private booksDB : VirtualDB) { 
    this.allBooks = booksDB.books;
    this.categories = booksDB.categories;
  }
  getAllBooks(){
    return this.allBooks
  }
  getBookMatchToSearch(books : Book[], text : string){
    return books.filter((book : Book) => book.name.toLowerCase().includes(text.toLowerCase()) || book.author.toLowerCase().includes(text.toLowerCase()))
  }
  sortByBookNameA2Z(books : Book[]){
    books.sort((a, b) => {
      if (a.name < b.name)
        return -1;
      if (a.name > b.name)
        return 1;
      return 0;
    });
    return books
  }
  sortByBookNameZ2A(books : Book[]){
    books.sort((a, b) => {
      if (a.name < b.name)
        return 1;
      if (a.name > b.name)
        return -1;
      return 0;
    });
    return books
  }
  sortByAuthorNameA2Z(books : Book[]){
    books.sort((a, b) => {
      if (a.author < b.author)
        return -1;
      if (a.author > b.author)
        return 1;
      return 0;
    });
    return books
  }
  sortByAuthorNameZ2A(books : Book[]){
    books.sort((a, b) => {
      if (a.author < b.author)
        return 1;
      if (a.author > b.author)
        return -1;
      return 0;
    });
    return books
  }
  sortByPriceLowToHigh(books : Book[]){
    books.sort((a, b) => {
      if(b.discountByPrecent == null && a.discountByPrecent == null){
        if (a.price < b.price)
          return -1;
        if (a.price > b.price)
          return 1;
      }else if(b.discountByPrecent != null && a.discountByPrecent == null){
        if (a.price <  b.price - (b.price *( b.discountByPrecent / 100)))
          return -1;
        if (a.price > b.price)
          return 1;
      }else if(a.discountByPrecent != null && b.discountByPrecent == null){
        if (a.price - (a.price *( a.discountByPrecent / 100)) <  b.price )
          return -1;
        if (a.price - (a.price *( a.discountByPrecent / 100)) > b.price)
          return 1;
      }else if(a.discountByPrecent != null && b.discountByPrecent != null){
        if (a.price - (a.price *( a.discountByPrecent / 100)) <  b.price - (b.price *( b.discountByPrecent / 100)) )
          return -1;
        if (a.price - (a.price *( a.discountByPrecent / 100)) > b.price - (b.price *( b.discountByPrecent / 100)))
          return 1;
      }
        
      return 0;
    });
    return books
  }
  sortByPriceHighToLow(books : Book[]){
    books.sort((a, b) => {
      if(b.discountByPrecent == null && a.discountByPrecent == null){
        if (a.price > b.price)
          return -1;
        if (a.price < b.price)
          return 1;
      }else if(b.discountByPrecent != null && a.discountByPrecent == null){
        if (a.price >  b.price - (b.price *( b.discountByPrecent / 100)))
          return -1;
        if (a.price < b.price)
          return 1;
      }else if(a.discountByPrecent != null && b.discountByPrecent == null){
        if (a.price - (a.price *( a.discountByPrecent / 100)) >  b.price )
          return -1;
        if (a.price - (a.price *( a.discountByPrecent / 100)) < b.price)
          return 1;
      }else if(a.discountByPrecent != null && b.discountByPrecent != null){
        if (a.price - (a.price *( a.discountByPrecent / 100)) >  b.price - (b.price *( b.discountByPrecent / 100)) )
          return -1;
        if (a.price - (a.price *( a.discountByPrecent / 100)) < b.price - (b.price *( b.discountByPrecent / 100)))
          return 1;
      }
      return 0;
    });
    return books
  }
  showBooksCategory(category : BooksCategories){
    return this.allBooks.filter((book)=>book.category === category)
  }
  displayDiscountOnly(){
    return this.allBooks.filter((book)=>book.discountByPrecent != null)
  }
  displayFullPriceOnly(){
    return this.allBooks.filter((book)=>book.discountByPrecent == null)
  }
}
