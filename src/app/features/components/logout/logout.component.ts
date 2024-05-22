import { Component } from '@angular/core';
import { CorrectUserService } from '../../../core/services/correct-user.service';
import { User } from '../../../core/models/user.interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  loggedUser!: User | null
  constructor(private correctUser : CorrectUserService, private usersService : UsersService){
    this.loggedUser = correctUser.user
  }
  logOut(){
    this.usersService.logOut(this.loggedUser)
  }

}
