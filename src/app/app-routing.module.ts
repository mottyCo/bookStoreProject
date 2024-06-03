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
import { adminLoginGuard } from './admin/guards/admin-login.guard';
import { AdminLoginComponent } from './admin/components/login/login.component';
import { ManagePanelComponent } from './admin/components/manage-panel/manage-panel.component';
import { EditAdminComponent } from './admin/components/edit-admin/edit-admin.component';
import { EditUsersComponent } from './admin/components/edit-users/edit-users.component';
import { EditBooksComponent } from './admin/components/edit-books/edit-books.component';
import { EditDiscountsComponent } from './admin/components/edit-discounts/edit-discounts.component';
import { EditUserModalComponent } from './admin/components/edit-user-modal/edit-user-modal.component';
import { MainAdminComponent } from './admin/components/main-admin/main-admin.component';
import { EditBookModalComponent } from './admin/components/edit-book-modal/edit-book-modal.component';

const routes: Routes = [

  {path: 'test', component: ManagePanelComponent, pathMatch: 'prefix'},
  {path: 'home', component: BooksViewAreaComponent, },

  {path: 'login', component: LoginComponent,pathMatch: 'full', canActivate: [loginGuard]},
  {path: 'signup', component: SignUpComponent, canActivate: [loginGuard]},
  {path: 'logout', component: LogoutComponent, canActivate: [logoutGuard]},
  {path: 'favorite' , component: FavoritesBooksPageComponent, canActivate: [logoutGuard]},
  {path: 'cart', component: CartPageComponent, canActivate: [logoutGuard]},
  {path: 'admin/login', component: AdminLoginComponent, pathMatch: 'full'},
  {path: 'admin', canActivate: [adminLoginGuard],component: MainAdminComponent, children: [
    {path: 'login', component: AdminLoginComponent},
    {path: 'managePanel',  component: ManagePanelComponent,},
    {path: 'editAdmin' , component: EditAdminComponent},
    {path: 'editUser', component: EditUserModalComponent},
    {path: 'editUsers', component: EditUsersComponent},
    {path: 'editBook', component: EditBookModalComponent},
    {path: 'editBooks', component: EditBooksComponent},
    {path: 'editDiscounts', component: EditDiscountsComponent},
  ]},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
