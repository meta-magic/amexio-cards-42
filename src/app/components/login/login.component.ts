import { Component, OnInit ,Input} from '@angular/core';
import { AuthenticationService } from "../../service/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() showLogin:boolean
  showregisterWindow:boolean;
  showSignInWindow:boolean;
  constructor(public auth_Service:AuthenticationService) {

   }

  ngOnInit() {
  }
onSignInClick(event:any){
this.auth_Service.showOTPWindow=false;
  this.auth_Service.showregisterWindow=false;
  this.auth_Service.showLogin=false;
  this.auth_Service.showSignInWindow=true;
}
onRegisterClick(event:any){
this.auth_Service.showOTPWindow=false;
  this.auth_Service.showregisterWindow=true;
  this.auth_Service.showLogin=false;
  this.auth_Service.showSignInWindow=false;
}
onLoginClick(){
  
}

}
