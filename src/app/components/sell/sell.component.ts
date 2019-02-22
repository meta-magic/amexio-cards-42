import { Component, OnInit } from '@angular/core';
import { DatatransferService } from "../../service/datatransfer.service";
import { SearchModel } from "../../models/search.model";
import { HttpService } from "src/app/service/shared/http.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SellDataModel } from "../../models/sellData.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  searchModel: SearchModel;
  sellModel: SellDataModel;
  data: any;
  categories: any;
  sellFormGroup: FormGroup;
  constImgaePath:string="assets/images/"
  constructor(public _route: Router, public _dtsService: DatatransferService, public _httpService: HttpService, private fb: FormBuilder) {
    this.searchModel = new SearchModel();
    this.sellModel = new SellDataModel();
    this.searchModel.type = 'sell';
    this._dtsService.transparentFlag = false;


  }

  ngOnInit() {
    this._httpService.fetchdata('assets/json/sell.json').subscribe(
      (res: any) => {
        this.data = res;
      });
    this.valiadteSellForm();
    this.categories = [{
      id: 'tv',
      name: 'TV'
    },
    {
      id: 'apartment',
      name: 'Apartment'
    },
   {
      id: 'twoWheeler',
      name: 'Two Wheeler'
    },
    {
      id: 'electronics',
      name: 'Electronics'
    }];


  }
  valiadteSellForm() {
    this.sellFormGroup = this.fb.group({
      Title: ['', [Validators.required]],
      SubTitle: ['', [Validators.required]],
      Category: ['', [Validators.required]],
      Tag: ['', [Validators.required]],
      Price: ['', [Validators.required]],
      City: ['', [Validators.required]],
      Locality: ['', [Validators.required]],
      Description: ['', [Validators.required]],
      Photo: ['', { standalone: true }]
    });
  }
  onPhotoUpload(event: any) {
    this.sellModel.images=[];
    this.sellModel.image=this.constImgaePath+event[0].name;
    // this.sellModel.images=event;
    event.forEach((obj:any) => {
    this.sellModel.images.push(this.constImgaePath+obj.name);
    });
  
  }
  onPhotoRemoveClick(event:any){
     this.sellModel.images.forEach((obj,index) => {
       if(obj==this.constImgaePath+event.fileData.name){
            this.sellModel.images.splice(index,1);
       }
    });
  }
  onBack() {
    this._route.navigate(['/home'])
  }
  onAddClick(){
    this.data.properties.push(this.sellModel);
 
    
  }
}
