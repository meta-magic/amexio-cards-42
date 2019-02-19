import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute, Params } from "@angular/router";
import { DatatransferService } from "../../service/datatransfer.service";
import { SearchModel } from "../../models/search.model";
import { HttpService } from "src/app/service/shared/http.service";

@Component({
  selector: 'app-property-details',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  propertyDetails: any[] = [];
  id: any;
  searchKey:string;
  category: any;
  propertyData: any[] = [];
  searchModel: SearchModel;
  constructor(private route: ActivatedRoute,
    private router: Router,
    public dtsService: DatatransferService,
  public httpService:HttpService) {
    debugger;
    this.searchModel = new SearchModel();
    this.dtsService.transparentFlag = false;
    this.dtsService.searchType = 'buy';
   
     this.propertyData=[];
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.searchKey = params.searchData;
      this.category=params.category;
      this.getData(); // reset and set based on new parameter this time

    });


  }
  getData() {
    debugger;
    if(this.category=="apartment"){
        this.httpService.fetchdata("assets/json/apartment.json").subscribe((resp: any) => {
    this.propertyDetails=resp.find(x => x.searchKey === this.searchKey);
    console.log('propertylist',this.propertyData);
    });
  // this.propertyDetails = this.propertyData.find(x => x.searchKey === this.searchKey);
    }else if(this.category=="tv"){
       this.httpService.fetchdata("assets/json/tv.json").subscribe((resp: any) => {
   this.propertyDetails=resp.find(x => x.searchKey === this.searchKey);
      });
  // this.propertyDetails = this.propertyData.find(x => x.searchKey === this.searchKey);

    }
     
    
  }
  getPropertyDetails(property: any) {
    property.id = this.id;
    property.category=this.searchModel.category;
    this.dtsService.propertyDetails = property;
    this.router.navigate(['/app-buy-property-details']);
  }
  getLocation(property) {

  }

}
