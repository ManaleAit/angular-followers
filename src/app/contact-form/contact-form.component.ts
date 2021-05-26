import { Component, OnInit, NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  firstname:string;
  ContactMethods=['email','telephone','sms'];
  constructor() { }

  ngOnInit(): void {
  }
  log(firstname){//firstName){
    console.log(firstname);
  }
  logLast(lastName){
    console.log(lastName);
  }
  submit(f){
    console.log(f.value.contact.firstname);
  }
}
