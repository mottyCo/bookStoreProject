import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isHamburgerClicked = false
  onHamburgerClick(){
    this.isHamburgerClicked = true
  }
  onCloseHamburgerClick(){
    this.isHamburgerClicked = false
  }
}
