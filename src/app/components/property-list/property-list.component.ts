import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { DatatransferService  } from "../../service/datatransfer.service";

@Component({
  selector: 'app-property-details',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
 propertyDetails:any[]=[];
 id:any;
 propertyData:any[]=[];
  constructor( private route: ActivatedRoute,
              private router: Router,
              public dtsService:DatatransferService) {
    this.dtsService.transparentFlag=false; 
    this.propertyData=[
  {
    "id": "1",
    "searchData": "Hadapser",
    "properties": [
      {
        "address": "south gate,magarapatta",
        "price": "80 - 90 Lac",
        "image": "assets/images/apartment1.jpeg",
        "rating": "3",
        "title": "2 BHK Apartment",
        "subtitle": "1,150 Sq.ft By Kwality Vrindavan Heights",
        "shortDescription": "2BHK Flat avaliable for Sale near south gate,magarapatta",
        "description": "2BHK Flat avaliable for Sale near south gate,magarapatta * Society/ Building Features :- Internet/wi-fi connectivity, Water Storage, Piped-gas, Visitor Parking, Swimming Pool, Park, Maintenance Staff ,Club house , GYM, Rain Water Harvesting, Waste Disposal * Home Features:- Power Back-up, Security, Fire Alarm, Intercom Facility, Lift, Reserved Parking, * Shopping Centre, Market, Bus stop, School, Hospitals, Medicals near by Society.",
        "details": ["Built-Up Area 1,150 Sq.ft","7th floor","2 Balcony","2 Bathroom"],
        "images": [
          "assets/images/apartment1.jpeg",
          "assets/images/balcony1.jpeg",
          "assets/images/kitchen2.jpeg"
        ],
        "location": {
          "latitude": "18.512840",
          "longitude": "73.926220"
        }
      },
      {
        "address": "Handewadi,hadapser",
        "price": "25 - 30 Lac",
        "image": "assets/images/apartment2.jpeg",
        "rating": "3",
        "title": "1 BHK Apartment",
        "subtitle": "By Gardenia Residency",
        "shortDescription": "It is a magnanimous residency, comprising of well planned homes",
        "description": "1BHK Flat avaliable for Sale in Handewadi,hadapser * Society/ Building Features :- Internet/wi-fi connectivity, Water Storage, Piped-gas, Visitor Parking, Swimming Pool, Park, Maintenance Staff ,Club house , GYM, Rain Water Harvesting, Waste Disposal * Home Features:- Power Back-up, Security, Fire Alarm, Intercom Facility, Lift, Reserved Parking, * Shopping Centre, Market, Bus stop, School, Hospitals, Medicals near by Society.",
         "details": ["Built-Up Area 550 Sq.ft","7th floor","2 Balcony","1 Bathroom"],
        "images": [
          "assets/images/apartment2.jpeg",
          "assets/images/kitchen2.jpeg",
          "assets/images/livingroom1.jpeg"
        ],
        "location": {
          "latitude": "18.486010",
          "longitude": "73.931730"
        }
      },
      {
        "address": "Bhosale Nagar,hadapser",
        "price": "36 - 45 Lac",
        "image": "assets/images/apartment3.jpeg",
        "title": "1 BHK Apartment",
        "subtitle": "By Royal Enrich",
        "rating": "3",
        "shortDescription": "It is indeed a perfect dwelling and a wise investment",
        "description": "1BHK Flat avaliable for Sale in Bhosale Nagar,hadapser * Society/ Building Features :- Internet/wi-fi connectivity, Water Storage, Piped-gas, Visitor Parking, Swimming Pool, Park, Maintenance Staff ,Club house , GYM, Rain Water Harvesting, Waste Disposal * Home Features:- Power Back-up, Security, Fire Alarm, Intercom Facility, Lift, Reserved Parking, * Bus stop, School, Hospitals, Medicals near by Society.",
        "details": ["Built-Up Area 550 Sq.ft","2th floor","2 Balcony","2 Bathroom"],
        "images": [
          "assets/images/apartment3.jpeg",
          "assets/images/kitchen2.jpeg",
          "assets/images/livingroom1.jpeg"
        ],
        "location": {
          "latitude": "18.505660",
          "longitude": "73.928350"
        }
      },
      {
        "address": "Sasane Nagar,hadapser",
        "price": "50 - 55 Lac",
        "image": "assets/images/apartment4.jpeg",
        "rating": "3",
        "title": "2 BHK Apartment",
        "subtitle": "By Sprinkle Enrich",
        "shortDescription": "It is indeed a perfect dwelling and a wise investment",
        "description": "2BHK Flat avaliable for Sale in Sasane Nagar,hadapser * Society/ Building Features :- Internet/wi-fi connectivity, Water Storage, Piped-gas, Visitor Parking, Swimming Pool, Park, Maintenance Staff ,Club house , GYM, Rain Water Harvesting, Waste Disposal * Home Features:- Power Back-up, Security, Fire Alarm, Intercom Facility, Lift, Reserved Parking, * Bus stop, School, Hospitals, Medicals near by Society.",
        "details": ["Built-Up Area 1150 Sq.ft","4th floor","2 Balcony","2 Bathroom"],
        "images": [
          "assets/images/apartment4.jpeg",
          "assets/images/kitchen2.jpeg",
          "assets/images/livingroom1.jpeg"
        ],
        "location": {
          "latitude": "18.493470",
          "longitude": "73.932910"
        }
      },
      {
        "address": "Bhosale Nagar,hadapser",
        "price": "65 - 70 Lac",
        "image": "assets/images/apartment5.jpeg",
        "rating": "3",
        "title": "2 BHK Apartment",
        "subtitle": "By Royal Society",
        "shortDescription": "It is indeed a perfect dwelling and a wise investment",
        "description": "2BHK Flat avaliable for Sale in Bhosale Nagar,hadapser * Society/ Building Features :- Internet/wi-fi connectivity, Water Storage, Piped-gas, Visitor Parking, Swimming Pool, Park, Maintenance Staff ,Club house , GYM, Rain Water Harvesting, Waste Disposal * Home Features:- Power Back-up, Security, Fire Alarm, Intercom Facility, Lift, Reserved Parking, * Bus stop, School, Hospitals, Medicals near by Society.",
        "details": ["Built-Up Area 1150 Sq.ft","8th floor","3 Balcony","2 Bathroom"],
        "images": [
          "assets/images/apartment5.jpeg",
          "assets/images/kitchen2.jpeg",
          "assets/images/livingroom1.jpeg"
        ],
        "location": {
          "latitude": "18.505660",
          "longitude": "73.928350"
        }
      },
      {
        "address": "Amanora ,hadapser",
        "price": "48 - 55 Lac",
        "image": "assets/images/apartment6.jpeg",
        "rating": "3",
        "title": "1 BHK Apartment",
        "subtitle": "By Cosmos Apartment",
        "shortDescription": "It is indeed a perfect dwelling and a wise investment",
        "description": "1BHK Flat avaliable for Sale in Amanora ,hadapser * Society/ Building Features :- Internet/wi-fi connectivity, Water Storage, Piped-gas, Visitor Parking, Swimming Pool, Park, Maintenance Staff ,Club house , GYM, Rain Water Harvesting, Waste Disposal * Home Features:- Power Back-up, Security, Fire Alarm, Intercom Facility, Lift, Reserved Parking, * Bus stop, School, Hospitals, Medicals near by Society.",
        "details": ["Built-Up Area 550 Sq.ft","6th floor","1 Balcony","2 Bathroom"],
        "images": [
          "assets/images/apartment5.jpeg",
          "assets/images/kitchen2.jpeg",
          "assets/images/livingroom1.jpeg"
        ],
        "location": {
          "latitude": "18.518960",
          "longitude": "73.943060"
        }
      }
    ]
  },
  {
    "id": "2",
    "searchData": "Viman Nagar",
    "properties": [
      {
        "address": "viman nagar",
        "price": "80 - 85 Lac",
        "image": "assets/images/apartment1.jpeg",
        "rating": "3",
        "title": "2 BHK Apartment",
        "subtitle": "By kumar builders",
        "shortDescription": "It is a magnanimous residency, comprising of well planned homes",
        "description": "2BHK Flat avaliable for Sale in viman nagar * Society/ Building Features :- Internet/wi-fi connectivity, Water Storage, Piped-gas, Visitor Parking, Swimming Pool, Park, Maintenance Staff ,Club house , GYM, Rain Water Harvesting, Waste Disposal * Home Features:- Power Back-up, Security, Fire Alarm, Intercom Facility, Lift, Reserved Parking, * Bus stop, School, Hospitals, Medicals near by Society.",
        "details": ["Built-Up Area 1100 Sq.ft","6th floor","1 Balcony","2 Bathroom"],
        "images": [
          "assets/images/apartment1.jpeg",
          "assets/images/kitchen2.jpeg",
          "assets/images/livingroom1.jpeg"
        ],
        "location": {
          "latitude": "18.568860",
          "longitude": "73.919550"
        }
      },
      {
        "address": "Near phoenix mall ,viman nagar",
        "price": "25 - 35 Lac",
        "image": "assets/images/apartment2.jpeg",
        "rating": "3",
        "title": "1 BHK Apartment",
        "subtitle": "By shreley society.",
        "shortDescription": "It is a magnanimous residency, comprising of well planned homes",
        "description": "1BHK Flat avaliable for Sale in viman nagar * Society/ Building Features :- Internet/wi-fi connectivity, Water Storage, Piped-gas, Visitor Parking, Swimming Pool, Park, Maintenance Staff ,Club house , GYM, Rain Water Harvesting, Waste Disposal * Home Features:- Power Back-up, Security, Fire Alarm, Intercom Facility, Lift, Reserved Parking, * Bus stop, School, Hospitals, Medicals near by Society.",
        "details": ["Built-Up Area 550 Sq.ft","6th floor","1 Balcony","2 Bathroom"],
        "images": [
          "assets/images/apartment2.jpeg",
          "assets/images/kitchen2.jpeg",
          "assets/images/livingroom1.jpeg"
        ],
        "location": {
          "latitude": "18.560760",
          "longitude": "73.917560"
        }
      },
      {
        "address": "Air force campus",
        "price": "36 - 45 Lac",
        "image": "assets/images/apartment3.jpeg",
        "rating": "3",
        "title": "1 BHK Apartment",
        "subtitle": "",
        "shortDescription": "It is a magnanimous residency, comprising of well planned homes",
        "description": "1BHK Flat avaliable for Sale in viman nagar * Society/ Building Features :- Internet/wi-fi connectivity, Water Storage, Piped-gas, Visitor Parking, Swimming Pool, Park, Maintenance Staff ,Club house , GYM, Rain Water Harvesting, Waste Disposal * Home Features:- Power Back-up, Security, Fire Alarm, Intercom Facility, Lift, Reserved Parking, * Bus stop, School, Hospitals, Medicals near by Society.",
        "details": ["Built-Up Area 550 Sq.ft","6th floor","1 Balcony","2 Bathroom"],
        "images": [
          "assets/images/apartment1.jpeg",
          "assets/images/kitchen2.jpeg",
          "assets/images/livingroom1.jpeg"    
            ],
        "location": {
          "latitude": "18.5713",
          "longitude": "73.9198"
        }
      },
      {
        "address": "Viman nagar",
        "price": "80 - 90 Lac",
        "image": "assets/images/apartment3.jpeg",
        "rating": "3",
        "title": "2 BHK Apartment",
        "subtitle": "",
        "shortDescription": "It is a magnanimous residency, comprising of well planned homes",
        "description": "",
        "details": [],
        "images": [
          "assets/images/apartment1.jpeg",
          "assets/images/apartment3.jpeg"
        ],
        "location": {
         "latitude": "18.568860",
          "longitude": "73.919550"
        }
      }
    ]
  },
  {
    "id": "3",
    "searchData": "tv",
    "properties": [
      {
        "address": "Swargate,pune",
        "price": "42,000",
        "image": "assets/images/LG.jpg",
        "rating": "3",
        "title": "LG Plasma",
        "subtitle": "Smart Android LED TV",
        "shortDescription": "LG Plasma tv 43Inch with 2 Year Warranty by Zopper for sale",
        "description": "Brand new LG Plasma tv 43Inch Smart Android LED TV",
        "details": [" Best sound and sound clarity","Social Media Enabled, facebook/whatsapp and other apps.","3 HDMI, 2 USB, 2 AV, 1 VGA PORT Audio out put","1 year standard manufacturer warranty"],
        "images": [
          "assets/images/LG.jpg",
          "assets/images/LG1.jpg",
          "assets/images/LG2.jpg"
        ],
        "location": {
          "latitude": "18.496310",
          "longitude": "73.856210"
        }
      },
      {
        "address": "Magarpatta city",
        "price": "28,000",
        "image": "assets/images/Malaysia.jpeg",
        "rating": "3",
        "title": "Malaysia sealed box",
        "subtitle": "55 4k Smart Android LED TV ",
        "shortDescription": "Malaysia sealed box 55 4k Smart Android LED TV for sale",
        "description": "Brand new Malaysia sealed box 55 4k Smart Android LED TV",
        "details": [" Best sound and sound clarity","Social Media Enabled, facebook/whatsapp and other apps.","3 HDMI, 2 USB, 2 AV, 1 VGA PORT Audio out put","1 year standard manufacturer warranty"],
        "images": [
          "assets/images/Malaysia.jpeg",
          "assets/images/malaysia1.jpeg",
          "assets/images/LG2.jpg"
        ],
        "location": {
          "latitude": "18.512840",
          "longitude": "73.926220"
        }
      },
      {
        "address": "Pune",
        "price": "30,000",
        "image": "assets/images/micromax.png",
        "rating": "3",
        "title": "Micromax 43T8100MHD",
        "subtitle": "43 inch HD Ready TV",
        "shortDescription": "Micromax 43T8100MHD / 43T4500MHD 43 inch HD Ready TV",
        "description": "Brand new Micromax 43T8100MHD / 43T4500MHD 43 inch HD Ready TV with 1 year warranty card ",
        "details": [" Best sound and sound clarity","Social Media Enabled, facebook/whatsapp and other apps.","3 HDMI, 2 USB, 2 AV, 1 VGA PORT Audio out put","1 year standard manufacturer warranty"],
        "images": [
          "assets/images/micromax.png",
          "assets/images/malaysia1.jpeg",
          "assets/images/LG2.jpg"
        ],
        "location": {
          "latitude": "18.520760",
          "longitude": "73.855408"
        }
      }
    ]
  }
];
     this.route.params.subscribe(params => {
      this.id=params.id;
    });
    this.propertyDetails=this.propertyData.find(x => x.id === this.id);
    
  }

  ngOnInit() {
  }
  getPropertyDetails(property:any){
    property.id=this.id;
    this.dtsService.propertyDetails=property;
 this.router.navigate(['/app-buy-property-details']);
  }
  getLocation(property){

  }
}
