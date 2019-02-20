import { Injectable } from '@angular/core';
import { SearchModel } from "src/app/models/search.model";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DatatransferService {
transparentFlag:boolean;
navItemcolor:string;
propertyDetails:any;
category:string;
searchModel:SearchModel;
id:String;
searchType:string;

appartmentData: any[] = [];
tvData: any[] = [];
  constructor(public route:Router) {

   }
  searchCall(){
     if (this.searchModel.type == 'buy') {
      if (this.searchModel.searchData === "hadapser") {
        this.id = "1";
      } else if (this.searchModel.searchData === "viman nagar") {
        this.id = "2";
      } else if (this.searchModel.searchData === "tv") {
        this.id = "3";
      };
      if (this.id) {
        this.route.navigate(['/app-property-details', this.id]);
      }else{

      }

    } else if (this.searchModel.type == 'sell') {
      this.route.navigate(['/app-sell']);
    }
  }
}
