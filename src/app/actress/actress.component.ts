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
  actress=['Kajal','Tamanna','Anuskaa','Samantha'];
  constructor(service:ActressService) {
	  this.service=service;
   }

  ngOnInit() {
  }
getDetails(actress:String){
	this.actressDetail=this.service.getActress(actress);
   
}
}
