import { Component } from '@angular/core';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrl: './book-info.component.css'
})
export class BookInfoComponent {
  bookName = 'default book name'
  author = 'default author name'
  price = 59
}
