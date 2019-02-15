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
      this.route.navigate(['/app-property-details',this.properyDetails.id]);
    }
}
