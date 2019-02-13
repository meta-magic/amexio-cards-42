import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { DatatransferService  } from "../../service/datatransfer.service";

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
 propertyDetails:any[]=[];
 id:any;
  constructor( private route: ActivatedRoute,
              private router: Router,
              public dtsService:DatatransferService) {
                this.dtsService.transparentFlag=false; 
    console.log('properties');
     this.route.params.subscribe(params => {
      console.log(params);
      this.id=params.id;
    });
    if(this.id=="1"){
      this.propertyDetails=[
      {
        "address": "south gate,magarapatta",
        "price": "80 Lac",
        "image": "assets/images/apartment1.jpeg",
        "property": "2 BHK Apartment",
        "description":"It is a magnanimous residency, comprising of well planned homes"
      },
      {
        "address": "Handewadi,hadapser",
        "price": "25 Lac",
        "image": "assets/images/apartment2.jpeg",
        "property": "1 BHK Apartment",
        "description":"It is a magnanimous residency, comprising of well planned homes"
      },
      {
        "address": "Bhosale Nagar,hadapser",
        "price": "36 Lac",
        "image": "assets/images/apartment3.jpeg",
        "property": "1 BHK Apartment",
        "description":"It is indeed a perfect dwelling and a wise investment"
      },
      {
        "address": "Sasane Nagar,hadapser",
        "price": "50 Lac",
        "image": "assets/images/apartment4.jpeg",
        "property": "2 BHK Apartment",
        "description":"It is indeed a perfect dwelling and a wise investment"
      },
      {
        "address": "Bhosale Nagar,hadapser",
        "price": "65 Lac",
        "image": "assets/images/apartment5.jpeg",
        "property": "2 BHK Apartment",
        "description":"It is indeed a perfect dwelling and a wise investment"
        
      },
      {
        "address": "Amanora ,hadapser",
        "price": "48 Lac",
        "image": "assets/images/apartment6.jpeg",
        "property": "1 BHK Apartment",
        "description":"It is indeed a perfect dwelling and a wise investment"
      }
    ]    }else if(this.id=="2"){
      this.propertyDetails=[
      {
        "address": "viman nagar",
        "price": "80 Lac",
        "image": "assets/images/apartment1.jpeg",
        "property": "2 BHK Apartment",
        "description":"It is a magnanimous residency, comprising of well planned homes"
      },
      {
        "address": "Near Finix Mall,Viman Nagar",
        "price": "25 Lac",
        "image": "assets/images/apartment2.jpeg",
        "property": "1 BHK Apartment",
        "description":"It is a magnanimous residency, comprising of well planned homes"
       
      },
      {
        "address": "Air force campus",
        "price": "36 Lac",
        "image": "assets/images/apartment3.jpeg",
        "property": "1 BHK Apartment",
        "description":"It is a magnanimous residency, comprising of well planned homes"
      }
    ]    }else if(this.id=="3"){
      this.propertyDetails= [
      {
        "address": "Swargate,pune",
        "price": "42,000",
        "image": "assets/images/lg.jpeg",
        "property": "LG Plasma",
        "description":"LG Plasma tv 43Inch with 2 Year Warranty by Zopper"
      },
      {
        "address": "Magarpatta city",
        "price": "28,000",
        "image": "assets/images/Malaysia.jpeg",
        "property": "Malaysia sealed box LED TV",
        "description":"Malaysia sealed box 55 4k Smart Android LED TV for sale"
       
      },
      {
        "address": "Pune",
        "price": "30,000",
        "image": "assets/images/micromax.png",
        "property": "Micromax 43T8100MHD / 43T4500MHD",
        "description":"Micromax 43T8100MHD / 43T4500MHD 43 inch HD Ready TV"
      }
    ]
    }
    
  }

  ngOnInit() {
  }

}
