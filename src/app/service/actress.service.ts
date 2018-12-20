import { Injectable } from '@angular/core';

@Injectable()
export class ActressService {
 actressDetails=[{"id":1,"name":'Kajal',"age":35,"category":'cinema actress','address':'hyderabad'},
  {"id":2,"name":'Tamanna',"age":32,"category":'cinema actress','address':'hyderabad'},
  {"id":3,"name":'Anuska',"age":35,"category":'cinema actress','address':'hyderabad'},
  {"id":4,"name":"Samantha","age":30,"category":'cinema actress','address':'hyderabad'}]

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