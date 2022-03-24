import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'; 
import { Router } from '@angular/router';
import {Observable} from 'rxjs';   
import {FarmerserviceService} from '../farmerservice.service'; 

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})



export class RegistrationComponent implements OnInit {
    
    message!: string;
    
    constructor(private formbulider: FormBuilder,private router: Router,private loginService:FarmerserviceService) { }

    RegisterUserForm:FormGroup=new FormGroup({
    Farmername:new FormControl("",[Validators.required,Validators.maxLength(10),Validators.pattern("^[a-zA-Z]+$")]),
    Contactno:new FormControl("",[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    Farmeremail:new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    Address:new FormControl("",[Validators.required,Validators.maxLength(100),Validators.pattern("^[a-zA-Z]+$")]),
    City:new FormControl("",[Validators.required,Validators.maxLength(10),Validators.pattern("^[a-zA-Z]+$")]),
    State:new FormControl("",[Validators.required,Validators.maxLength(20),Validators.pattern("^[a-zA-Z]+$")]),
   
    Pincode:new FormControl("",[Validators.required]),
    PAN:new FormControl("",[Validators.required]),
    Adhaar:new FormControl("",[Validators.required]),
  
   LandAddress:new FormControl("",[Validators.required,Validators.maxLength(100),Validators.pattern("^[a-zA-Z]+$")]),
   LandPin:new FormControl("",[Validators.required]),
   Farmerpassword:new FormControl("",[Validators.required,Validators.maxLength(10)]),
  });

  get Farmername()
  {
    return this.RegisterUserForm.get('Farmername');
  }
  get Contactno()
  {
    return this.RegisterUserForm.get('Contactno');
  }
  get Farmeremail()
  {
    return this.RegisterUserForm.get('Farmeremail');
  }
  get Address()
  {
    return this.RegisterUserForm.get('Address');
  }
  get City()
  {
    return this.RegisterUserForm.get('City');
  }
  get State()
  {
    return this.RegisterUserForm.get('State');
  }
  
  get Pincode()
  {
    return this.RegisterUserForm.get('Pincode');
  }
  
  get Adhaar()
  {
    return this.RegisterUserForm.get('Adhaar');
  }
  get PAN()
  {
    return this.RegisterUserForm.get('PAN');
  }
  get LandAddress()
  {
    return this.RegisterUserForm.get('LandAddress');
  }
  get LandPin()
  {
    return this.RegisterUserForm.get('LandPin');
  }
  get Farmerpassword()
  {
    return this.RegisterUserForm.get('Farmerpassword');
  }
  

  ngOnInit(): void {
  }

  RegisterUser()    
  {    
    console.log(this.RegisterUserForm.value)
   this.loginService.Register(this.RegisterUserForm.value).subscribe(    
    (data: any)=>    
    {    
      console.log(data);
       
      this.RegisterUserForm.reset();    
      this.message="Registered Successfully"
      alert("Registered Successfully");
      this.router.navigateByUrl('login')
    },
    error=>{
      console.log(error.message)
      this.message="User already exists"
      alert("User already exists");

    }
    ); 
  }    

  

}