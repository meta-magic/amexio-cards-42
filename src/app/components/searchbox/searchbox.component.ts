import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SearchModel } from '../../models/search.model';
import { DatatransferService } from 'src/app/service/datatransfer.service';
import { HttpService } from 'src/app/service/shared/http.service';
@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {
  @Input('search-model') searchModel: SearchModel;
  id: any;
  warningdialogue = false;
  warningMsg: any;
  categories: any = [];
  validSearchKey:boolean;
  constructor(public route: Router, public _dtsService: DatatransferService, public _httpService: HttpService) {
    this.searchModel = new SearchModel();
    this.warningMsg = '';
    this.categories = [{
      id: 'tv',
      name: 'TV'
    },
    {
      id: 'apartment',
      name: 'Apartment'
    }];
  }

  ngOnInit() {
    this.searchModel.type = 'buy';

  }

  onSearchButtonClick() {
    this.validSearchKey=false;
    if (this.searchModel.category === 'apartment') {
      if (this._dtsService.appartmentData .length > 0) {
        this.navigateToPropertyDetails();
      } else {
        this.getApartmentPropertyDetails();
      }
    } else if (this.searchModel.category === 'tv') {
      if (this._dtsService.tvData .length > 0) {
        this.navigateToPropertyDetails();
      } else {
        this.getTVPropertyDetails();
      }
    }else{
      this.warningMsg='Data not found, enter valid search data.';
      this.warningdialogue=true;
    }
  }
  checkSearchData(data:any){
    if(data==='apartment'){
      this._dtsService.appartmentData.forEach(obj => {
      if(obj.searchKey === this.searchModel.searchData){
        this.validSearchKey=true;
      }
    });
    }else if(data==='tv') {
      this._dtsService.tvData.forEach(obj => {
      if(obj.searchKey === this.searchModel.searchData){
        this.validSearchKey=true;
      }
    });
    }
   
  }
  navigateToPropertyDetails() {
    this.checkSearchData(this.searchModel.category);
    if(this.validSearchKey){
     this.route.navigate(['/app-property-details', this.searchModel.category, this.searchModel.searchData]);
    }else{
      this.warningMsg='Data not found, enter valid search data.'
      this.warningdialogue=true;
    }
          
  }

  getApartmentPropertyDetails() {
    this._httpService.fetchdata('assets/json/apartment.json').subscribe(
      (res: any) => {
        this._dtsService.appartmentData = res;
        this.navigateToPropertyDetails();
      });
  }

  getTVPropertyDetails() {
    this._httpService.fetchdata('assets/json/tv.json').subscribe(
      (res: any) => {
        this._dtsService.tvData = res;
        this.navigateToPropertyDetails();
      });
  }


}
