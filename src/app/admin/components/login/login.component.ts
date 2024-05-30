import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators ,ValidationErrors} from '@angular/forms';
import { Router } from '@angular/router';
import { VirtualUsersDB } from '../../../core/utils/virtualDB.users';
import { UsersService } from '../../../features/services/users.service'
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class AdminLoginComponent implements OnInit{
  constructor(private adminService :AdminService   ,private router : Router, private formBuilder : FormBuilder, private usersDB : VirtualUsersDB, private userService : UsersService){}
  loginForm !: FormGroup
  name !: AbstractControl;
  password !: AbstractControl;
  submitClicked = false
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Name: ['',[Validators.required] ],
      Password: ['', [Validators.required, Validators.minLength(8)]],
    },{})
    this.name = this.loginForm.get('Name') as AbstractControl
    this.password = this.loginForm.get('Password') as AbstractControl
  }
  onSubmit(){
    if(!this.loginForm.invalid){
      if(this.name.value === this.usersDB.admins[0].name && this.password.value === this.usersDB.admins[0].password){
        this.adminService.isAdminLogedIn = true
        this.router.navigate(['admin/managePanel'])
      }else{
        this.submitClicked = true
      }
    }
    else{
        this.submitClicked = true
    }

  }
  navigateToSignup(){
    this.router.navigate(['signup'])
  }

}
