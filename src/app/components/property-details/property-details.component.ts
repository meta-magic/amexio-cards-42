import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
 propertyDetails:any[]=[];
 id:any;
  constructor( private route: ActivatedRoute,
              private router: Router) { 
    console.log('properties');
     this.route.params.subscribe(params => {
      console.log(params);
      this.id=params.id;
    });
    if(this.id=="1"){
      this.propertyDetails=  [
    {
      "address":"south gate,magarapatta",
      "price":"80 Lac",
      "image":"assets/images/apartment1.jpeg",
      "area":"2 BHK Apartment",
      "agentName":"Sahil Patil"
    },
    {
      "address":"Handewadi,hadapser",
      "price":"25 Lac",
      "image":"assets/images/apartment2.jpeg",
      "area":"1 BHK Apartment",
      "agentName":"Pravin Patil"
    },
    {
      "address":"Bhosale Nagar,hadapser",
      "price":"36 Lac",
      "image":"assets/images/apartment3.jpeg",
      "area":"1 BHK Apartment",
      "agentName":"Sachin Patil"
      
    },
    {
      "address":"Sasane Nagar,hadapser",
      "price":"50 Lac",
      "image":"assets/images/apartment4.jpeg",
      "area":"2 BHK Apartment",
      "agentName":"Mayur Mane"
    },
     {
      "address":"Bhosale Nagar,hadapser",
      "price":"65 Lac",
      "image":"assets/images/apartment5.jpeg",
      "area":"2 BHK Apartment",
      "agentName":"Sachin Patil"
      
    },
    {
      "address":"Amanora ,hadapser",
      "price":"48 Lac",
      "image":"assets/images/apartment6.jpeg",
      "area":"1 BHK Apartment",
      "agentName":"Sagar Kore"
    }
    ];

    }else if(this.id="2"){
      this.propertyDetails=[
      {
        "address": "viman nagar",
        "price": "80 Lac",
        "image": "assets/images/apartment1.jpeg",
        "area": "2 BHK Apartment",
        "agentName": "Sahil Jadhav"
      },
      {
        "address": "Near Finix Mall,Viman Nagar",
        "price": "25 Lac",
        "image": "assets/images/apartment2.jpeg",
        "area": "1 BHK Apartment",
        "agentName": "Pravin Patil"
      },
      {
        "address": "Air force campus",
        "price": "36 Lac",
        "image": "assets/images/apartment3.jpeg",
        "area": "1 BHK Apartment",
        "agentName": "Sachin Patil"
      }
    ]
    }
    
  }

  ngOnInit() {
  }

}
