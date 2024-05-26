import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SharedModule } from '../shared/shared.module';
import { BooksViewAreaComponent } from './components/books-view-area/books-view-area.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from '../core/models/user.interface';
import { FavoritesBooksPageComponent } from './components/favorites-books-page/favorites-books-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    BooksViewAreaComponent,
    LoginComponent,
    SignUpComponent,
    LogoutComponent,
    FavoritesBooksPageComponent,
    CartPageComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    BooksViewAreaComponent,
  
  ],
})
export class FeaturesModule { }
