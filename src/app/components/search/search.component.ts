import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SearchModel } from "../../models/search.model";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 @Input('search-model') searchModel: SearchModel;
  warningdialogue = false;
  warningMsg = '';
   constructor(public route: Router) {}

  ngOnInit() {}

  onBuyClick() {
    this.route.navigate(['/app-buy']);
  }
  onSell() {
    this.route.navigate(['/app-sell']);
  }

}
