import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SharedModule } from '../shared/shared.module';
import { BooksViewAreaComponent } from './components/books-view-area/books-view-area.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    BooksViewAreaComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    BooksViewAreaComponent,
  ]
})
export class FeaturesModule { }
