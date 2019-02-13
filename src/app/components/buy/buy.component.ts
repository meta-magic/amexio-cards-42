import { Component, OnInit } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { SearchModel } from "../../models/search.model";
import { DatatransferService } from "../../service/datatransfer.service";
@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  searchModel:SearchModel;
  constructor(public dtsService:DatatransferService) { 
    this.searchModel=new SearchModel();
    this.searchModel.type='buy';
    this.dtsService.transparentFlag=true;
  }

  ngOnInit() {
  }

}
