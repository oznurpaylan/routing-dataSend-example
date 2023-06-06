import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataSendService } from '../service/data-send.service';

@Component({
  selector: 'app-data-send',
  templateUrl: './data-send.component.html',
  styleUrls: ['./data-send.component.css']
})
export class DataSendComponent implements OnInit {

  title = 'data send';
  currencyList: string[]=["TL","USD"]
  selectCurrency=new FormControl("TL")

  constructor(private service:DataSendService){}

  ngOnInit(): void {

    this.selectCurrency.valueChanges.subscribe(x=>{
      this.service.setCurrency(x)
    })
  }

}
