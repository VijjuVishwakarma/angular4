import { Component, OnInit } from '@angular/core';
import { Actor } from '../model/actor.model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {

  registrationFrom : FormGroup;

  constructor(private fb:FormBuilder) { 
    this.registrationFrom = fb.group({
      rno: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]),
      fname:new FormControl('',Validators.required),
      lname:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      artist:new FormControl('',Validators.required),
      contactno:new FormControl('',Validators.required),
      address:new FormControl('',Validators.required),
      movieName:new FormControl('',Validators.required)
    });
  }

  ngOnInit() {
  }

  handleRegister(){

    console.log(this.registrationFrom.get('rno').value);
    /*console.log("First Name :: "+this.actor.firstName);
    console.log("Last Name :: "+this.actor.lastname);
    console.log("Type :: "+this.actor.type);
    console.log("Contact No :: "+this.actor.contactNo);
    console.log("address No :: "+this.actor.address);
    console.log("Category No :: "+this.actor.category);
    */
  }

}
