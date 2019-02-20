import { Injectable } from '@angular/core';
import { SearchModel } from "src/app/models/search.model";
import { Router } from '@angular/router';
import { HttpService } from "../service/shared/http.service";

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
propertyListData:any;
appartmentData: any[] = [];
tvData: any[] = [];
  constructor(public route:Router,public _httpService: HttpService) {

   }
  //  getPropertyList(data): any{
  //    debugger;
  //    if (data === 'apartment') {
  //      return this.getApartmentPropertyDetails();
  //   } else if(data === 'tv'){    
  //      return this.getTVPropertyDetails();
  //     }
  //   }
  //   getApartmentPropertyDetails() {
  //   this._httpService.fetchdata('assets/json/apartment.json').subscribe(
  //     (res: any) => {
  //      return this.appartmentData = res;
  //     });
  // }

  // getTVPropertyDetails() {
  //   this._httpService.fetchdata('assets/json/tv.json').subscribe(
  //     (res: any) => {
  //      return this.tvData = res;
  //     });
  // }

  getPropertyListCardData(id:any,data:any){
    debugger;
   if (id === 'apartment') {
    return  this.propertyListData.find(x => x.searchKey === data);
    } else if (id === 'tv') {
    return this.propertyListData.find(x => x.searchKey === data);
    }
  }
   

}
