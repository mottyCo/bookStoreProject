import { Component } from '@angular/core';
import { EditBooksService } from '../../services/edit-books.service';
import { Router } from '@angular/router';
import { Book } from '../../../core/models/bookInterface';

@Component({
  selector: 'app-edit-books',
  templateUrl: './edit-books.component.html',
  styleUrl: './edit-books.component.css'
})
export class EditBooksComponent {
  books! : Book[]
  constructor(private bookService : EditBooksService, private router : Router){
    this.books = bookService.getAllBooks()
  }

  filterBook(event : any){
    if(event.target.value == null || event.target.value === '')
      this.books = this.bookService.getAllBooks()
    else
      this.books = this.bookService.searchBook(event.target.value)
  }

  editBook(book : Book){
    this.bookService.currentBook = book
    this.router.navigate(['admin/editBook'])
  }
  deleteBook(book : Book){
    this.bookService.deleteBook(book);
  }
  deleteAllBooks(){
    this.bookService.deleteAllBooks()
    this.books = this.bookService.getAllBooks();
  }
}
