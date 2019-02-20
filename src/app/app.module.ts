import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AmexioWidgetModule, AmexioLayoutModule, AmexioPaneModule, } from 'amexio-ng-extensions';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { RouterModule } from '@angular/router';
import { SellComponent } from './components/sell/sell.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OtpVerificationComponent } from './components/otp-verification/otp-verification.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { RentComponent } from './components/rent/rent.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { BuyPropertyDetailsComponent } from './components/buy-property-details/buy-property-details.component';
import { BuyNowCardComponent } from './components/buy-now-card/buy-now-card.component';
import { DetailsCardComponent } from './components/details-card/details-card.component';
import { SearchComponent } from './components/search/search.component';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './components/home/home.component';
import {routes} from './app.route';
import {PropertyResolver} from "./service/property.resolver";


@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    LoginComponent,
    SignInComponent,
    SellComponent,
    OtpVerificationComponent,
    SearchboxComponent,
    RentComponent,
    AuthenticationComponent,
    PropertyListComponent,
    BuyPropertyDetailsComponent,
    BuyNowCardComponent,
    DetailsCardComponent,
    SearchComponent,
    HomeComponent
    ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes, {useHash: true}), AmexioWidgetModule, AmexioLayoutModule, AmexioPaneModule, BrowserAnimationsModule
  ],
  providers: [PropertyResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
