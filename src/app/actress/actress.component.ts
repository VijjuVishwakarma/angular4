import { Component, OnInit } from '@angular/core';
import { ActressService } from '../service/actress.service';

@Component({
  selector: 'app-actress',
  templateUrl: './actress.component.html',
  //styleUrls: ['./actress.component.css']
})
export class ActressComponent implements OnInit {

 service:ActressService;

  actressDetail={};
  actress=['Pawan Kalyan','Mahesh Babu','Prabhas','Jr NTR'];
  constructor(service:ActressService) {
	  this.service=service;
   }

  ngOnInit() {
  }
getDetails(actress:String){
	this.actressDetail=this.service.getActress(actress);
   
}
}
