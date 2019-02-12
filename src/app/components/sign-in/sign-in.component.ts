import { Component, OnInit ,Input} from '@angular/core';
import { LoginModel } from "../../models/login.model";
import { AuthenticationService } from "src/app/service/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
@Input() showSignInWindow:boolean
@Input('login-model') loginModel: LoginModel;

  constructor(private auth_Service:AuthenticationService,public route: Router) { }

  ngOnInit() {
  }
  onSignInClick(){
  console.log('loginmodel',this.loginModel);
  }
  onCancel(){
  this.route.navigate(['/app-buy']);

}

onBack(){
this.auth_Service.showOTPWindow=false;
  this.auth_Service.showregisterWindow=false;
  this.auth_Service.showLogin=true;
  this.auth_Service.showSignInWindow=false;
}
}
