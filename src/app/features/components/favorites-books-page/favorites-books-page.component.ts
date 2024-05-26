import { Component } from '@angular/core';
import { CorrectUserService } from '../../../core/services/correct-user.service';
import { User } from '../../../core/models/user.interface';

@Component({
  selector: 'app-favorites-books-page',
  templateUrl: './favorites-books-page.component.html',
  styleUrl: './favorites-books-page.component.css'
})
export class FavoritesBooksPageComponent {
  user!: User | null
  constructor(private correctUser : CorrectUserService){
    this.user = correctUser.user
  }
}
