/**
 * Created by dattaram on 20/2/19.
 */

import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {DatatransferService} from './datatransfer.service';

@Injectable()
export class PropertyResolver implements Resolve<any> {
  constructor(public _dtsService: DatatransferService) {
  }
  resolve(route: ActivatedRouteSnapshot): any {
    let data: any;
    debugger;
    if (route.paramMap.get('id') === 'apartment') {
      data = this._dtsService.appartmentData.find(x => x.searchKey === route.paramMap.get('category'));
    } else {
      data = this._dtsService.tvData.find(x => x.searchKey === route.paramMap.get('category'));
    }
    return data;
  }
}
