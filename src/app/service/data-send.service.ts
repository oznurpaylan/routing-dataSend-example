import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSendService {

  constructor(private http:HttpClient) { }

  public currencyObservable=new BehaviorSubject("TL")

  setCurrency(val: any){
    this.currencyObservable.next(val)
  }
}
