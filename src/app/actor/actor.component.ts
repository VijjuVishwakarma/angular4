import { Component, OnInit } from '@angular/core';
import {ActorService} from '../service/actor.service';
@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  service:ActorService;
  
  actorDetail={};
  actors=['Pawan Kalyan','Mahesh Babu','Prabhas','Jr NTR'];
  constructor(service:ActorService) {
    this.service = service;
    
   }

  ngOnInit() {
  }
  getDetails(actor:String){

    this.actorDetail = this.service.getActor(actor);

  }
    
}
