import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  currentAmount : number =10000;

  amount:number;

  constructor() { }

  ngOnInit() {
  }

  handleResponse(event){
    console.log(event);
    this.currentAmount = event;
  }
}
