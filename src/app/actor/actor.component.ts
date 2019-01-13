import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import {ActorService} from '../service/actor.service';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import { Actor } from '../model/actor.model';
@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit,AfterViewInit,OnDestroy {

  service:ActorService;
  actorsData:Actor[] = [];
  actorData : Actor;
  searchText:String;
  actors=['Pawan Kalyan','Mahesh Babu','Prabhas','Jr NTR','Ram','Ram Charan','Sunil'];
  constructor(service:ActorService) {
    this.service = service;
    
   }

  ngOnInit() {
    console.log("ngOnInit method in Actor component")
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit method in Actor component")
  }
  ngOnDestroy(){
    console.log("ngOnDestroy method in Actor component")    
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