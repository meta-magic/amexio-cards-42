import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SearchModel } from "../../models/search.model";
import { AuthenticationService } from "src/app/service/authentication.service";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input('search-model') searchModel: SearchModel;
  warningdialogue = false;
  warningMsg = '';
  constructor(public route: Router, public _authService: AuthenticationService) {

  }

  ngOnInit() { }

  onBuyClick() {
    this.route.navigate(['/home']);
  }
  onSell() {
    if (this._authService.loginFlag) {
      this.route.navigate(['/sell']);
    } else {
      this.route.navigate(['/login']);

    }
  }
}
