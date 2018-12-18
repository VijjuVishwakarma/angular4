import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationNo : number = 0;

  firstName : string;

  lastname : string;

  type : string;

  contactNo : number;

  address  : string;

  movies:String[];

  category:String;

  categories:String[] = ['Hero','Villan','Commedian','Character Artist'];

  constructor() { }

  ngOnInit() {
  }

  handleRegister(){
    console.log("Registration No :: "+this.registrationNo);
    console.log("First Name :: "+this.firstName);
    console.log("Last Name :: "+this.lastname);
    console.log("Type :: "+this.type);
    console.log("Contact No :: "+this.contactNo);
    console.log("address No :: "+this.address);
    console.log("Category No :: "+this.category);
  }
}
