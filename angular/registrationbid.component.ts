import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'; 
import { Router } from '@angular/router';
import {Observable} from 'rxjs'; 
import {BidderserviceService} from '../bidderservice.service' 


@Component({
  selector: 'app-registrationbid',
  templateUrl: './registrationbid.component.html',
  styleUrls: ['./registrationbid.component.css']
})
export class RegistrationbidComponent implements OnInit {

      message!: string;
      constructor(private formbulider: FormBuilder,private router: Router,private loginService:BidderserviceService) { }
 
      RegisterBidderForm:FormGroup=new FormGroup({
      Biddername:new FormControl("",[Validators.required,Validators.maxLength(10),Validators.pattern("^[a-zA-Z]+$")]),
      Contactno:new FormControl("",[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      Bidderemail:new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      Address:new FormControl("",[Validators.required,Validators.maxLength(100),Validators.pattern("^[a-zA-Z]+$")]),
      City:new FormControl("",[Validators.required,Validators.maxLength(10),Validators.pattern("^[a-zA-Z]+$")]),
      State:new FormControl("",[Validators.required,Validators.maxLength(20),Validators.pattern("^[a-zA-Z]+$")]),
      Pincode:new FormControl("",[Validators.required]),
      PAN:new FormControl("",[Validators.required]),
      Adhaar:new FormControl("",[Validators.required]),
      BidderPassword:new FormControl("",[Validators.required,Validators.maxLength(10)])
  });

  get Biddername()
  {
    return this.RegisterBidderForm.get('Biddername');
  }
  get Contactno()
  {
    return this.RegisterBidderForm.get('Contactno');
  }
  get Bidderemail()
  {
    return this.RegisterBidderForm.get('Bidderemail');
  }
  get Address()
  {
    return this.RegisterBidderForm.get('Address');
  }
  get City()
  {
    return this.RegisterBidderForm.get('City');
  }
  get State()
  {
    return this.RegisterBidderForm.get('State');
  }
  
  get Pincode()
  {
    return this.RegisterBidderForm.get('Pincode');
  }
  
  get Adhaar()
  {
    return this.RegisterBidderForm.get('Adhaar');
  }
  get PAN()
  {
    return this.RegisterBidderForm.get('PAN');
  }
  
  get BidderPassword()
  {
    return this.RegisterBidderForm.get('BidderPassword');
  }



  ngOnInit(): void {
  }



   RegisterUser()    
   {    
    console.log(this.RegisterBidderForm.value)
    this.loginService.Register(this.RegisterBidderForm.value).subscribe(    
    (data: any)=>    
    {    
      console.log(data);
       
      this.RegisterBidderForm.reset();    
      this.message="Registered Successfully"
      alert("Registered Successfully"); 
      this.router.navigateByUrl('bidderlogin')
    },
    error=>{
      console.log(error.message)
      this.message="User already exists"
      alert("Already exists");
    }
    ); 
  }    
}
