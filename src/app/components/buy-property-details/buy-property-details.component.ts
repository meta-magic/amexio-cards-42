import { Component, OnInit } from '@angular/core';
import { DatatransferService  } from "../../service/datatransfer.service";
import { GoogleMapOverlays } from 'amexio-ng-extensions';
import { Router } from '@angular/router';
import {AmexioGridLayoutService, GridConfig, GridConstants} from "amexio-ng-extensions";

@Component({
  selector: 'app-buy-property-details',
  templateUrl: './buy-property-details.component.html',
  styleUrls: ['./buy-property-details.component.css']
})
export class BuyPropertyDetailsComponent implements OnInit {
   gridDesktop: GridConfig;
 properyDetails:any=[];
   data : GoogleMapOverlays[];
  markerdata : GoogleMapOverlays;
mainImagePath:any;
  constructor( public dtsService:DatatransferService,public route:Router, private _gridlayoutService: AmexioGridLayoutService) {
  this.data=[];
  this.createLayouts();
  this._gridlayoutService.createLayout(this.gridDesktop);
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
    this.mainImagePath=this.properyDetails.images[0]
    this.data.push(new GoogleMapOverlays(Number( this.properyDetails.location.latitude), Number(this.properyDetails.location.longitude), this.properyDetails.address,true,null,{city:'pune'}))

  }
  
onMarkerClick($event){

}
onBuyNowClick(property:any){
  this.dtsService.propertyDetails=property
  this.route.navigate(['/app-buy-now-card'])

}
   createLayouts() {
    this.gridDesktop = new GridConfig('Home', GridConstants.Desktop)
      .addlayout(["gridicon","gridimage","gridimage", "gridimage", "gridimage","griddescription","griddescription", "griddescription","griddescription","griddescription"])
      .addlayout(["gridbutton","gridbutton","gridbutton", "gridbutton", "gridbutton","griddescription","griddescription", "griddescription","griddescription","griddescription"])
      .addlayout(["gridmap", "gridmap", "gridmap", "gridmap", "gridmap","griddescription","griddescription", "griddescription","griddescription","griddescription"]);

   }
    onImageClick(event:any){
   console.log('imageclick',event);
   this.mainImagePath=event;
    }

    onBack(){
      // this.route.navigate(['/app-property-details']);
    }
}
