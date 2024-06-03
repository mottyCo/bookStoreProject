import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-admin',
  templateUrl: './main-admin.component.html',
  styleUrl: './main-admin.component.css'
})
export class MainAdminComponent {
  constructor(private router : Router){
    this.router.navigate(['admin/managePanel'])
  }
}
