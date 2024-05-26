import { Component,} from '@angular/core';
import { User } from '../../../core/models/user.interface';
import { CorrectUserService } from '../../../core/services/correct-user.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
  user!: User| null
  totalPrice : number = 0
  constructor(private correctUser : CorrectUserService){
    this.user = correctUser.user
    correctUser.totalPriceUpdator.subscribe(value => {
      this.totalPrice = value
    })
  }
  resetCart(){
    this.correctUser.resetCart()
  }


}
