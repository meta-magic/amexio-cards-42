import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  showWindow:boolean;
  showLogin: boolean;
  showregisterWindow: boolean;
  showSignInWindow: boolean;
  showOTPWindow: boolean;
  loginFlag:boolean=false;

  constructor() { }
}
