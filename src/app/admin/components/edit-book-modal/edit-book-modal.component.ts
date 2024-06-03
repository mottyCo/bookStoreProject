import { Component } from '@angular/core';
import { BooksCategories } from '../../../core/models/booksCategories';
import { EditBooksService } from '../../services/edit-books.service';
import { Router } from '@angular/router';
import { VirtualDB } from '../../../core/utils/virtualDB.booksList';

@Component({
  selector: 'app-edit-book-modal',
  templateUrl: './edit-book-modal.component.html',
  styleUrl: './edit-book-modal.component.css'
})
export class EditBookModalComponent {
  categories! : BooksCategories[]
  title! : string
  errorMessage : string | null = null
  bookName : string | null = null
  author : string | null = null
  bookCategory : BooksCategories | null = null
  price : number | null = null
  discountByPrecent : number | null = null
  constructor(private bookService : EditBooksService, private router : Router, booksDB : VirtualDB){
    if(bookService.currentBook){
      this.bookName = bookService.currentBook.name
      this.author = bookService.currentBook.author
      this.bookCategory = bookService.currentBook.category
      this.price = bookService.currentBook.price
      this.discountByPrecent = bookService.currentBook.discountByPrecent
      this.title = 'editing: ' + this.bookName
    }else{
      this.title = 'new book'
    }
    this.categories = booksDB.categories
  }
  onSubmit(){
    if(this.bookName && this.bookName.length > 1){
      if (this.author && this.author.length >1) {
        if(this.bookCategory){
          if(this.price && this.price > 0){
            if(!this.bookService.currentBook)
              this.bookService.addBook(this.bookName, this.author, this.price, this.bookCategory, this.discountByPrecent)
            else
              this.bookService.editBookDetails(this.bookName, this.author, this.price, this.bookCategory, this.discountByPrecent)
            this.router.navigate(['/admin/managePanel'])
          }else{
            this.errorMessage = 'price required and must be above zero'
          }
        }else{
          this.errorMessage = 'categoty required'
        }
      }else{
        this.errorMessage = 'author name required and must be 2 characters at least'
      }
    }else{
      this.errorMessage = 'book name required and must be 2 characters at least'
    }
  }
}
