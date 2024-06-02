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



@NgModule({
  declarations: [
    AdminLoginComponent,
    ManagePanelComponent,
    EditAdminComponent,
    EditUsersComponent,
    EditBooksComponent,
    EditDiscountsComponent
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
