import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BidderserviceService } from '../bidderservice.service';
import { SellCrops } from '../sell-crops';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bidcrop',
  templateUrl: './bidcrop.component.html',
  styleUrls: ['./bidcrop.component.css']
})
export class BidcropComponent implements OnInit {
  sellcrops2:   SellCrops[]=[];
  bidcropForm=new FormGroup({
   requestId:new FormControl(''),
   croptype:new FormControl(''),
   cropname:new FormControl(''),
   quantity:new FormControl(''),
   initialprice:new FormControl(''),
   bidcrop:new FormControl(''),
   bidderemail:new FormControl('')
 })
  constructor(private service:BidderserviceService,private router:ActivatedRoute, private route:Router) { }

  ngOnInit(): void {

    
  
  //   this.service.getAll().subscribe((data)=>{
  //   this.sellcrops2=data ;
  //   console.log(this.sellcrops2) 
  
  // } 
  // );
  console.log('rid='+this.router.snapshot.params['requestid'])
    this.service.getById1(this.router.snapshot.params['requestid']).subscribe((data)=>
    {
      alert("Enter bid greater than previous price");
      console.log(data)
      this.bidcropForm=new FormGroup({
      requestId:new FormControl(data["requestId"]),
      cropname:new FormControl(data["cropname"]),
      croptype:new FormControl(data["croptype"]),
      quantity:new FormControl(data["quantity"]),
      initialprice:new FormControl(data["initialprice"]),
      bidcrop:new FormControl(data["bidcrop"]),
      bidderemail:new FormControl(data["bidderemail"]),
    }) ;
  }
  )
    
  }
  submitBid(){
    this.bidcropForm.value.bidderemail=localStorage.getItem('username');
    

    console.log(this.bidcropForm.value)
    // sessionStorage.getItem('username')
    console.log(this.bidcropForm.value.bidderemail)
    this.service.update(this.router.snapshot.params['requestid'],this.bidcropForm.value).subscribe((data)=>
    console.log(data,"bid amount updated")
    //this.router.navigateByUrl('bidderwelcome');

    )
    
    alert("Bid amount updated");
    this.route.navigateByUrl('bidderwelcome');
  }
}
