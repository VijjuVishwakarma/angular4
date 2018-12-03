import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  actorDetails=[{"id":1,"name":'Pawan Kalyan',"age":45,"category":'cinema actor','address':'hyderabad'},
  {"id":2,"name":'Mahesh Babu',"age":45,"category":'cinema actor','address':'hyderabad'},
  {"id":3,"name":'Prabhas',"age":40,"category":'cinema actor','address':'hyderabad'},
  {"id":4,"name":"Jr NTR","age":35,"category":'cinema actor','address':'hyderabad'}]

  actorDetail={};
  actors=['Pawan Kalyan','Mahesh Babu','Prabhas','Jr NTR'];
  constructor() { }

  ngOnInit() {
  }
getDetails(actor:String){
    for(let  i of this.actorDetails){
      
      if(i.name===actor){
        console.log('Success');
        this.actorDetail=i;
      }
    }
    console.log(this.actorDetail);
    console.log("Button clicked for"+actor);
}
}
