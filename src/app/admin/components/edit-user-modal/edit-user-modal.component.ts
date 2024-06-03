import { Component } from '@angular/core';
import { EditUsersService } from '../../services/edit-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrl: './edit-user-modal.component.css'
})
export class EditUserModalComponent {
  title! : string


  firstName : string | null = null;
  lastName : string | null = null;
  email : string | null = null;
  address : string | null = null;
  password : string | null = null;

  errorMessage : null | string = null

  onSubmit(){
    if(this.firstName && this.firstName.length > 1  ){
      if(this.lastName && this.lastName.length > 1){
        if(this.email && this.email.length > 5 && this.email.includes('@')){
          if(this.address && this.address.length >3){
            if(this.password && this.password.length > 7){
              if(this.usersService.currentUser)
                this.usersService.editUserDetails(this.usersService.currentUser, this.firstName, this.lastName, this.email, this.address, this.password)
              else
                this.usersService.addUser( this.firstName, this.lastName, this.email, this.address, this.password)

              this.errorMessage = null
              this.router.navigate(['admin/editUsers'])
            }else{
              this.errorMessage = 'user password required and must be 8 characters at least'
            }
          }else{
            this.errorMessage = 'user address required and must be 4 characters at least'
          }
        }else{
          this.errorMessage = 'user email required and must be 6 characters at least and includes @ sign'
        }
      }else{
        this.errorMessage = 'user last name required and must be 2 characters at least'
      }
    }else{
      this.errorMessage = 'user first name required and must be 2 characters at least'
    }
  }
  constructor( private usersService : EditUsersService, private router : Router){
    if(this.usersService.currentUser){
      this.firstName = this.usersService.currentUser.firstName
      this.lastName = this.usersService.currentUser.lastName
      this.email = this.usersService.currentUser.email
      this.address= this.usersService.currentUser.address
      this.password = this.usersService.currentUser.password
      this.title = 'edit user: ' + this.firstName
    }
  else{
    this.title = 'new user'
  }
  }
}
