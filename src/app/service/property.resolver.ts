/**
 * Created by dattaram on 20/2/19.
 */

import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {DatatransferService} from './datatransfer.service';
import { HttpService } from "src/app/service/shared/http.service";

@Injectable()
export class PropertyResolver implements Resolve<any> {
  constructor(public _dtsService: DatatransferService, public _httpService: HttpService) {
  }
  resolve(route: ActivatedRouteSnapshot): any {
   return this._httpService.fetchdata('assets/json/'+route.paramMap.get('id')+'.json');
  }
}
