import { Component } from '@angular/core';
import { EditAdminService } from '../../services/edit-admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrl: './edit-admin.component.css'
})
export class EditAdminComponent {
  userName! : string;
  password!: string;

  errorMessage : null | string = null

  onSubmit(){
    if(this.userName && this.userName.length > 3  ){
      if(this.password && this.password.length > 7){
        this.adminServise.changeAdminDetails(this.userName, this.password)
        this.router.navigate(['admin/managePanel'])
      }else{
        this.errorMessage = 'password required and must be 8 characters at least'
      }
    }else{
      this.errorMessage = 'user name required and must be 4 characters at least'
    }
  }
  constructor( private adminServise : EditAdminService, private router : Router){}
}
