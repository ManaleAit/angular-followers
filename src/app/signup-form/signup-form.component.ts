import { Component, OnInit } from '@angular/core';
import {FormGroup,ReactiveFormsModule,FormControl,Validators} from '@angular/forms';
import {UsernameValidator} from './username.validitor';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  form=new FormGroup(
    {
      username:new FormControl('',[Validators.required,Validators.minLength(3),UsernameValidator.connotContainSpace]),
      password:new FormControl('',Validators.required),
    }
  )
get username(){
  return this.form.get('username');
}
get password(){
  return this.form.get('password');
}
  submit(f){}
}
