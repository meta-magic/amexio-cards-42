import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent implements OnInit {
@Input() showOTPWindow:boolean;
oTP:string='';
  constructor() { }

  ngOnInit() {
  }
  onVerify(){

  }
  onCancel(){
    
  }
}
