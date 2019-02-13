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
 propertyData:any[]=[];
  constructor( private route: ActivatedRoute,
              private router: Router,
              public dtsService:DatatransferService) {
    this.dtsService.transparentFlag=false; 
    this.propertyData=[
  { "id":"1",
    "searchData": "Hadapser",
    "properties": [
      {
        "address": "south gate,magarapatta",
        "price": "80 Lac",
        "image": "assets/images/apartment1.jpeg",
        "rating":"3",
        "property": "2 BHK Apartment",
        "description":"It is a magnanimous residency, comprising of well planned homes",
        "images":["assets/images/apartment1.jpeg","assets/images/apartment1.jpeg","assets/images/apartment1.jpeg"]
      },
      {
        "address": "Handewadi,hadapser",
        "price": "25 Lac",
        "image": "assets/images/apartment2.jpeg",
        "rating":"3",
        "property": "1 BHK Apartment",
        "description":"It is a magnanimous residency, comprising of well planned homes",
        "images":["assets/images/apartment2.jpeg","assets/images/apartment1.jpeg"]
      },
      {
        "address": "Bhosale Nagar,hadapser",
        "price": "36 Lac",
        "image": "assets/images/apartment3.jpeg",
        "rating":"2",        
        "property": "1 BHK Apartment",
        "description":"It is indeed a perfect dwelling and a wise investment",
        "images":["assets/images/apartment3.jpeg","assets/images/apartment3.jpeg"]
      },
      {
        "address": "Sasane Nagar,hadapser",
        "price": "50 Lac",
        "image": "assets/images/apartment4.jpeg",
        "rating":"4",
        "property": "2 BHK Apartment",
        "description":"It is indeed a perfect dwelling and a wise investment",
        "images":["assets/images/apartment4.jpeg","assets/images/apartment4.jpeg"]
      },
      {
        "address": "Bhosale Nagar,hadapser",
        "price": "65 Lac",
        "image": "assets/images/apartment5.jpeg",
        "rating":"3",
        "property": "2 BHK Apartment",
        "description":"It is indeed a perfect dwelling and a wise investment",
        "images":["assets/images/apartment5.jpeg","assets/images/apartment5.jpeg"]
        
      },
      {
        "address": "Amanora ,hadapser",
        "price": "48 Lac",
        "image": "assets/images/apartment6.jpeg",
        "rating":"3",
        "property": "1 BHK Apartment",
        "description":"It is indeed a perfect dwelling and a wise investment",
        "images":["assets/images/apartment5.jpeg","assets/images/apartment5.jpeg"]
      }

    ]
  },
    { 
    "id":"2",
    "searchData": "Viman Nagar",
    "properties": [
        {
        "address": "viman nagar",
        "price": "80 Lac",
        "image": "assets/images/apartment1.jpeg",
        "rating":"2",
        "title": "2 BHK Apartment",
        "description":"It is a magnanimous residency, comprising of well planned homes",
        "images":["assets/images/apartment1.jpeg","assets/images/apartment5.jpeg"]
      },
      {
        "address": "Near Finix Mall,Viman Nagar",
        "price": "25 Lac",
        "image": "assets/images/apartment2.jpeg",
        "rating":"4",
        "title": "1 BHK Apartment",
        "description":"It is a magnanimous residency, comprising of well planned homes",
        "images":["assets/images/apartment1.jpeg","assets/images/apartment5.jpeg"]
       
      },
      {
        "address": "Air force campus",
        "price": "36 Lac",
        "image": "assets/images/apartment3.jpeg",
        "rating":"3",
        "title": "1 BHK Apartment",
        "description":"It is a magnanimous residency, comprising of well planned homes",
        "images":["assets/images/apartment1.jpeg","assets/images/apartment5.jpeg"]
      },
      {
        "address": "Viman nagar",
        "price": "80 Lac",
        "image": "assets/images/apartment3.jpeg",
        "rating":"3",
        "title": "2 BHK Apartment",
        "description":"It is a magnanimous residency, comprising of well planned homes",
        "images":["assets/images/apartment1.jpeg","assets/images/apartment3.jpeg"]
      }

    ]
  },
  { 
    "id":"3",
    "searchData": "tv",
    "properties": [
      {
        "address": "Swargate,pune",
        "price": "42,000",
        "image": "assets/images/LG.jpg",
        "rating":"3",
        "title": "LG Plasma",
        "description":"LG Plasma tv 43Inch with 2 Year Warranty by Zopper",
        "images":["assets/images/Malaysia.jpeg","assets/images/Malaysia.jpeg"]
      },
      {
        "address": "Magarpatta city",
        "price": "28,000",
        "image": "assets/images/Malaysia.jpeg",
        "rating":"4",
        "title": "Malaysia sealed box LED TV",
        "description":"Malaysia sealed box 55 4k Smart Android LED TV for sale",
        "images":["assets/images/lg.jpeg","assets/images/lg.jpeg"]
       
      },
      {
        "address": "Pune",
        "price": "30,000",
        "image": "assets/images/micromax.png",
        "rating":"3",
        "title": "Micromax 43T8100MHD",
        "description":"Micromax 43T8100MHD / 43T4500MHD 43 inch HD Ready TV",
         "images":["assets/images/micromax.png","assets/images/micromax.png"]
      }
    ]
  }
];
     this.route.params.subscribe(params => {
      console.log(params);
      this.id=params.id;
    });
    this.propertyDetails=this.propertyData.find(x => x.id === this.id).properties;
    
  }

  ngOnInit() {
  }

}
