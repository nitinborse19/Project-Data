import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ClaimComponent } from './claim/claim.component';

@Injectable({
  providedIn: 'root'
})
export class ClaimServiceService {

  public subject=new Subject<boolean>();
  Url! :string;  
  token! : string;  
  header : any;  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      
    })}

    constructor(private http : HttpClient) {
    this.Url='http://localhost:32633/api/claimrequest';
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    
    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings);  }

    recievedStatus():Observable<boolean>
    {
      return this.subject.asObservable();
    }
    Claimsubmit(claim:ClaimComponent)  
    {     
     return this.http.post<ClaimComponent[]>(this.Url , claim, this.httpOptions)  
    } 
}
