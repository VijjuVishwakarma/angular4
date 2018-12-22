import { Component, OnInit } from '@angular/core';
import { Actor } from '../model/actor.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {

  registrationFrom : FormGroup;

  constructor(private fb:FormBuilder) { 
    this.registrationFrom = fb.group({
      rno:'',
      fname:'',
      lname:'',
      email:'',
      artist:'',
      contactno:'',
      address:'',
      movieName:''
    });
  }

  ngOnInit() {
  }

  handleRegister(){

    console.log(this.registrationFrom.get('rno'));
    /*console.log("First Name :: "+this.actor.firstName);
    console.log("Last Name :: "+this.actor.lastname);
    console.log("Type :: "+this.actor.type);
    console.log("Contact No :: "+this.actor.contactNo);
    console.log("address No :: "+this.actor.address);
    console.log("Category No :: "+this.actor.category);
    */
  }

}
aa