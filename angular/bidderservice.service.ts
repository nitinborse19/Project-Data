import { Injectable } from '@angular/core';
import { RegistrationbidComponent } from './registrationbid/registrationbid.component';
import {HttpClient} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';  
import { from, Observable, Subject } from 'rxjs'; 
import { SellCrops } from './sell-crops';
import { ClaimClass } from './claim-class';
import { AdminmarketplaceComponent } from './adminmarketplace/adminmarketplace.component';
import { Bidapprove } from './bidapprove';
import { Bidprice } from './bidprice';
import { AdminInsuranceClass } from './admin-insurance-class';


@Injectable({
  providedIn: 'root'
})
export class BidderserviceService {
  getById(arg0: any) {
    throw new Error('Method not implemented.');
  }
  private apiServer = "http://localhost:32633/api/BidderBid/";
  private apiServer2="http://localhost:32633/api/bidcrop/";
   private apiServer3="http://localhost:32633/api/viewhistory/";
   private apiServer4="http://localhost:32633/api/adminclaim/";
  public subject=new Subject<boolean>();
  Url! :string;  
  Url1!:string;
  Url2!:string;
  token! : string;  
  header : any;  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',  
      
    })}
  constructor(private httpClient : HttpClient) { 
    this.Url='http://localhost:32633/api/bidder';
    this.Url1='http://localhost:32633/api/bidapprove';
    this.Url2='http://localhost:32633/api/bidprices';
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    
    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings);  
  }
  getAll(): Observable<SellCrops[]> {
    return this.httpClient.get<SellCrops[]>(this.apiServer)
  } 
    getAll3(): Observable<SellCrops[]> {
    return this.httpClient.get<SellCrops[]>(this.apiServer3+'Bid')
  }  
  getAlladmininsurance(): Observable<AdminInsuranceClass[]> {
    return this.httpClient.get<AdminInsuranceClass[]>(this.apiServer4+'AId')
  }  
  

approvebid(bidprice:Bidprice): Observable<any[]>{
  return this.httpClient.post<any>(this.Url2 ,JSON.stringify(bidprice),this.httpOptions );
}

  getAlladminclaim(): Observable<ClaimClass[]> {
    return this.httpClient.get<ClaimClass[]>(this.apiServer)
  } 

 /*  getByIdadminclaim(requestid:number): Observable<ClaimClass> {
    return this.httpClient.get<ClaimClass>(this.apiServer  + requestid)
  } */



  getById1(requestid:number): Observable<SellCrops> {
    return this.httpClient.get<SellCrops>(this.apiServer  + requestid)
   
  }
  recievedStatus():Observable<boolean>
  {
    return this.subject.asObservable();
  }
  

 
  Login(model : any){        
    return this.httpClient.post<any>(this.Url+'/BidderLogin',JSON.stringify(model),this.httpOptions );  
  }  


  ApproveBid(bid:AdminmarketplaceComponent)  
  {      
   return this.httpClient.post<AdminmarketplaceComponent[]>(this.Url1 , bid, this.httpOptions)  
  } 



  Register(register:RegistrationbidComponent)  
  {      
   return this.httpClient.post<RegistrationbidComponent[]>(this.Url , register, this.httpOptions)  
  } 
  update(cropid:number, product:SellCrops,): Observable<SellCrops> {
    return this.httpClient.put<SellCrops>(this.apiServer  + cropid, JSON.stringify(product), this.httpOptions)
  
  }
  
}