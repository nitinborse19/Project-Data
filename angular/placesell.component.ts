import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SellcropsserviceService } from '../sellcropsservice.service';

@Component({
  selector: 'app-placesell',
  templateUrl: './placesell.component.html',
  styleUrls: ['./placesell.component.css']
})
export class PlacesellComponent implements OnInit {

  message!: any;
  constructor(private formbulider: FormBuilder,private router: Router,private sellService:SellcropsserviceService){}

  cropform:FormGroup=new FormGroup({
    croptype:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z]+$")]),
    cropname:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z]+$")]),
    fertilizer:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z]+$")]),
    quantity:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z]+$")]),
    farmeremail:new FormControl(sessionStorage.getItem('username')),
    initialprice:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z]+$")])

  });

  get croptype()
  {
    return this.cropform.get('croptype');
  }

  get cropname()
  {
    return this.cropform.get('cropname');
  }

  get fertilizer()
  {
    return this.cropform.get('fertilizer');
  }
  get quantity()
  {
    return this.cropform.get('quantity');
  }

  get initialprice()
  {
    return this.cropform.get('initialprice');
  }


  email!:string|null;
  
  

  ngOnInit(): void {
    this.email=localStorage.getItem('username');
    
  }
  submitform()
  {
    console.log(this.cropform.value);
  }
  Applyforsell()
  {
    console.log(this.cropform.value)
    this.cropform.value.farmeremail=localStorage.getItem('username')
    this.sellService.SellCrops(this.cropform.value).subscribe(
      (data:any)=>
      {
        console.log(data);
        
        this.cropform.reset();
        this.message="Crop Added Successfully"
        alert("Sell request placed");
        this.router.navigateByUrl('farmerwelcome')
      }
    )
  }

}
