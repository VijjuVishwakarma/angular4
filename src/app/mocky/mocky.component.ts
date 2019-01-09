import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-mocky',
  templateUrl: './mocky.component.html',
  styleUrls: ['./mocky.component.css']
})
export class MockyComponent implements OnInit {
// HttpClient provide response directly. no need to call json method
// Http class provide response by calling json method

  mockiyResponse : any;
  http:Http;
  userDetail : any;
  constructor(http:Http) {
    this.http = http;
    this.http.get('http://www.mocky.io/v2/5c2f50d83200006f00590778').subscribe(res => this.mockiyResponse = res.json());
    //fetch('http://www.mocky.io/v2/5c2f50d83200006f00590778').then(res => res.json().then( resData => this.mockiyResponse = resData));

   // let res : Promise<Response> =  <Promise<Response>>this.http.get('http://www.mocky.io/v2/5c2f50d83200006f00590778').toPromise();
    
  }

  ngOnInit() {
    
  }

  getDetails( id:number){
    console.log("Id :: "+id);
    this.mockiyResponse.map(user => {
      if(user.id == id){
        this.userDetail = user;
      }
    })
  }
}
