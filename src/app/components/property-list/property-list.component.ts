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
  constructor(private route: ActivatedRoute, private router: Router, public dtsService: DatatransferService) {
    this.searchModel = new SearchModel();
    this.dtsService.transparentFlag = false;
    this.dtsService.searchType = 'buy';

     this.propertyData = [];
  }

  ngOnInit() {
    this.propertyDetails =  this.route.snapshot.data.propertyMetadata;
    this.route.params.subscribe((params: Params) => {
      this.searchModel.category = params.id;
      this.searchModel.searchData = params.category;
    });
  }
  getPropertyDetails(property: any) {
    property.id = this.id;
    property.category = this.searchModel.category;
    this.dtsService.propertyDetails = property;
    this.router.navigate(['/app-buy-property-details']);
  }
  getLocation(property) {

  }

}
