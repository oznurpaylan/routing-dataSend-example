import { Component, OnInit } from '@angular/core';
import { DataSendService } from 'src/app/service/data-send.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit{

  currency:any
  constructor(private service:DataSendService){}
  ngOnInit(): void {

    this.service.currencyObservable.subscribe(x=>{
      this.currency=x
      console.log("A component alındı"+ this.currency)
    })
  }
}
