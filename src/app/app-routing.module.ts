import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksViewAreaComponent } from './features/components/books-view-area/books-view-area.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { LoginComponent } from './features/components/login/login.component';
import { SignUpComponent } from './features/components/sign-up/sign-up.component';
import { LogoutComponent } from './features/components/logout/logout.component';
import { loginGuard} from './core/guards/user.guard';
import { logoutGuard } from './core/guards/logout.guard';
import { FavoritesBooksPageComponent } from './features/components/favorites-books-page/favorites-books-page.component';
import { CartPageComponent } from './features/components/cart-page/cart-page.component';

const routes: Routes = [
  {path: 'home', component: BooksViewAreaComponent, },
  {path: 'login', component: LoginComponent,pathMatch: 'full', canActivate: [loginGuard]},
  {path: 'signup', component: SignUpComponent, canActivate: [loginGuard]},
  {path: 'logout', component: LogoutComponent, canActivate: [logoutGuard]},
  {path: 'favorite' , component: FavoritesBooksPageComponent, canActivate: [logoutGuard]},
  {path: 'cart', component: CartPageComponent, canActivate: [logoutGuard]},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
