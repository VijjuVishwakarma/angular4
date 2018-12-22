import { Component, OnInit } from '@angular/core';
import { Actor } from '../model/actor.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  actor:Actor;

  constructor() { 
    this.actor = new Actor();
  }

  ngOnInit() {
  }

  handleRegister(){
    console.log("Registration No :: "+this.actor.registrationNo);
    console.log("First Name :: "+this.actor.firstName);
    console.log("Last Name :: "+this.actor.lastname);
    console.log("Type :: "+this.actor.type);
    console.log("Contact No :: "+this.actor.contactNo);
    console.log("address No :: "+this.actor.address);
    console.log("Category No :: "+this.actor.category);
  }
}
aa