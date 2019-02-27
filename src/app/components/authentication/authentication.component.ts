import { Component, OnInit,Input } from '@angular/core';
import { AuthenticationService } from "../../service/authentication.service";
import { UserDetails } from "../../models/user.details.model";
import { LoginModel } from "../../models/login.model";
import { DatatransferService } from "../../service/datatransfer.service";

@Component({
  selector: 'login',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  // @Input() showWindow:boolean;
  userModel:UserDetails;
  loginModel:LoginModel;
  constructor(private auth_Service:AuthenticationService,public dtsService:DatatransferService) {
    this.userModel=new UserDetails();
    this.loginModel=new LoginModel();
    this.dtsService.transparentFlag=false;
   }

  ngOnInit(
  
  ) {
    // this.auth_Service.showLogin=false;
     this.auth_Service.showSignInWindow = true;
     this.auth_Service.showOTPWindow = false;
     this.auth_Service.showregisterWindow = false;
  }

}
