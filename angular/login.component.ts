import { Component, OnInit } from '@angular/core';

import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {FarmerserviceService} from '../farmerservice.service';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';  


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

    LoginUserForm: any;
    model : any={}; 
    errorMessage!:string; 
    constructor(private formbulider: FormBuilder,private router:Router,private Service:FarmerserviceService) { }  
   

    ; 

 

get Email()
{
	return this.LoginUserForm.get('Email');
}

get Password()
{
  return this.LoginUserForm.get('Password');
}



  ngOnInit(): void {

      this.LoginUserForm = new FormGroup({
      Email:new FormControl("", [Validators.required, Validators.maxLength(10), Validators.pattern("^[a-zA-Z]+$")]),
      Password:new FormControl("",[Validators.required,Validators.minLength(6),Validators.pattern("^[a-zA-Z0-9]+$")])
   });

  /*  sessionStorage.removeItem('UserName');    
    sessionStorage.clear(); */ 

  }

  
 
  login(){ 

    console.log(this.LoginUserForm.value);   
       
    this.Service.Login(this.LoginUserForm.value).subscribe(
      (res) => {  
          console.log("Success");
          alert("Login Successfully");
          localStorage.setItem('username',this.LoginUserForm.value.Email)
          //this.Service.sendstatus(true);
          this.Service.subject.next(true);
          console.log(localStorage.getItem('username'));
          this.router.navigate(['farmerwelcome']);     
           
      },    
      error => {    
        this.errorMessage = "Login Failed";
        alert("Invalid credentials");    
      }
    );
  }    
}

