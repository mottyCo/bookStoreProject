import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,AbstractControl,Validators, ValidationErrors, FormBuilder } from '@angular/forms';
import { VirtualUsersDB } from '../../../core/utils/virtualDB.users';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit{
  constructor(private router : Router, private formBuilder : FormBuilder, private usersDb : VirtualUsersDB, private userService : UsersService){}
  signupForm !: FormGroup;
  firstName!: AbstractControl;
  lastName!: AbstractControl;
  email!: AbstractControl;
  address!: AbstractControl;
  password!: AbstractControl;
  repeatPassword!: AbstractControl;

  submitClicked = false

  navigateToLogin(){
    this.router.navigate(['login'])
  }
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      FirstName: ['', [Validators.required, Validators.minLength(2)]],
      LastName: ['', [Validators.required, Validators.minLength(2)]],
      Email: ['', [Validators.required, Validators.email]],
      Address: ['', [Validators.required, Validators.minLength(3)]],
      Password: ['', [Validators.required, Validators.minLength(8)]],
      RepeatPassword: ['', [Validators.required, Validators.minLength(8), this.repeatPasswordValidator]]

    },{})
    this.firstName = this.signupForm.get('FirstName') as AbstractControl
    this.lastName = this.signupForm.get('LastName') as AbstractControl
    this.email = this.signupForm.get('Email') as AbstractControl
    this.address= this.signupForm.get('Address') as AbstractControl
    this.password = this.signupForm.get('Password') as AbstractControl
    this.repeatPassword = this.signupForm.get('RepeatPassword') as AbstractControl
  }
  onSubmit(){
    if(!this.signupForm.invalid){
      if(this.userService.addUser(this.firstName.value, this.lastName.value, this.email.value , this.address.value, this.password.value)){
        this.router.navigate(['home'])
      }
    }
    else{
      this.submitClicked = true
    }
  }
  firstNameValidatorMessage(): string | undefined{
    const errors : any = this.firstName.errors
    console.log(errors);

    if(errors?.required)
      return 'first name required'
    else if(errors?.minlength)
      return 'first name must includes 2 characters at least'
    return undefined
  }
  lastNameValidatorMessage(): string | undefined{
    const errors : any = this.lastName.errors
    if(errors?.required)
      return 'last name required'
    if(errors?.minlength)
      return 'last name must includes 2 characters at least'
    return undefined
  }
  emailValidatorMessage(): string | undefined{
    const errors : any = this.email.errors
    if(errors?.required)
      return 'email required'
    if(errors?.email)
      return 'email invalid'
    return undefined
  }
  addressValidatorMessage(): string | undefined{
    const errors : any = this.address.errors
    if(errors?.required)
      return 'address required'
    if(errors?.minlength)
      return 'addrerss must includes 3 characters at least'
    return undefined
  }
  passwordValidatorMessage(): string | undefined{
    const errors : any = this.password.errors
    if(errors?.required)
      return 'password required'
    if(errors?.minlength)
      return 'password must includes 8 characters at least'
    return undefined
  }
  repeatPasswordValidator(control : AbstractControl): ValidationErrors | null{

    if(control.parent?.value.Password === control.value)
      return null


    return {'notSamePassword' : true}
  }
  repeatPasswordValidatorMessage(): string | undefined{
    const errors : any = this.repeatPassword.errors
    if(errors?.required)
      return 'password required'
    if(errors?.minlength)
      return 'password must includes 8 characters at least'
    if(errors?.notSamePassword)
      return 'not same passwords'
    return undefined
  }
}
