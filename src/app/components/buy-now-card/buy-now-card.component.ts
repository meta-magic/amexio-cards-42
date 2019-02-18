import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatatransferService } from "../../service/datatransfer.service";

@Component({
  selector: 'app-buy-now-card',
  templateUrl: './buy-now-card.component.html',
  styleUrls: ['./buy-now-card.component.css']
})
export class BuyNowCardComponent implements OnInit {
  paymentMethods:any=[];
  standardPaymentMethods:any=[];
  payment:any;
  constructor(public route:Router,public dtsService:DatatransferService) { 
    this.paymentMethods=[
      {
        "id":"1",
        "name":"Google Pay"
      },
      {
        "id":"2",
        "name":"Paypal"
      },
      {
        "id":"3",
        "name":"Apple Pay"
      },
      {
      "id":"4",
      "name":"Credit / Debit Cards"
    },{
       "id":"5",
      "name":"Net Banking"
    }
    ];
    this.standardPaymentMethods=[{
      "id":"1",
      "name":"Credit / Debit Cards"
    },{
       "id":"2",
      "name":"Net Banking"
    }]
  }

  ngOnInit() {
    this.payment =this.dtsService.propertyDetails;
  }
  onBack(){
    this.route.navigate(['/app-buy-property-details']);
  }
  onPayClick(){
    
  }
}
