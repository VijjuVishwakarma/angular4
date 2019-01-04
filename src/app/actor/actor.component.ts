import { Component, OnInit } from '@angular/core';
import {ActorService} from '../service/actor.service';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  service:ActorService;
  actorsData:any;
  actorDetail:Observable<Response>;
  actors=['Pawan Kalyan','Mahesh Babu','Prabhas','Jr NTR','Ram','Ram Charan','Sunil'];
  constructor(service:ActorService) {
    this.service = service;
    
   }

  ngOnInit() {
  }
  getDetails(actor:String){

    this.actorDetail = this.service.getActor(actor);
    this.actorDetail.subscribe((res) => this.actorsData =  res)

  }
    
}

