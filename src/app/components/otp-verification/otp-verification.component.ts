import { Component, OnInit,Input } from '@angular/core';
import { Router } from "@angular/router";
import { DatatransferService } from "src/app/service/datatransfer.service";

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent implements OnInit {
@Input() showOTPWindow:boolean;
oTP:string='';
  constructor(public route: Router, public _dtsService: DatatransferService) { }

  ngOnInit() {
  }
  onVerify(){
this.route.navigate(['/home']);
  }
  onCancel(){
    this.route.navigate(['/home']);
    
  }
}
