import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { DatatransferService } from '../../service/datatransfer.service';
import { SearchModel } from '../../models/search.model';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  propertyDetails: any;
  id: any;
  searchKey: string;
  category: any;
  propertyData: any[] = [];
  searchModel: SearchModel;
  constructor(private route: ActivatedRoute, private router: Router, public _dtsService: DatatransferService) {
   debugger;
    this.searchModel = new SearchModel();
    this._dtsService.transparentFlag = false;
    this._dtsService.searchType = 'buy';

     this.propertyData = [];
  }

  ngOnInit() {
    debugger;
    this.route.params.subscribe((params: Params) => {
      debugger;
      this.searchModel.category = params.id;
      this.searchModel.searchData = params.category;
      this.category=params.id;
     this._dtsService.propertyListData = this.route.snapshot.data.propertyMetadata;
       this.propertyDetails =  this._dtsService.getPropertyListCardData(this.searchModel.category,this.searchModel.searchData);
       console.log('proooo',this.propertyDetails);
    });
  }
  getPropertyDetails(property: any) {
    property.id = this.searchModel.searchData;
    property.category = this.searchModel.category;
    this._dtsService.propertyDetails = property;
    this.router.navigate(['/app-buy-property-details']);
  }
  getLocation(property) {

  }

}
