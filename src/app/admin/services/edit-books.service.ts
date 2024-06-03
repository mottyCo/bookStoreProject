import { Injectable } from '@angular/core';
import { VirtualDB } from '../../core/utils/virtualDB.booksList';
import { Book } from '../../core/models/bookInterface';
import { BooksCategories } from '../../core/models/booksCategories';

@Injectable()
export class EditBooksService {
  currentBook : Book | null = null
  constructor(private booksService : VirtualDB) {}
  deleteAllBooks(){
    this.booksService.books = []
    this.currentBook = null
    console.log('1');

  }

  getAllBooks(){
    console.log(this.booksService.books);
    return this.booksService.books


  }
  searchBook(searchKey : string){
    return this.booksService.books.filter((book)=>{
      return (book.name.toLowerCase().includes(searchKey.toLowerCase()) || book.author.toLowerCase().includes(searchKey.toLowerCase()))
    })
  }
  editBookDetails( name : string, author : string , price : number, category : BooksCategories, discounts : number | null){
    if(this.currentBook){
      this.currentBook.author = author;
      this.currentBook.category = category;
      this.currentBook.discountByPrecent = discounts;
      this.currentBook.name = name;
      this.currentBook.price = price;
    }
    this.currentBook = null
  }
  deleteBook(book : Book){
    const index = this.booksService.books.indexOf(book)
    this.booksService.books.splice(index, 1)
    this.currentBook = null
  }
  addBook(name : string, author : string , price : number, category : BooksCategories, discounts : number | null){
    const newBook = new Book(name, price,author,'null', category, discounts )
    this.booksService.books.push(newBook)
    this.currentBook = null
  }
}
