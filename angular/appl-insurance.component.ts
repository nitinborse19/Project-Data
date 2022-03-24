import { Component, OnInit } from '@angular/core';
import { InsuranceCalculatorServiceService } from '../insurance-calculator-service.service';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'; 
import { Router } from '@angular/router';
import { InsuranceCalculator } from '../insurance-calculator';

@Component({
  selector: 'app-appl-insurance',
  templateUrl: './appl-insurance.component.html',
  styleUrls: ['./appl-insurance.component.css']
})
export class ApplInsuranceComponent implements OnInit {

    seasonform=new FormGroup({
    season:new FormControl("",[Validators.required]),
    year:new FormControl("",[Validators.required]),
    cropname:new FormControl("",[Validators.required]),
    area:new FormControl("",[Validators.required]),
    Farmeremail:new FormControl(localStorage.getItem('username')),
    suminsured:new FormControl("")
    
  });

  

  // var obj=new ClaimInsurance(); 

  message!: string;
  sharepremiumpercent!: number;
  calculatesuminsured!:number;
  premiumammount!: number;
  suminsuredperhectare!: number;
  insurancecompany!:string;
  landarea!:number;
  // actualrate:number=5;
  policyno!:number

  constructor(private formbulider: FormBuilder,private router: Router,private insuranceService:InsuranceCalculatorServiceService) { }

  

  get area()
  {
    return this.seasonform.get('area');
  }

  get season()
  {
    return this.seasonform.get('season');
  }

  get year()
  {
    return this.seasonform.get('year');
  }

  get sum()
  {
    return this.seasonform.get('sum');
  }
  get crop()
  {
    return this.seasonform.get('crop');
  }

  get suminsured()
  {
    return this.seasonform.get('suminsured');
  }



  email!:string|null;

  ngOnInit(): void {

    this.email=localStorage.getItem('username');
  }

  Calculate()
  {
    //this.policyno=10008;
    this.policyno=Math.floor(Math.random()*10000+10);
    this.suminsuredperhectare=1500;
    this.insurancecompany="GOVT BANK";
    this.landarea=this.seasonform.value.area;
    // console.log("Calculate function working");
    if (this.seasonform.value.season=='Kharif')
    {
      this.sharepremiumpercent=0.02;
    }
    if(this.seasonform.value.season=='Rabi')
    {
      this.sharepremiumpercent=0.015;
    }
    else
    {
      this.sharepremiumpercent=0.05;
    }

    this.calculatesuminsured=this.seasonform.value.area * this.suminsuredperhectare;   /* Rs 1784 per hectare */ 
    console.log("sum insured :" + this.suminsured);                          
    this.premiumammount = (this.calculatesuminsured*this.sharepremiumpercent);
    console.log(this.suminsured);                                    
    console.log(this.seasonform.value.season); 
    console.log(this.seasonform.value.area);  
    console.log(this.sharepremiumpercent);  
  }


  submitform()
  {
    console.log(this.seasonform.value);
  }

  CalculateInsurance()    
  {    
    
    this.insuranceService.CalcInsurance(this.seasonform.value).subscribe(    
    (data: any)=>    
    {    
      console.log(data);
      this.seasonform.reset();    
      this.message="Applied Successfully"
      alert("Insurance Applied Successfully");
      this.router.navigateByUrl('insurancepage')

    },

    error=>{
      console.log(error.message)
      this.message="Insurance already Applied"
      alert("Insurance already Applied");
      this.router.navigateByUrl('insurancepage')
    }
    );

    // this.claiminsurance.Amount=this.suminsured;
    // this.claiminsurance.Company=this.insurancecompany;
    // this.claiminsurance.InsuranceDate=new Date();
    // this.claiminsurance.InsureeName=this.seasonform.value.Farmeremail;

    // console.log(this.seasonform.value)
    // this.seasonform.value.Farmeremail=this.email;

  }    

  resetForm(){
    this.seasonform.reset();
  }

}