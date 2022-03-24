import { Component, OnInit } from '@angular/core';
import { AdminInsuranceClass } from '../admin-insurance-class';
import { BidderserviceService } from '../bidderservice.service';

@Component({
  selector: 'app-admininsurance',
  templateUrl: './admininsurance.component.html',
  styleUrls: ['./admininsurance.component.css']
})
export class AdmininsuranceComponent implements OnInit {

  insuranceadmin:   AdminInsuranceClass[]=[];
  constructor(private service: BidderserviceService) { }

  ngOnInit(): void {
    this.service.getAlladmininsurance().subscribe((data)=>{
    this.insuranceadmin=data;
    console.log(this.insuranceadmin) 
    } 
    );
  } 

  ApproveInsurance()
  {
    alert("Insurance Claim Reuqest Approved");
  }

  RejectInsurance()
  {
    alert("Insurance Claim Reuqest Rejected");
  }
  } 

