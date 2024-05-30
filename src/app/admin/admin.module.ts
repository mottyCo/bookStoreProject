import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent, } from './components/login/login.component';
import { ManagePanelComponent } from './components/manage-panel/manage-panel.component';
import { AdminService } from './services/admin.service';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminLoginComponent,
    ManagePanelComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    AdminService

  ]
})
export class AdminModule { }
