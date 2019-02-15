import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AmexioWidgetModule, AmexioLayoutModule, AmexioPaneModule, } from 'amexio-ng-extensions';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { RouterModule, Routes } from '@angular/router';
import { BuyComponent } from './components/buy/buy.component';
import { SellComponent } from './components/sell/sell.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OtpVerificationComponent } from './components/otp-verification/otp-verification.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { RentComponent } from './components/rent/rent.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { PropertyDetailsComponent } from './components/property-details/property-details.component';
import { BuyPropertyDetailsComponent } from './components/buy-property-details/buy-property-details.component';
import { BuyNowCardComponent } from './components/buy-now-card/buy-now-card.component';

const routes: Routes = [

  {
    path: '', component: BuyComponent
  },
  {
    path: 'app-buy',
    component: BuyComponent
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
    path:'app-property-details/:id',
    component:PropertyDetailsComponent
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
@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    LoginComponent,
    SignInComponent,
    BuyComponent,
    SellComponent,
    OtpVerificationComponent,
    SearchboxComponent,
    RentComponent,
    AuthenticationComponent,
    PropertyDetailsComponent,
    BuyPropertyDetailsComponent,
    BuyNowCardComponent
    ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,RouterModule.forRoot(routes,{useHash:true}),AmexioWidgetModule,AmexioLayoutModule, AmexioPaneModule,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
