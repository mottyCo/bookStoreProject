import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrl: './book-info.component.css'
})
export class BookInfoComponent implements OnInit {
  @Input() bookName!: string
  @Input() author!: string
  @Input() price!: number
  @Input() discount!: number | null

  priceAfterDiscount! : number | null 
  constructor(){

  }
  ngOnInit(){
    if(this.discount != null){
      this.priceAfterDiscount = this.price - (this.price *( this.discount / 100))
    }else{
      this.priceAfterDiscount = null
    }
  }
}
