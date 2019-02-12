import { Component, OnInit } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { SearchModel } from "../../models/search.model";
@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  searchModel:SearchModel;
  constructor() { 
    this.searchModel=new SearchModel();
    this.searchModel.type='buy';
  }

  ngOnInit() {
  }

}
