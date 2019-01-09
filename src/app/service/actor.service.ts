import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Actor } from '../model/actor.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ActorService {
  /*actorDetails=[{"id":1,"name":'Pawan Kalyan',"age":45,"category":'cinema actor','address':'hyderabad','movies':25},
  {"id":2,"name":'Mahesh Babu',"age":45,"category":'cinema actor','address':'hyderabad','movies':25},
  {"id":3,"name":'Prabhas',"age":40,"category":'cinema actor','address':'hyderabad','movies':25},
  {"id":4,"name":"Jr NTR","age":35,"category":'cinema actor','address':'hyderabad','movies':27},
  {"id":5,"name":"Ram","age":35,"category":'cinema actor','address':'hyderabad','movies':20},
  {"id":6,"name":"Ram Charan","age":35,"category":'cinema actor','address':'hyderabad','movies':15},
  {"id":7,"name":"Sunil","age":40,"category":'commedian','address':'hyderabad','movies':100}
]
*/
http:HttpClient;
actorDetails : Observable<Actor>;
  constructor(http:HttpClient) {
      this.http = http;
   }
  
  getActor(actor:String):Observable<Actor[]>{

    return <Observable<Actor[]>>this.http.get('https://tollywoodservices.herokuapp.com/rest/actors');
	  /*for(let  i of this.actorDetails){
      
      if(i.name===actor){
        console.log('Success');
        return i;
      }
    }
    */
   // console.log(this.actorDetail);
   // console.log("Button clicked for"+actor);

  }

}
