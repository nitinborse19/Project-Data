import { Component, OnInit } from '@angular/core';
import { SellCrops } from '../sell-crops';
import { BidderserviceService } from '../bidderservice.service';

@Component({
  selector: 'app-viewhistory',
  templateUrl: './viewhistory.component.html',
  styleUrls: ['./viewhistory.component.css']
})
export class ViewhistoryComponent implements OnInit {
  sellcrops1:   SellCrops[]=[];
  constructor(private service: BidderserviceService) { 


  }

  ngOnInit(): void {
    this.service.getAll3().subscribe((data)=>{
    this.sellcrops1=data ;
    console.log(this.sellcrops1) 
    } 
    );
      
  }
}
