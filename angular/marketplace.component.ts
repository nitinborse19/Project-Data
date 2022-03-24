import { Component, OnInit } from '@angular/core';
import { Form,FormControl,FormGroup, Validators } from '@angular/forms';
import { MarketPlaceService } from '../market-place.service';
import { SellCrops } from '../sell-crops';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {
  marketplace:   SellCrops[]=[];

  constructor(private service:MarketPlaceService) { }
  ngOnInit(): void {
    this.service.getAll().subscribe((data)=>{
      this.marketplace=data ;
      console.log(this.marketplace) 
      } 
      );
  }

}