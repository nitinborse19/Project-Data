import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SellCrops } from './sell-crops';

@Injectable({
  providedIn: 'root'
})
export class MarketPlaceService {
  private apiServer = "http://localhost:32633/api/BidderBid/";
  //private apiServer2="http://localhost:32633/api/bidcrop/";
  public subject=new Subject<boolean>();
  Url! :string;  
  token! : string;  
  header : any;  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',  
      
    })}
  constructor(private httpClient : HttpClient) { }

  getAll(): Observable<SellCrops[]> {
    return this.httpClient.get<SellCrops[]>(this.apiServer)
  } 
}
