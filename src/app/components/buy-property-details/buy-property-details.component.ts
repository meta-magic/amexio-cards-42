import { Component, OnInit } from '@angular/core';
import { DatatransferService  } from "../../service/datatransfer.service";
import { GoogleMapOverlays } from 'amexio-ng-extensions';

@Component({
  selector: 'app-buy-property-details',
  templateUrl: './buy-property-details.component.html',
  styleUrls: ['./buy-property-details.component.css']
})
export class BuyPropertyDetailsComponent implements OnInit {
 properyDetails:any=[];
   data : GoogleMapOverlays[];
  markerdata : GoogleMapOverlays;

  constructor( public dtsService:DatatransferService) {
  this.data=[];
//     this.data.push(new GoogleMapOverlays(18.512840, 73.926220, 'south gate,magarapatta',true,null,{city:'pune'}))
// this.data.push(new GoogleMapOverlays(18.486010, 73.931730, 'Handewadi,hadapsar',true,null,{city:'pune'}))
// this.data.push(new GoogleMapOverlays(18.505660, 73.928350, 'Bhosale Nagar,hadapsar',true,null,{city:'pune'}))
// this.data.push(new GoogleMapOverlays(18.493470, 73.932910, 'Sasane Nagar,hadapsar',true,null,{city:'pune'}))
// this.data.push(new GoogleMapOverlays(18.505660, 73.928350, 'Bhosale Nagar,hadapsar',true,null,{city:'pune'}))
// this.data.push(new GoogleMapOverlays(18.518960, 73.943060, 'Amanora ,hadapsar',true,null,{city:'pune'}))
// this.data.push(new GoogleMapOverlays(18.568860, 73.919550, 'viman nagar',true,null,{city:'pune'}))
// this.data.push(new GoogleMapOverlays(18.560760, 73.917560 ,'near phoenix mall ,viman nagar',true,null,{city:'pune'}))
// this.data.push(new GoogleMapOverlays(18.5713, 73.9198, 'Air Force Campus, Viman Nagar',true,null,{city:'pune'}))
// this.data.push(new GoogleMapOverlays(18.568860, 73.919550, 'viman nagar',true,null,{city:'pune'}))
// this.data.push(new GoogleMapOverlays(18.496310, 73.856210, 'Swargate,pune',true,null,{city:'pune'}))
// this.data.push(new GoogleMapOverlays(18.512840, 73.926220, 'magarpatta city',true,null,{city:'pune'}))
// this.data.push(new GoogleMapOverlays(18.520760, 73.855408, 'pune',true,null,{city:'pune'}))

   }

  ngOnInit() {
    this.properyDetails=this.dtsService.propertyDetails;
    this.data.push(new GoogleMapOverlays(Number( this.properyDetails.location.latitude), Number(this.properyDetails.location.longitude), this.properyDetails.address,true,null,{city:'pune'}))

  }
  
onMarkerClick($event){

}
}
