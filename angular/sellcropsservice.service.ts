import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';  
import { from, Observable, Subject } from 'rxjs'; 
import { PlacesellComponent } from './placesell/placesell.component'; 

@Injectable({
  providedIn: 'root'
})
export class SellcropsserviceService {
  Url! :string;  
  token! : string;  
  header : any;  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      
    })}

  constructor(private http : HttpClient) {
    
    this.Url='http://localhost:32633/api/sellcrops';
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    
    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings); 
}


SellCrops(sellcrops:PlacesellComponent)  
   {      
    return this.http.post<PlacesellComponent[]>(this.Url , sellcrops, this.httpOptions)  
   } 

}




  