import { Component, OnInit } from '@angular/core';
import { SearchModel } from "../../models/search.model";

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {
 searchModel:SearchModel;
  constructor() {
     this.searchModel=new SearchModel();
    this.searchModel.type='rent';
   }

  ngOnInit() {
  }

}
