import { Component } from '@angular/core';
import { AuthenticationService } from "./service/authentication.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
showWindow:boolean;
  constructor(public auth_Service:AuthenticationService,public route:Router) { }

  ngOnInit() {
  }
  onCardsclick(){
    this.route.navigate(['/app-buy']);
  }
  onLoginLinkClick(){
//  this.auth_Service.showWindow=true;
this.route.navigate(['/login']);
 this.auth_Service.showLogin=true;
 this.auth_Service.showOTPWindow=false;
 this.auth_Service.showregisterWindow=false;
 this.auth_Service.showSignInWindow=false;
  }
}
