import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent, } from './components/login/login.component';
import { ManagePanelComponent } from './components/manage-panel/manage-panel.component';
import { AdminService } from './services/admin.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditAdminComponent } from './components/edit-admin/edit-admin.component';
import { EditUsersComponent } from './components/edit-users/edit-users.component';
import { EditBooksComponent } from './components/edit-books/edit-books.component';
import { EditDiscountsComponent } from './components/edit-discounts/edit-discounts.component';
import { EditAdminService } from './services/edit-admin.service';
import { EditBooksService } from './services/edit-books.service';
import { EditDiscountsService } from './services/edit-discounts.service';
import { EditUsersService } from './services/edit-users.service';
import { RouterModule } from '@angular/router';
import { EditUserModalComponent } from './components/edit-user-modal/edit-user-modal.component';
import { MainAdminComponent } from './components/main-admin/main-admin.component';
import { EditBookModalComponent } from './components/edit-book-modal/edit-book-modal.component';



@NgModule({
  declarations: [
    AdminLoginComponent,
    ManagePanelComponent,
    EditAdminComponent,
    EditUsersComponent,
    EditBooksComponent,
    EditDiscountsComponent,
    EditUserModalComponent,
    MainAdminComponent,
    EditBookModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    AdminService,
    EditAdminService,
    EditBooksService,
    EditDiscountsService,
    EditUsersService

  ]
})
export class AdminModule { }
