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
 
  getPropertyListCardData(id:any,data:any){
   if (id === 'apartment') {
    return  this.propertyListData.find(x => x.searchKey === data);
    } else if (id === 'tv') {
    return this.propertyListData.find(x => x.searchKey === data);
    }
  }
   

}
