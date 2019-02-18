import { Component, OnInit } from '@angular/core';
import { DatatransferService } from "../../service/datatransfer.service";
import { SearchModel } from "../../models/search.model";

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  searchModel:SearchModel;

  constructor(public dtsService:DatatransferService ) {
     this.searchModel=new SearchModel();
    this.searchModel.type='sell';
    this.dtsService.transparentFlag=true;
   }

  ngOnInit() {
  }

}
