import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  @Input()
  currentBalance:number;

  @Input()
  withdrawAmt:number;

  @Output()
  callback:EventEmitter<Number> = new EventEmitter<Number>();

  constructor() { }

  ngOnInit() {
  }

  handleWithdraw(){
    console.log("Current Amount :: "+this.currentBalance+" withdraw Amount ::  "+this.withdrawAmt);

    if(this.currentBalance>this.withdrawAmt){
      let balance = this.currentBalance-this.withdrawAmt;
      this.callback.emit(balance);
    }

  }
}
