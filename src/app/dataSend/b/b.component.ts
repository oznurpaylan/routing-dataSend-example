import { Component, OnInit } from '@angular/core';
import { DataSendService } from 'src/app/service/data-send.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  currency:any
  constructor(private service:DataSendService){}

  ngOnInit(): void {

    this.service.currencyObservable.subscribe(x=>{
      this.currency=x
      console.log("B component alındı"+x)
    })

  }

}
