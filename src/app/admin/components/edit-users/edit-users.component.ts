import { Component } from '@angular/core';
import { EditUsersService } from '../../services/edit-users.service';
import { User } from '../../../core/models/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrl: './edit-users.component.css'
})
export class EditUsersComponent {
  constructor(private usersService : EditUsersService, private router: Router){
    this.users = usersService.getAllUsers()
  }
  firstName : string | null = null;
  lastName : string | null = null;
  email : string | null = null;
  address : string | null = null;
  password : string | null = null;

  users! : User[] | null
  deleteAllUsers(){
    this.usersService.deleteAllUsers()
    this.users = this.usersService.getAllUsers()
  }
  filterUsers(event : any){
    if(event.target.value == null || event.target.value === '')
      this.users = this.usersService.getAllUsers()
    else
      this.users = this.usersService.filterUsers(event.target.value)
  }
  editUser(user : User){
    this.usersService.currentUser = user
    this.router.navigate(['admin/editUser'])
  }
  deleteUser(user : User){
    this.usersService.deleteUser(user)
    this.users = this.usersService.getAllUsers()
  }

}
