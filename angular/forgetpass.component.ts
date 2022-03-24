import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent implements OnInit {
  ForgotPassform:FormGroup=new FormGroup({
    Email!:new FormControl("")
  })

  constructor() { }

  ngOnInit(): void {
  }

  ForgotPassword(){
    alert("Reset link sent to email")
  }

}
