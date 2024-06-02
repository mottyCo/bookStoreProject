import { Component,} from '@angular/core';
import { User } from '../../../core/models/user.interface';
import { CurrentUserService } from '../../../core/services/currect-user.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
  user!: User| null
  totalPrice : number = 0
  constructor(private currentUser : CurrentUserService){
    this.user = currentUser.user
    currentUser.totalPriceUpdator.subscribe(value => {
      this.totalPrice = value
    })
  }
  resetCart(){
    this.currentUser.resetCart()
  }


}
