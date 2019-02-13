import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { SearchModel } from "../../models/search.model";
@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {
  @Input('search-model') searchModel: SearchModel;
  id:any;
  constructor(public route: Router) {
   }

  ngOnInit() {
  
  }

  onBuyClick() {
    debugger;
    this.route.navigate(['/app-buy']);
  }
  onSearchButtonClick() {
  console.log('searchModel',this.searchModel);
  if(this.searchModel.searchData=="hadapser"){
    this.id=1;

  }else if(this.searchModel.searchData=="viman nagar"){
    this.id=2
  }else if(this.searchModel.searchData="tv"){
    this.id=3
  }
  this.route.navigate(['/app-property-details',this.id])
  }
  onRent() {
    debugger;
    this.route.navigate(['/app-rent']);
  }
}
