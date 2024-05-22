import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookInfoComponent } from './components/book-info/book-info.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    BookInfoComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BookInfoComponent
  ]
})
export class SharedModule { }
