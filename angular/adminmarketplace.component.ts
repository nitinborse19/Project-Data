import { Component, OnInit } from '@angular/core';
import { BidderserviceService } from '../bidderservice.service';
import { SellCrops } from '../sell-crops';
import { Bidapprove } from '../bidapprove';
import { Bidprice } from '../bidprice';

@Component({
  selector: 'app-adminmarketplace',
  templateUrl: './adminmarketplace.component.html',
  styleUrls: ['./adminmarketplace.component.css']
})
export class AdminmarketplaceComponent implements OnInit {
  
    sellcrops1:   SellCrops[]=[];
  message!: string;
  bidprice!:Bidprice;
  
    constructor(private service: BidderserviceService) { }
  
    ngOnInit(): void {
      this.bidprice=new Bidprice();
      this.service.getAll().subscribe((data)=>{
      this.sellcrops1=data ;
      console.log(this.sellcrops1) 
      } 
      );
     
    }
   

    approve(s:any) {
      console.log(s);
 this.bidprice.requestid=s.requestId;
this.bidprice.price=s.bidcrop;
this.bidprice.bidderemail=s.bidderemail;
this.service.approvebid(this.bidprice).subscribe((data)=>{
console.log(data);



})


/*       this.service.Approveadminbid().subscribe((data:any)=>{
        this.message="approved successfully"
      },
      error=>{
        console.log(error.message)
        this.message="User already exists"
      }
      );
 */

    }
  }