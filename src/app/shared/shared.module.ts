import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookInfoComponent } from './components/book-info/book-info.component';



@NgModule({
  declarations: [
    BookInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BookInfoComponent
  ]
})
export class SharedModule { }
