import { Component, OnInit,Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent implements OnInit {
@Input() showOTPWindow:boolean;
oTP:string='';
  constructor(public route: Router) { }

  ngOnInit() {
  }
  onVerify(){

  }
  onCancel(){
    this.route.navigate(['/app-buy']);
    
  }
}
