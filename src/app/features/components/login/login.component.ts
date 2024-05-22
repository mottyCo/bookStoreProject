import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators ,ValidationErrors} from '@angular/forms';
import { Router } from '@angular/router';
import { VirtualUsersDB } from '../../../core/utils/virtualDB.users';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  constructor(private router : Router, private formBuilder : FormBuilder, private usersDB : VirtualUsersDB, private userService : UsersService){}
  loginForm !: FormGroup
  email !: AbstractControl;
  password !: AbstractControl;
  submitClicked = false
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Email: ['',[Validators.required, Validators.email] ],
      Password: ['', [Validators.required, Validators.minLength(8)]],
    },{})
    this.email = this.loginForm.get('Email') as AbstractControl
    this.password = this.loginForm.get('Password') as AbstractControl
  }
  onSubmit(){
    if(!this.loginForm.invalid){
      if(this.userService.canUserLogin(this.email.value , this.password.value))
        this.router.navigate(['home'])
      else{
        this.submitClicked = true
      }
        
    }   
    else
        this.submitClicked = true
  }
  navigateToSignup(){
    this.router.navigate(['signup'])
  }

}
