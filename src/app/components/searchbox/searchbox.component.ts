import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SearchModel } from "../../models/search.model";
import { DatatransferService } from "src/app/service/datatransfer.service";
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
  constructor(public route: Router,public dtsService:DatatransferService) {
    this.searchModel=new SearchModel();
    this.warningMsg='';
    this.categories=[{
      id:"1",
      name:"TV"
    },
    {
      id:"2",
      name:"Apartment"
    }]
  }

  ngOnInit() {
    this.searchModel.type="buy"

  }

  onSearchButtonClick() {
    debugger;
    if (this.searchModel.type == 'buy') {
      if (this.searchModel.searchData === "hadapser") {
        this.id = "1";
      } else if (this.searchModel.searchData === "viman nagar") {
        this.id = "2";
      } else if (this.searchModel.searchData === "tv") {
        this.id = "3";
      };
      if (this.id) {
        this.route.navigate(['/app-property-details', this.id,this.searchModel.category]);
      }else{
        this.warningMsg='Data not found';
        this.warningdialogue=true;
      }

    } else if (this.searchModel.type == 'sell') {
      this.route.navigate(['/app-sell']);
    }

  }
 
}
