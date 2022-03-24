import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';  
import { from, Observable, Subject } from 'rxjs';  
import { RegistrationComponent } from './registration/registration.component';

@Injectable({
  providedIn: 'root'
})
export class FarmerserviceService {
  public subject=new Subject<boolean>();
  Url! :string;  
  token! : string;  
  header : any;  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      
    })}

    constructor(private http : HttpClient) 
    {
      this.Url='http://localhost:32633/api/user';
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
      
      const headerSettings: {[name: string]: string | string[]; } = {};  
      this.header = new HttpHeaders(headerSettings);  
  
    }
  
    recievedStatus():Observable<boolean>
    {
      return this.subject.asObservable();
    }
  
    Login(model : any){        
      return this.http.post<any>(this.Url+'/UserLogin',JSON.stringify(model),this.httpOptions );  
    }  
  
    Register(register:RegistrationComponent)  
     {      
      return this.http.post<RegistrationComponent[]>(this.Url , register, this.httpOptions)  
     } 
  }
