/**
 * Created by dattaram on 20/2/19.
 */
import {Component, OnInit} from '@angular/core';
import {DatatransferService} from '../../service/datatransfer.service';
import {SearchModel} from '../../models/search.model';
import { AuthenticationService } from "src/app/service/authentication.service";

@Component({
  selector: 'home',
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
  searchModel: SearchModel;
  constructor(public dtsService: DatatransferService,private auth_Service:AuthenticationService) {
    // this.searchModel=new SearchModel();
    this.dtsService.searchModel = new SearchModel();
    // this.searchModel.type='buy';
    this.dtsService.searchType = 'buy';
    this.dtsService.transparentFlag = true;
    this.dtsService.sellFlag=false;
    if(this.auth_Service.loginFlag){
      this.dtsService.loginNavFlag=false;

    }else{
      this.dtsService.loginNavFlag=true;; 
    }
    
  }

  ngOnInit() {
  }
}
