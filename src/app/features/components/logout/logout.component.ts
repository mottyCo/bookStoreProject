import { Component } from '@angular/core';
import { CurrentUserService } from '../../../core/services/currect-user.service';
import { User } from '../../../core/models/user.interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  loggedUser!: User | null
  constructor(private currentUser : CurrentUserService, private usersService : UsersService){
    this.loggedUser = currentUser.user
  }
  logOut(){
    this.usersService.logOut(this.loggedUser)
  }

}
