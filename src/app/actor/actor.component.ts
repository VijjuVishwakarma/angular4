import { Component, OnInit } from '@angular/core';
import {ActorService} from '../service/actor.service';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import { Actor } from '../model/actor.model';
@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  service:ActorService;
  actorsData:Actor[] = [];
  actorData : Actor;
  
  actors=['Pawan Kalyan','Mahesh Babu','Prabhas','Jr NTR','Ram','Ram Charan','Sunil'];
  constructor(service:ActorService) {
    this.service = service;
    
   }

  ngOnInit() {
  }
  getDetails(actor:String){

    this.service.getActor(actor).subscribe((response:Actor[]) =>{
      response.map(act => {
        if(act.firstName === actor){
          this.actorData = act;
        }
      })
      //this.actorsData=response
    
    });
    

  }
    
}

// http.get  ---  Observable<Response>
// subscript --- data what i am getting not able to assining in actor[] type