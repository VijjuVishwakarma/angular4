import { Injectable } from '@angular/core';

@Injectable()
export class ActressService {
 actressDetails=[{"id":1,"name":'Pawan Kalyan',"age":45,"category":'cinema actor','address':'hyderabad'},
  {"id":2,"name":'Mahesh Babu',"age":45,"category":'cinema actor','address':'hyderabad'},
  {"id":3,"name":'Prabhas',"age":40,"category":'cinema actor','address':'hyderabad'},
  {"id":4,"name":"Jr NTR","age":35,"category":'cinema actor','address':'hyderabad'}]

  constructor() { }
  
  getActress(actress:String){
    for(let  i of this.actressDetails){
      
      if(i.name===actress){
        console.log('Success');
        return i;

  }
    }
  }
}