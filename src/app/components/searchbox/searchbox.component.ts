import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SearchModel } from "../../models/search.model";
import { DatatransferService } from "src/app/service/datatransfer.service";
import { HttpService } from "src/app/service/shared/http.service";
@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {
  @Input('search-model') searchModel: SearchModel;
  id: any;
  warningdialogue:boolean=false;
  warningMsg:any;
  categories:any=[];
  constructor(public route: Router,public dtsService:DatatransferService,public httpService:HttpService) {
    this.searchModel=new SearchModel();
    this.warningMsg='';
    this.categories=[{
      id:"tv",
      name:"TV"
    },
    {
      id:"apartment",
      name:"Apartment"
    }]
  }

  ngOnInit() {
    this.searchModel.type="buy"

  }

  onSearchButtonClick() {
    debugger;
    if (this.searchModel.type == 'buy') {
      if (this.searchModel.searchData && this.searchModel.category) {
        this.route.navigate(['/app-property-details',this.searchModel.category,this.searchModel.searchData]);
      }else{
        this.warningMsg='Data not found';
        this.warningdialogue=true;
      }

  
  
    } else if (this.searchModel.type == 'sell') {
      this.route.navigate(['/app-sell']);
    }

  }
 
}
