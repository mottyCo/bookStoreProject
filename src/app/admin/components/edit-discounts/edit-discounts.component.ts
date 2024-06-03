import { Component } from '@angular/core';
import { EditDiscountsService } from '../../services/edit-discounts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-discounts',
  templateUrl: './edit-discounts.component.html',
  styleUrl: './edit-discounts.component.css'
})
export class EditDiscountsComponent {
  discount! : number

  constructor(private discountService : EditDiscountsService, private router : Router){}

  addDiscount(){
    if(this.discount && this.discount > 0 && this.discount < 100){
      this.discountService.addDiscountForAllBooks(this.discount)
      this.router.navigate(['/admin/managePanel'])
    }
  }
  removeDiscount(){
    this.discountService.removeDiscountFromAllBooks()
    this.router.navigate(['/admin/managePanel'])
  }
}
