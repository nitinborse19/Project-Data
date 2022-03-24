import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {BidderserviceService} from '../bidderservice.service';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';  


@Component({
  selector: 'app-bidderlogin',
  templateUrl: './bidderlogin.component.html',
  styleUrls: ['./bidderlogin.component.css']
})
export class BidderloginComponent implements OnInit {

    Loginform: any;
    model : any={}; 
    errorMessage!:string; 
    constructor(private formbulider: FormBuilder,private router:Router,private Service:BidderserviceService) { }  
   

    ; 

get username()
{
	return this.Loginform.get('username');
}

get password()
{
  return this.Loginform.get('password');
}



  ngOnInit(): void {


    this.Loginform = new FormGroup({
      username:new FormControl("", [Validators.required, Validators.maxLength(10), Validators.pattern("^[a-zA-Z]+$")]),
      password:new FormControl("",[Validators.required,Validators.minLength(6),Validators.pattern("^[a-zA-Z0-9]+$")])
   });
   /* sessionStorage.removeItem('UserName');    
    sessionStorage.clear();  */


  }

  
  submitform()
  {
	  console.log(this.Loginform.value);
  }


  login(){ 

    console.log(this.Loginform.value);   
       
    this.Service.Login(this.Loginform.value).subscribe(
      (res) => {  
          console.log("Success");
          alert("Login Successfully");
          localStorage.setItem('username',this.Loginform.value.username)
          //this.Service.sendstatus(true);
          this.Service.subject.next(true);
          console.log(localStorage.getItem('username'));
          this.router.navigate(['bidderwelcome']);        
      },    
      error => {    
        this.errorMessage = "Login Failed";
        alert("Invalid credentials");     
      }
    );
  }    
}


