import {Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {SellComponent} from "./components/sell/sell.component";
import {RentComponent} from "./components/rent/rent.component";
import {PropertyListComponent} from "./components/property-list/property-list.component";
import {AuthenticationComponent} from "./components/authentication/authentication.component";
import {BuyPropertyDetailsComponent} from "./components/buy-property-details/buy-property-details.component";
import {BuyNowCardComponent} from "./components/buy-now-card/buy-now-card.component";
/**
 * Created by dattaram on 20/2/19.
 */
export const routes: Routes = [

  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'app-sell',
    component: SellComponent
  },
  {
    path: 'app-rent',
    component: RentComponent
  },
  {
    path:'app-property-details/:id/:category',
    component:PropertyListComponent
  },
  {
    path:'login',
    component:AuthenticationComponent
  },
  {
    path:'app-buy-property-details',
    component:BuyPropertyDetailsComponent
  },{
    path:'app-buy-now-card',
    component:BuyNowCardComponent
  }
];
