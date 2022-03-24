import { Component, OnInit } from '@angular/core';
import { BidderserviceService } from '../bidderservice.service';
import { Bidderregister } from '../bidderregister';
import { SellCrops } from '../sell-crops';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-bidderwelcome',
  templateUrl: './bidderwelcome.component.html',
  styleUrls: ['./bidderwelcome.component.css']
})
export class BidderwelcomeComponent implements OnInit {
  sellcrops1:   SellCrops[]=[];
  email!:string|null;
  

  constructor(private service: BidderserviceService) { }

  ngOnInit(): void {
    this.email=localStorage.getItem('username');
   
    this.service.getAll().subscribe((data)=>{
    this.sellcrops1=data ;
    console.log(this.sellcrops1) 
    } 
    );
      
  }
}


