import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FarmerserviceService } from '../farmerservice.service';
import { ClaimServiceService } from '../claim-service.service';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {
  message!: string;
  errorMessage!: string;
  constructor(private formbulider: FormBuilder,private router: Router,private claimService:ClaimServiceService) { }

  
  claiminsurance = new FormGroup({
    policyno:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern('[0-9]*')]),
    company:new FormControl('',[Validators.required,Validators.pattern('[a-zA-z]*')]),
    insurancename:new FormControl('',[Validators.required,Validators.pattern('[a-zA-z]*')]),
    insuredsum:new FormControl('',[Validators.required,Validators.pattern('[0-9]*')]),
    causeofloss:new FormControl('',[Validators.required]),
    dateofloss:new FormControl('',[Validators.required])
  })



  get policyno(){return this.claiminsurance.get('policyno')}

  get company(){return this.claiminsurance.get('company')}

  get insurancename(){return this.claiminsurance.get('insurancename')}

  get insuredsum(){return this.claiminsurance.get('insuredsum')}

  get causeofloss(){return this.claiminsurance.get('causeofloss')}

  get dateofloss(){return this.claiminsurance.get('dateofloss')}



  ngOnInit(): void {
  }


  onClaim()    
  {    
    console.log(this.claiminsurance.value)
   this.claimService.Claimsubmit(this.claiminsurance.value).subscribe(    
    (data: any)=>    
    {    
      console.log(data); 
      this.claiminsurance.reset();    
      this.message="Applied Successfully"
      alert("Insurance Claim Request has been sent to approve ")
      this.router.navigateByUrl('insurance')
    },
    error => {    
      this.errorMessage = "Insurance Claim request has been  sent";
      alert("Insurance Claim Request has been sent to approve");
    }
    ); 
  }  
  // onClaim(){
  //   console.log(this.claiminsurance.value);
  // }

}
