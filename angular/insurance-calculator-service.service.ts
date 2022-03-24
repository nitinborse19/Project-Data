import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';  
import { from, Observable, Subject } from 'rxjs'; 
import { ApplInsuranceComponent } from './appl-insurance/appl-insurance.component';
import { InsuranceCalculator } from './insurance-calculator';
@Injectable({
  providedIn: 'root'
})
export class InsuranceCalculatorServiceService {

  Url! :string;  
  token! : string;  
  header : any;  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      
    })}

  constructor(private http : HttpClient) { 
    this.Url='http://localhost:32633/api/applyinsurance';
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    
    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings); 





  }

  CalcInsurance(insurance:ApplInsuranceComponent)  
  {      
   return this.http.post<ApplInsuranceComponent[]>(this.Url , insurance, this.httpOptions)  
  }


  

}
