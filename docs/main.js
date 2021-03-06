(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navlogo\">\n    <amexio-nav [logo]=\"'assets/images/logos/cardslogo.jpg'\" [title]=\"'Cards.com'\" [transparent]=\"dtsService.transparentFlag\"\n        [enable-side-nav-position]=\"false\" (onNavTitleClick)=\"onCardsclick($event)\">\n         <amexio-nav-item *ngIf=\"dtsService.sellFlag\" position-right [icon]=\"'fa fa-cart-arrow-down '\" [type]=\"'link'\"  [title]=\"'Sell'\" (onNavItemClick)=\"onSellClick($event)\">\n    </amexio-nav-item> \n        <amexio-nav-item *ngIf=\"dtsService.loginNavFlag\" position-right [type]=\"'link'\" [icon]=\"'fa fa-user'\" [title]=\"'Login'\" (onNavItemClick)=\"onLoginLinkClick($event)\">\n        </amexio-nav-item>\n    </amexio-nav>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_datatransfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/datatransfer.service */ "./src/app/service/datatransfer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(auth_Service, route, dtsService) {
        this.auth_Service = auth_Service;
        this.route = route;
        this.dtsService = dtsService;
    }
    AppComponent.prototype.onCardsclick = function () {
        this.route.navigate(['/home']);
    };
    AppComponent.prototype.onLoginLinkClick = function () {
        this.route.navigate(['/login']);
        this.auth_Service.showOTPWindow = false;
        this.auth_Service.showregisterWindow = false;
        this.auth_Service.showSignInWindow = true;
    };
    AppComponent.prototype.onSellClick = function () {
        if (this.auth_Service.loginFlag) {
            this.route.navigate(['/sell']);
        }
        else {
            this.route.navigate(['/login']);
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_service_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_datatransfer_service__WEBPACK_IMPORTED_MODULE_3__["DatatransferService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _components_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user-registration/user-registration.component */ "./src/app/components/user-registration/user-registration.component.ts");
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ "./src/app/components/sign-in/sign-in.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_sell_sell_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sell/sell.component */ "./src/app/components/sell/sell.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_otp_verification_otp_verification_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/otp-verification/otp-verification.component */ "./src/app/components/otp-verification/otp-verification.component.ts");
/* harmony import */ var _components_searchbox_searchbox_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/searchbox/searchbox.component */ "./src/app/components/searchbox/searchbox.component.ts");
/* harmony import */ var _components_rent_rent_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/rent/rent.component */ "./src/app/components/rent/rent.component.ts");
/* harmony import */ var _components_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/authentication/authentication.component */ "./src/app/components/authentication/authentication.component.ts");
/* harmony import */ var _components_property_list_property_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/property-list/property-list.component */ "./src/app/components/property-list/property-list.component.ts");
/* harmony import */ var _components_buy_property_details_buy_property_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/buy-property-details/buy-property-details.component */ "./src/app/components/buy-property-details/buy-property-details.component.ts");
/* harmony import */ var _components_buy_now_card_buy_now_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/buy-now-card/buy-now-card.component */ "./src/app/components/buy-now-card/buy-now-card.component.ts");
/* harmony import */ var _components_details_card_details_card_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/details-card/details-card.component */ "./src/app/components/details-card/details-card.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app.route */ "./src/app/app.route.ts");
/* harmony import */ var _service_property_resolver__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./service/property.resolver */ "./src/app/service/property.resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_5__["UserRegistrationComponent"],
                _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__["SignInComponent"],
                _components_sell_sell_component__WEBPACK_IMPORTED_MODULE_8__["SellComponent"],
                _components_otp_verification_otp_verification_component__WEBPACK_IMPORTED_MODULE_10__["OtpVerificationComponent"],
                _components_searchbox_searchbox_component__WEBPACK_IMPORTED_MODULE_11__["SearchboxComponent"],
                _components_rent_rent_component__WEBPACK_IMPORTED_MODULE_12__["RentComponent"],
                _components_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_13__["AuthenticationComponent"],
                _components_property_list_property_list_component__WEBPACK_IMPORTED_MODULE_14__["PropertyListComponent"],
                _components_buy_property_details_buy_property_details_component__WEBPACK_IMPORTED_MODULE_15__["BuyPropertyDetailsComponent"],
                _components_buy_now_card_buy_now_card_component__WEBPACK_IMPORTED_MODULE_16__["BuyNowCardComponent"],
                _components_details_card_details_card_component__WEBPACK_IMPORTED_MODULE_17__["DetailsCardComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_18__["SearchComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(_app_route__WEBPACK_IMPORTED_MODULE_21__["routes"], { useHash: true }), amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__["AmexioWidgetModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__["AmexioLayoutModule"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__["AmexioPaneModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]
            ],
            providers: [_service_property_resolver__WEBPACK_IMPORTED_MODULE_22__["PropertyResolver"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.route.ts":
/*!******************************!*\
  !*** ./src/app/app.route.ts ***!
  \******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_sell_sell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sell/sell.component */ "./src/app/components/sell/sell.component.ts");
/* harmony import */ var _components_rent_rent_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/rent/rent.component */ "./src/app/components/rent/rent.component.ts");
/* harmony import */ var _components_property_list_property_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/property-list/property-list.component */ "./src/app/components/property-list/property-list.component.ts");
/* harmony import */ var _components_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/authentication/authentication.component */ "./src/app/components/authentication/authentication.component.ts");
/* harmony import */ var _components_buy_property_details_buy_property_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/buy-property-details/buy-property-details.component */ "./src/app/components/buy-property-details/buy-property-details.component.ts");
/* harmony import */ var _components_buy_now_card_buy_now_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/buy-now-card/buy-now-card.component */ "./src/app/components/buy-now-card/buy-now-card.component.ts");
/* harmony import */ var _service_property_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/property.resolver */ "./src/app/service/property.resolver.ts");








/**
 * Created by dattaram on 20/2/19.
 */
var routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
    },
    {
        path: 'sell',
        component: _components_sell_sell_component__WEBPACK_IMPORTED_MODULE_1__["SellComponent"]
    },
    {
        path: 'app-rent',
        component: _components_rent_rent_component__WEBPACK_IMPORTED_MODULE_2__["RentComponent"]
    },
    {
        path: 'app-property-details/:id/:category',
        component: _components_property_list_property_list_component__WEBPACK_IMPORTED_MODULE_3__["PropertyListComponent"],
        resolve: { propertyMetadata: _service_property_resolver__WEBPACK_IMPORTED_MODULE_7__["PropertyResolver"] }
    },
    {
        path: 'login',
        component: _components_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_4__["AuthenticationComponent"]
    },
    {
        path: 'app-buy-property-details',
        component: _components_buy_property_details_buy_property_details_component__WEBPACK_IMPORTED_MODULE_5__["BuyPropertyDetailsComponent"]
    }, {
        path: 'app-buy-now-card',
        component: _components_buy_now_card_buy_now_card_component__WEBPACK_IMPORTED_MODULE_6__["BuyNowCardComponent"]
    }
];


/***/ }),

/***/ "./src/app/components/authentication/authentication.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/authentication/authentication.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/authentication/authentication.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/authentication/authentication.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <img src=\"assets/images/living-room1.jpg\" class=\"bg\">\n  <amexio-row>\n    <amexio-column size=\"12\" style=\"padding-top:6%\">\n      <amexio-layout-columns [orientation]=\"'vertical'\" [border]=\"false\" [alignment]=\"'center'\">\n        <amexio-layout-item>\n          <amexio-layout-columns [fit]=\"true\" [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"'center'\">\n            <amexio-layout-item>\n              <amexio-row>\n                <amexio-column size=\"12\" [fit]=\"true\">\n                  <app-user-registration [user-model]=\"userModel\" [showregisterWindow]=\"auth_Service.showregisterWindow\"></app-user-registration>\n                  <app-sign-in [login-model]=\"loginModel\" [showSignInWindow]=\"auth_Service.showSignInWindow\"></app-sign-in>\n                  <app-otp-verification [showOTPWindow]=\"auth_Service.showOTPWindow\"></app-otp-verification>\n                </amexio-column>\n              </amexio-row>\n            </amexio-layout-item>\n          </amexio-layout-columns>\n        </amexio-layout-item>\n      </amexio-layout-columns>\n    </amexio-column>\n  </amexio-row>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/authentication/authentication.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/authentication/authentication.component.ts ***!
  \***********************************************************************/
/*! exports provided: AuthenticationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationComponent", function() { return AuthenticationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _models_user_details_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/user.details.model */ "./src/app/models/user.details.model.ts");
/* harmony import */ var _models_login_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/login.model */ "./src/app/models/login.model.ts");
/* harmony import */ var _service_datatransfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/datatransfer.service */ "./src/app/service/datatransfer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationComponent = /** @class */ (function () {
    function AuthenticationComponent(auth_Service, dtsService) {
        this.auth_Service = auth_Service;
        this.dtsService = dtsService;
        this.userModel = new _models_user_details_model__WEBPACK_IMPORTED_MODULE_2__["UserDetails"]();
        this.loginModel = new _models_login_model__WEBPACK_IMPORTED_MODULE_3__["LoginModel"]();
        this.dtsService.transparentFlag = false;
    }
    AuthenticationComponent.prototype.ngOnInit = function () {
        // this.auth_Service.showLogin=false;
        this.auth_Service.showSignInWindow = true;
        this.auth_Service.showOTPWindow = false;
        this.auth_Service.showregisterWindow = false;
    };
    AuthenticationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./authentication.component.html */ "./src/app/components/authentication/authentication.component.html"),
            styles: [__webpack_require__(/*! ./authentication.component.css */ "./src/app/components/authentication/authentication.component.css")]
        }),
        __metadata("design:paramtypes", [_service_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _service_datatransfer_service__WEBPACK_IMPORTED_MODULE_4__["DatatransferService"]])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());



/***/ }),

/***/ "./src/app/components/buy-now-card/buy-now-card.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/buy-now-card/buy-now-card.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/buy-now-card/buy-now-card.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/buy-now-card/buy-now-card.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <img class=\"pic-style\">\n  <amexio-row>\n    <amexio-column size=\"3\">\n    </amexio-column>\n    <amexio-column size=\"6\" style=\"padding-top:7%\">\n      <amexio-layout-columns class=\"horizontal-position\" [orientation]=\"'horizontal'\" [border]=\"false\" [alignment]=\"'center'\">\n        <amexio-layout-item>\n          <amexio-layout-columns [fit]=\"true\" [border]=\"false\" [orientation]=\"'vertical'\" [alignment]=\"'center'\">\n            <amexio-layout-item>\n              <div class=\"main-class\">\n                <amexio-row>\n                  <amexio-column size=\"1\">\n                  </amexio-column>\n                  <amexio-column size=\"10\" [fit]=\"true\">\n                    <amexio-card [footer]=\"true\" [footer-align]=\"'center'\">\n                      <amexio-body>\n                         <amexio-row>\n                          <amexio-column size=\"12\" [fit]=\"true\">\n                        <amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"right\">\n                          <amexio-layout-item>\n                            <amexio-image style=\"cursor: pointer;\" [icon-class]=\"'fa fa-arrow-left fa-lg'\" [tooltip]=\"'Back'\" (onClick)=\"onBack()\"></amexio-image>\n                          </amexio-layout-item>\n                        </amexio-layout-columns>\n                        <amexio-badge [absolute]=\"true\" [background]=\"'black'\" [color]=\"'white'\" [top]=\"'0px'\" [right]=\"'0px'\">\n                          <amexio-label size=\"medium-bold\">Buy Now</amexio-label>\n                        </amexio-badge>\n                          </amexio-column>\n                         </amexio-row>\n                        <amexio-row>\n                          <amexio-column size=\"12\" [fit]=\"true\">\n                            <amexio-layout-columns  [border]=\"false\" [fit]=\"true\"\n                [alignment]=\"'start'\" [orientation]=\"'vertical'\">\n                <amexio-layout-item>\n                 <amexio-text-input [field-label]=\"'Pay'\" name=\"name\" [place-holder]=\"'Pay'\" [(ngModel)]=\"payment.price\">\n                            </amexio-text-input>\n                            <amexio-radio-group [field-label]=\"'Payement methods'\" name=\"methods\" [display-field]=\"'name'\" [value-field]=\"'id'\" [horizontal]=\"true\"\n                              [data]=\"paymentMethods\">\n                            </amexio-radio-group>\n                </amexio-layout-item>\n              </amexio-layout-columns>\n                          </amexio-column>\n                        </amexio-row>\n                      </amexio-body>\n                      <amexio-action>\n                        <amexio-button [size]=\"'default'\" [icon]=\"'fa fa-money'\" [label]=\"'Pay'\" [type]=\"'primary'\" [tooltip]=\"'Pay'\" (onClick)=\"onPayClick()\">\n                        </amexio-button>\n                      </amexio-action>\n                    </amexio-card>\n                  </amexio-column>\n                  <amexio-column size=\"1\">\n                  </amexio-column>\n                </amexio-row>\n              </div>\n            </amexio-layout-item>\n          </amexio-layout-columns>\n        </amexio-layout-item>\n      </amexio-layout-columns>\n    </amexio-column>\n    <amexio-column size=\"3\">\n    </amexio-column>\n  </amexio-row>\n</div>"

/***/ }),

/***/ "./src/app/components/buy-now-card/buy-now-card.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/buy-now-card/buy-now-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: BuyNowCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyNowCardComponent", function() { return BuyNowCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_datatransfer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/datatransfer.service */ "./src/app/service/datatransfer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuyNowCardComponent = /** @class */ (function () {
    function BuyNowCardComponent(route, dtsService) {
        this.route = route;
        this.dtsService = dtsService;
        this.paymentMethods = [];
        this.standardPaymentMethods = [];
        this.paymentMethods = [
            {
                "id": "1",
                "name": "Google Pay"
            },
            {
                "id": "2",
                "name": "Paypal"
            },
            {
                "id": "3",
                "name": "Apple Pay"
            },
            {
                "id": "4",
                "name": "Credit / Debit Cards"
            }, {
                "id": "5",
                "name": "Net Banking"
            }
        ];
        this.standardPaymentMethods = [{
                "id": "1",
                "name": "Credit / Debit Cards"
            }, {
                "id": "2",
                "name": "Net Banking"
            }];
    }
    BuyNowCardComponent.prototype.ngOnInit = function () {
        this.payment = this.dtsService.propertyDetails;
    };
    BuyNowCardComponent.prototype.onBack = function () {
        this.route.navigate(['/app-buy-property-details']);
    };
    BuyNowCardComponent.prototype.onPayClick = function () {
    };
    BuyNowCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buy-now-card',
            template: __webpack_require__(/*! ./buy-now-card.component.html */ "./src/app/components/buy-now-card/buy-now-card.component.html"),
            styles: [__webpack_require__(/*! ./buy-now-card.component.css */ "./src/app/components/buy-now-card/buy-now-card.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_datatransfer_service__WEBPACK_IMPORTED_MODULE_2__["DatatransferService"]])
    ], BuyNowCardComponent);
    return BuyNowCardComponent;
}());



/***/ }),

/***/ "./src/app/components/buy-property-details/buy-property-details.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/buy-property-details/buy-property-details.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/buy-property-details/buy-property-details.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/buy-property-details/buy-property-details.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-row >\n  <amexio-column size =\"12\"\n          [fit]=\"true\" style=\"padding-top:65px;\">\n      <amexio-layout-columns [fit]=\"true\" [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"'center'\">\n                  <amexio-layout-item>\n                    <app-searchbox [search-model]=\"searchModel\"></app-searchbox>\n                  </amexio-layout-item>\n                </amexio-layout-columns>\n  </amexio-column>\n<!-- </amexio-row>\n<amexio-row> -->\n  <amexio-column size=\"12\" >\n    <amexio-card [header]=\"false\" [footer]=\"false\">\n      <amexio-body>\n        <amexio-row>\n          <amexio-column size =\"12\"\n                  [fit]=\"true\">\n            <amexio-image style=\"cursor: pointer;\" [icon-class]=\"'fa fa-arrow-left fa-lg'\" [tooltip]=\"'Back'\" (onClick)=\"onBack()\"></amexio-image>\n          </amexio-column>\n          <amexio-column size=\"12\" [fit]=\"true\">\n            <amexio-layout-grid [layout]=\"'Home'\">\n              <!-- <amexio-grid-item [name]=\"'searchBox'\">\n              \n              </amexio-grid-item> -->\n              <amexio-grid-item [name]=\"'gridicon'\">\n                <amexio-image class=\"cardIconImage\" *ngFor=\"let photos of properyDetails.images\"  path=\"{{photos}}\" (onClick)=\"onImageClick(photos)\">\n                </amexio-image>\n              </amexio-grid-item>\n              <amexio-grid-item [name]=\"'gridimage'\">\n                <amexio-image class=\"maincardImage\" path=\"{{mainImagePath}}\">\n                </amexio-image>\n              </amexio-grid-item>\n              <amexio-grid-item [name]=\"'griddescription'\">\n                <app-details-card [data]=\"properyDetails\" [isListCard]=\"false\"></app-details-card>\n                <div style=\"cursor: pointer\">\n\n                  <table>\n                    <tr>\n                      <td>\n                        <p>{{properyDetails.description}} </p>\n                      </td>\n                    </tr>\n\n                  </table>\n\n                </div>\n\n                <ul *ngFor=\"let details of properyDetails.details\">\n                  <li>{{details}}</li>\n                </ul>\n              </amexio-grid-item>\n              <amexio-grid-item [name]=\"'gridmap'\">\n                <amexio-google-map [initial-zoom-level]=\"12\" [height]=\"'500px'\" [initial-lat]=\"18.512840\" [initial-lng]=\"73.926220\" [data]=\"data\"\n                  (onMarkerClick)=\"onMarkerClick($event)\" [google-map-key]=\"'AIzaSyDKSPX97z-ndeh_Mgq3xkaML2Kp9AwHA9s'\">\n                </amexio-google-map>\n              </amexio-grid-item>\n              <amexio-grid-item [name]=\"'gridbutton'\">\n                <amexio-row>\n                  <amexio-column size=\"6\" [fit]=\"true\">\n\n                    <amexio-button [block]=\"true\" [size]=\"'default'\" [icon]=\"'fa fa-arrow-left'\" [label]=\"'Back to list'\" [type]=\"'secondary'\"\n                      [tooltip]=\"'Back'\" (onClick)=\"onBack()\">\n                    </amexio-button>\n                  </amexio-column>\n                  <amexio-column size=\"6\" [fit]=\"true\">\n                    <amexio-button [block]=\"true\" [size]=\"'default'\" [icon]=\"'fa fa-money'\" [label]=\"'Buy Now'\" [type]=\"'primary'\" [tooltip]=\"'Buy Now'\"\n                      (onClick)=\"onBuyNowClick(properyDetails)\">\n                    </amexio-button>\n                  </amexio-column>\n                </amexio-row>\n              </amexio-grid-item>\n            </amexio-layout-grid>\n          </amexio-column>\n        </amexio-row>\n      </amexio-body>\n    </amexio-card>\n  </amexio-column>\n</amexio-row>"

/***/ }),

/***/ "./src/app/components/buy-property-details/buy-property-details.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/buy-property-details/buy-property-details.component.ts ***!
  \***********************************************************************************/
/*! exports provided: BuyPropertyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyPropertyDetailsComponent", function() { return BuyPropertyDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_datatransfer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/datatransfer.service */ "./src/app/service/datatransfer.service.ts");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_search_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/search.model */ "./src/app/models/search.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BuyPropertyDetailsComponent = /** @class */ (function () {
    function BuyPropertyDetailsComponent(dtsService, route, _gridlayoutService) {
        this.dtsService = dtsService;
        this.route = route;
        this._gridlayoutService = _gridlayoutService;
        this.properyDetails = [];
        this.searchModel = new _models_search_model__WEBPACK_IMPORTED_MODULE_4__["SearchModel"]();
        this.data = [];
        this.createLayouts();
        this._gridlayoutService.createLayout(this.gridDesktop);
        this.dtsService.sellFlag = true;
    }
    BuyPropertyDetailsComponent.prototype.ngOnInit = function () {
        this.properyDetails = this.dtsService.propertyDetails;
        this.mainImagePath = this.properyDetails.images[0];
        this.data.push(new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GoogleMapOverlays"](Number(this.properyDetails.location.latitude), Number(this.properyDetails.location.longitude), this.properyDetails.address, true, null, { city: 'pune' }));
    };
    BuyPropertyDetailsComponent.prototype.onMarkerClick = function ($event) {
    };
    BuyPropertyDetailsComponent.prototype.onBuyNowClick = function (property) {
        this.dtsService.propertyDetails = property;
        this.route.navigate(['/app-buy-now-card']);
    };
    BuyPropertyDetailsComponent.prototype.createLayouts = function () {
        this.gridDesktop = new amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConfig"]('Home', amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["GridConstants"].Desktop)
            .addlayout(["gridicon", "gridimage", "gridimage", "gridimage", "gridimage", "griddescription", "griddescription", "griddescription", "griddescription", "griddescription"])
            .addlayout(["gridbutton", "gridbutton", "gridbutton", "gridbutton", "gridbutton", "griddescription", "griddescription", "griddescription", "griddescription", "griddescription"])
            .addlayout(["gridmap", "gridmap", "gridmap", "gridmap", "gridmap", "griddescription", "griddescription", "griddescription", "griddescription", "griddescription"]);
    };
    BuyPropertyDetailsComponent.prototype.onImageClick = function (event) {
        this.mainImagePath = event;
    };
    BuyPropertyDetailsComponent.prototype.onBack = function () {
        this.route.navigate(['/app-property-details', this.properyDetails.category, this.properyDetails.id]);
    };
    BuyPropertyDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buy-property-details',
            template: __webpack_require__(/*! ./buy-property-details.component.html */ "./src/app/components/buy-property-details/buy-property-details.component.html"),
            styles: [__webpack_require__(/*! ./buy-property-details.component.css */ "./src/app/components/buy-property-details/buy-property-details.component.css")]
        }),
        __metadata("design:paramtypes", [_service_datatransfer_service__WEBPACK_IMPORTED_MODULE_1__["DatatransferService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioGridLayoutService"]])
    ], BuyPropertyDetailsComponent);
    return BuyPropertyDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/details-card/details-card.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/details-card/details-card.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/details-card/details-card.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/details-card/details-card.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"cursor: pointer\">\n            <amexio-row>\n              <amexio-column [size]=\"12\">\n                <table>\n                  <tr>\n                    <td>\n                      <p>\n                        <amexio-label size=\"medium-bold\">{{data.title}} </amexio-label> <br>{{data.subtitle}} <br>\n                        <amexio-image [icon-class]=\"'fa fa-map-marker fa-lg'\" (onClick)=\"getLocation(data)\"></amexio-image> &nbsp;\n                        <amexio-label>{{data.address}}.</amexio-label>\n                      </p>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <amexio-image [icon-class]=\"'fa fa-inr fa-lg'\"></amexio-image> &nbsp;\n                      <amexio-label size=\"medium-bold\">{{data.price}} </amexio-label>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      <amexio-rating-input [(ngModel)]=\"data.rating\" [max]=\"'5'\" [read-only]=\"true\">\n                      </amexio-rating-input>\n                    </td>\n                  </tr>\n                  <ng-container *ngIf=\"isListCard\">\n                  <tr>\n                    <td>\n                      <p>{{data.shortDescription}} </p>\n                    </td>\n                  </tr>\n                  </ng-container>\n                </table>\n              </amexio-column>\n            </amexio-row>\n          </div>\n"

/***/ }),

/***/ "./src/app/components/details-card/details-card.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/details-card/details-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: DetailsCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsCardComponent", function() { return DetailsCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_datatransfer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/datatransfer.service */ "./src/app/service/datatransfer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsCardComponent = /** @class */ (function () {
    function DetailsCardComponent(dtsService) {
        this.dtsService = dtsService;
    }
    DetailsCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DetailsCardComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DetailsCardComponent.prototype, "isListCard", void 0);
    DetailsCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details-card',
            template: __webpack_require__(/*! ./details-card.component.html */ "./src/app/components/details-card/details-card.component.html"),
            styles: [__webpack_require__(/*! ./details-card.component.css */ "./src/app/components/details-card/details-card.component.css")]
        }),
        __metadata("design:paramtypes", [_service_datatransfer_service__WEBPACK_IMPORTED_MODULE_1__["DatatransferService"]])
    ], DetailsCardComponent);
    return DetailsCardComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div [ngStyle]=\"{'padding-top':250+'px'}\">  -->\n<div>\n  <img src=\"assets/images/living-room1.jpg\" class=\"bg\">\n  <amexio-row>\n    <amexio-column size=\"12\" style=\"padding-top:14%\">\n    </amexio-column>\n  </amexio-row>\n  <amexio-layout-columns [orientation]=\"'vertical'\" [border]=\"false\">\n    <amexio-layout-item [fit]=\"true\" *ngFor=\"let alignment of ['center']\">\n      <amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"alignment\">\n        <amexio-layout-item>\n          <amexio-label size=\"large-bold\" font-color=\"white\">\n            What do you wanna buy today?\n          </amexio-label>\n        </amexio-layout-item>\n      </amexio-layout-columns>\n    </amexio-layout-item>\n  </amexio-layout-columns>\n  <amexio-layout-columns [orientation]=\"'vertical'\" [border]=\"false\" [alignment]=\"'center'\">\n    <amexio-layout-item [fit]=\"true\">\n      <amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"'center'\">\n        <amexio-layout-item>\n          <app-search [search-model]=\"dtsService.searchModel\"></app-search>\n        </amexio-layout-item>\n      </amexio-layout-columns>\n    </amexio-layout-item>\n  </amexio-layout-columns>\n</div>\n<!-- </div> -->\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_datatransfer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/datatransfer.service */ "./src/app/service/datatransfer.service.ts");
/* harmony import */ var _models_search_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/search.model */ "./src/app/models/search.model.ts");
/* harmony import */ var src_app_service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/authentication.service */ "./src/app/service/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by dattaram on 20/2/19.
 */




var HomeComponent = /** @class */ (function () {
    function HomeComponent(dtsService, auth_Service) {
        this.dtsService = dtsService;
        this.auth_Service = auth_Service;
        // this.searchModel=new SearchModel();
        this.dtsService.searchModel = new _models_search_model__WEBPACK_IMPORTED_MODULE_2__["SearchModel"]();
        // this.searchModel.type='buy';
        this.dtsService.searchType = 'buy';
        this.dtsService.transparentFlag = true;
        this.dtsService.sellFlag = false;
        if (this.auth_Service.loginFlag) {
            this.dtsService.loginNavFlag = false;
        }
        else {
            this.dtsService.loginNavFlag = true;
            ;
        }
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html")
        }),
        __metadata("design:paramtypes", [_service_datatransfer_service__WEBPACK_IMPORTED_MODULE_1__["DatatransferService"], src_app_service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/otp-verification/otp-verification.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/otp-verification/otp-verification.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/otp-verification/otp-verification.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/otp-verification/otp-verification.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card [header]=\"false\" [header-align]=\"'left'\" [footer]=\"true\" [footer-align]=\"'center'\" [show]=\"showOTPWindow\">\n    <amexio-body>\n        <amexio-row>\n            <amexio-column size =\"12\"\n                            [fit]=\"true\">\n                <amexio-layout-columns  [border]=\"false\" \n         [fit]=\"true\" [alignment]=\"'center'\" [orientation]=\"'horizontal'\">\n                    <amexio-layout-item>\n                        <amexio-image class=\"authImage\" [path]=\"'assets/images/building.png'\"  [filter]=\"'round'\" [title-position]=\"'centered'\">\n                        </amexio-image>\n                    </amexio-layout-item>\n                </amexio-layout-columns>\n            </amexio-column>\n        </amexio-row>\n        <br><br>\n        <amexio-layout-columns style=\"font-size:2em;\" [border]=\"false\" [fit]=\"true\"\n                [alignment]=\"'start'\" [orientation]=\"'vertical'\">\n                <amexio-layout-item>\n                     <amexio-text-input name=\"otp\" [field-label]=\"'OTP'\" [place-holder]=\"'Enter OTP'\" [(ngModel)]=\"oTP\">\n                        </amexio-text-input>\n                </amexio-layout-item>\n              </amexio-layout-columns>\n    </amexio-body>\n    <amexio-action>\n        <amexio-button [size]=\"'default'\" [type]=\"'secondary'\" [icon]=\"'fa fa-times'\" (onClick)=\"onCancel()\" label=\"Cancel\"></amexio-button>\n        <amexio-button [size]=\"'default'\" [type]=\"'primary'\" [icon]=\"'fa fa-check'\" (onClick)=\"onVerify()\" label=\"Verify\"></amexio-button>\n    </amexio-action>\n</amexio-card>"

/***/ }),

/***/ "./src/app/components/otp-verification/otp-verification.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/otp-verification/otp-verification.component.ts ***!
  \***************************************************************************/
/*! exports provided: OtpVerificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpVerificationComponent", function() { return OtpVerificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_datatransfer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/datatransfer.service */ "./src/app/service/datatransfer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OtpVerificationComponent = /** @class */ (function () {
    function OtpVerificationComponent(route, _dtsService) {
        this.route = route;
        this._dtsService = _dtsService;
        this.oTP = '';
    }
    OtpVerificationComponent.prototype.ngOnInit = function () {
    };
    OtpVerificationComponent.prototype.onVerify = function () {
        this.route.navigate(['/home']);
    };
    OtpVerificationComponent.prototype.onCancel = function () {
        this.route.navigate(['/home']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], OtpVerificationComponent.prototype, "showOTPWindow", void 0);
    OtpVerificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-otp-verification',
            template: __webpack_require__(/*! ./otp-verification.component.html */ "./src/app/components/otp-verification/otp-verification.component.html"),
            styles: [__webpack_require__(/*! ./otp-verification.component.css */ "./src/app/components/otp-verification/otp-verification.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_service_datatransfer_service__WEBPACK_IMPORTED_MODULE_2__["DatatransferService"]])
    ], OtpVerificationComponent);
    return OtpVerificationComponent;
}());



/***/ }),

/***/ "./src/app/components/property-list/property-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/property-list/property-list.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/property-list/property-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/property-list/property-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding-top:65px\">\n  <amexio-layout-columns [fit]=\"true\" [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"'center'\">\n    <amexio-layout-item>\n      <app-searchbox [search-model]=\"searchModel\"></app-searchbox>\n    </amexio-layout-item>\n  </amexio-layout-columns>\n  <amexio-row>\n    <amexio-column size=\"3\" *ngFor=\"let property of propertyDetails.properties\">\n      <ng-container *ngIf=\"category==='apartment'\">\n        <amexio-card-ce (click)=\"getPropertyDetails(property)\">\n          <amexio-image width=\"100%\" height=\"180px\" [path]=\"property.images[0]\"></amexio-image>\n          <amexio-body-ce>\n            <amexio-badge [absolute]=\"true\" [background]=\"'#e74c3c'\" [color]=\"'white'\" [top]=\"'-44px'\" [left]=\"'0px'\">\n              <amexio-label (onClick)=\"getPropertyDetails(property)\">Photos</amexio-label>\n            </amexio-badge>\n            <app-details-card [data]=\"property\" [isListCard]=\"true\"></app-details-card>\n          </amexio-body-ce>\n          <amexio-action-ce [align]=\"'end'\" [border-top]=\"true\">\n            <amexio-button [size]=\"'default'\" [icon]=\"'fa fa-money'\" [label]=\"'Buy Now'\" [type]=\"'primary'\" [tooltip]=\"'Buy Now'\">\n            </amexio-button>\n          </amexio-action-ce>\n        </amexio-card-ce>\n      </ng-container>\n      <ng-container *ngIf=\"category==='tv'\">\n        <amexio-card-ce (click)=\"getPropertyDetails(property)\">\n          <amexio-header-ce>\n            &nbsp;&nbsp;\n            <amexio-image [icon-class]=\"'fa fa-television fa-2x'\"></amexio-image>\n            <!-- <amexio-label size=\"medium-bold\">{{property.title}}\n          </amexio-label> -->\n          </amexio-header-ce>\n          <amexio-image width=\"100%\" height=\"180px\" [path]=\"property.images[0]\"></amexio-image>\n          <amexio-badge [absolute]=\"true\" [background]=\"'#e74c3c'\" [color]=\"'white'\" [top]=\"'6%'\" [right]=\"'5%'\">\n            <amexio-label>Photos</amexio-label>\n          </amexio-badge>\n          <amexio-body-ce>\n            <app-details-card [data]=\"property\" [isListCard]=\"true\"></app-details-card>\n          </amexio-body-ce>\n          <amexio-action-ce [align]=\"'end'\" [border-top]=\"true\">\n            <amexio-button [label]=\"'BUY NOW'\" [type]=\"'transparent'\" [tooltip]=\"'BUY'\">\n            </amexio-button>\n          </amexio-action-ce>\n        </amexio-card-ce>\n      </ng-container>\n    </amexio-column>\n  </amexio-row>\n</div>"

/***/ }),

/***/ "./src/app/components/property-list/property-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/property-list/property-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: PropertyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyListComponent", function() { return PropertyListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_datatransfer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/datatransfer.service */ "./src/app/service/datatransfer.service.ts");
/* harmony import */ var _models_search_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/search.model */ "./src/app/models/search.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PropertyListComponent = /** @class */ (function () {
    function PropertyListComponent(route, router, _dtsService) {
        this.route = route;
        this.router = router;
        this._dtsService = _dtsService;
        this.propertyData = [];
        this.searchModel = new _models_search_model__WEBPACK_IMPORTED_MODULE_3__["SearchModel"]();
        this._dtsService.transparentFlag = false;
        this._dtsService.sellFlag = true;
        this._dtsService.searchType = 'buy';
        this.propertyData = [];
    }
    PropertyListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.searchModel.category = params.id;
            _this.searchModel.searchData = params.category;
            _this.category = params.id;
            _this._dtsService.propertyListData = _this.route.snapshot.data.propertyMetadata;
            _this.propertyDetails = _this._dtsService.getPropertyListCardData(_this.searchModel.category, _this.searchModel.searchData);
        });
    };
    PropertyListComponent.prototype.getPropertyDetails = function (property) {
        property.id = this.searchModel.searchData;
        property.category = this.searchModel.category;
        this._dtsService.propertyDetails = property;
        this.router.navigate(['/app-buy-property-details']);
    };
    PropertyListComponent.prototype.getLocation = function (property) {
    };
    PropertyListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-property-details',
            template: __webpack_require__(/*! ./property-list.component.html */ "./src/app/components/property-list/property-list.component.html"),
            styles: [__webpack_require__(/*! ./property-list.component.css */ "./src/app/components/property-list/property-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_datatransfer_service__WEBPACK_IMPORTED_MODULE_2__["DatatransferService"]])
    ], PropertyListComponent);
    return PropertyListComponent;
}());



/***/ }),

/***/ "./src/app/components/rent/rent.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/rent/rent.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/rent/rent.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/rent/rent.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngStyle]=\"{'padding-top':320+'px'}\">\n  <amexio-layout-columns [orientation]=\"'vertical'\" [border]=\"false\">\n      <amexio-layout-item [fit]=\"true\" *ngFor=\"let alignment of ['center']\">\n        <amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"alignment\">\n          <amexio-layout-item>\n           <amexio-label size=\"large-bold\">\n              Properties for Rent  \n           </amexio-label>\n          </amexio-layout-item>\n        </amexio-layout-columns>\n         <amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"alignment\">\n          <amexio-layout-item>\n           <app-searchbox [search-model]=\"searchModel\"></app-searchbox>\n          </amexio-layout-item>\n        </amexio-layout-columns>\n      </amexio-layout-item>\n    </amexio-layout-columns>\n</div>"

/***/ }),

/***/ "./src/app/components/rent/rent.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/rent/rent.component.ts ***!
  \***************************************************/
/*! exports provided: RentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentComponent", function() { return RentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_search_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/search.model */ "./src/app/models/search.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RentComponent = /** @class */ (function () {
    function RentComponent() {
        this.searchModel = new _models_search_model__WEBPACK_IMPORTED_MODULE_1__["SearchModel"]();
        this.searchModel.type = 'rent';
    }
    RentComponent.prototype.ngOnInit = function () {
    };
    RentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rent',
            template: __webpack_require__(/*! ./rent.component.html */ "./src/app/components/rent/rent.component.html"),
            styles: [__webpack_require__(/*! ./rent.component.css */ "./src/app/components/rent/rent.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RentComponent);
    return RentComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-button \n    [label]=\"'Buy'\"\n    [type]=\"'theme-color'\"\n    [tooltip]=\"'toolTip'\"\n    [icon]=\"'icon'\"\n    [disabled]=\"false\"\n    (onClick)=\"onBuyClick($event)\" class=\"localsearch\">\n</amexio-button>\n<amexio-button\n    [label]=\"'Sell'\"\n    [type]=\"'theme-color'\"\n    [tooltip]=\"'toolTip'\"\n    [icon]=\"'icon'\"\n    [disabled]=\"false\"\n    (onClick)=\"onSell()\" class=\"localsearch\"> \n</amexio-button>\n<app-searchbox [search-model]=\"searchModel\"></app-searchbox>\n<amexio-dialogue [(show)]=\"warningdialogue\" [material-design]=\"true\" [message]=\"warningMsg\" [title]=\"'Warning'\" [message-type]=\"'warning'\" [type]=\"'alert'\">\n</amexio-dialogue>"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_search_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/search.model */ "./src/app/models/search.model.ts");
/* harmony import */ var src_app_service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/authentication.service */ "./src/app/service/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = /** @class */ (function () {
    function SearchComponent(route, _authService) {
        this.route = route;
        this._authService = _authService;
        this.warningdialogue = false;
        this.warningMsg = '';
    }
    SearchComponent.prototype.ngOnInit = function () { };
    SearchComponent.prototype.onBuyClick = function () {
        this.route.navigate(['/home']);
    };
    SearchComponent.prototype.onSell = function () {
        if (this._authService.loginFlag) {
            this.route.navigate(['/sell']);
        }
        else {
            this.route.navigate(['/login']);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('search-model'),
        __metadata("design:type", _models_search_model__WEBPACK_IMPORTED_MODULE_2__["SearchModel"])
    ], SearchComponent.prototype, "searchModel", void 0);
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/components/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/searchbox/searchbox.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/searchbox/searchbox.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/searchbox/searchbox.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/searchbox/searchbox.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"localsearch localsearch1\">\n    <amexio-dropdown [(ngModel)]=\"searchModel.category\" [place-holder]=\"'Choose'\" name=\"category\" [field-label]=\"''\" [data]=\"categories\"\n        [display-field]=\"'name'\" [value-field]=\"'id'\" [enable-sort]=\"true\" [sort]=\"'asc'\">\n    </amexio-dropdown>\n    <amexio-text-input [field-label]=\"'label'\" name=\"name\" [has-label]=\"false\" [place-holder]=\"'Search'\" [(ngModel)]=\"searchModel.searchData\"\n        [icon-feedback]=\"true\" class=\"localsearchtext\">\n    </amexio-text-input>\n    <amexio-button [label]=\"'Search'\" [type]=\"'theme-color'\" [badge]=\"badge\" [tooltip]=\"'toolTip'\" [icon]=\"'icon'\" [disabled]=\"false\"\n        [size]=\"'default'\" [loading]=\"false\" [block]=\"false\" [bg-color]=\"'red'\" (onClick)=\"onSearchButtonClick($event)\">\n    </amexio-button>\n</div>\n<amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"'start'\">\n    <amexio-layout-item>\n        <ng-container *ngIf=\"warningdialogue\">\n            <amexio-label size=\"medium-bold\" font-color=\"white\">\n                {{warningMsg}}\n            </amexio-label>\n        </ng-container>\n    </amexio-layout-item>\n</amexio-layout-columns>\n\n\n<!-- <amexio-dialogue [(show)]=\"warningdialogue\" [material-design]=\"true\" [message]=\"warningMsg\" [title]=\"'Error'\" [message-type]=\"'error'\" [type]=\"'alert'\">\n</amexio-dialogue> -->"

/***/ }),

/***/ "./src/app/components/searchbox/searchbox.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/searchbox/searchbox.component.ts ***!
  \*************************************************************/
/*! exports provided: SearchboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchboxComponent", function() { return SearchboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_search_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/search.model */ "./src/app/models/search.model.ts");
/* harmony import */ var src_app_service_datatransfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/datatransfer.service */ "./src/app/service/datatransfer.service.ts");
/* harmony import */ var src_app_service_shared_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/shared/http.service */ "./src/app/service/shared/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchboxComponent = /** @class */ (function () {
    function SearchboxComponent(route, _dtsService, _httpService) {
        this.route = route;
        this._dtsService = _dtsService;
        this._httpService = _httpService;
        this.warningdialogue = false;
        this.categories = [];
        this.searchModel = new _models_search_model__WEBPACK_IMPORTED_MODULE_2__["SearchModel"]();
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
    SearchboxComponent.prototype.ngOnInit = function () {
        this.searchModel.type = 'buy';
    };
    SearchboxComponent.prototype.onSearchButtonClick = function () {
        this.validSearchKey = false;
        if (this.searchModel.category === 'apartment') {
            if (this._dtsService.appartmentData.length > 0) {
                this.navigateToPropertyDetails();
            }
            else {
                this.getApartmentPropertyDetails();
            }
        }
        else if (this.searchModel.category === 'tv') {
            if (this._dtsService.tvData.length > 0) {
                this.navigateToPropertyDetails();
            }
            else {
                this.getTVPropertyDetails();
            }
        }
        else {
            this.warningMsg = 'Data not found, enter valid search data.';
            this.warningdialogue = true;
        }
    };
    SearchboxComponent.prototype.checkSearchData = function (data) {
        var _this = this;
        if (data === 'apartment') {
            this._dtsService.appartmentData.forEach(function (obj) {
                if (obj.searchKey === _this.searchModel.searchData) {
                    _this.validSearchKey = true;
                }
            });
        }
        else if (data === 'tv') {
            this._dtsService.tvData.forEach(function (obj) {
                if (obj.searchKey === _this.searchModel.searchData) {
                    _this.validSearchKey = true;
                }
            });
        }
    };
    SearchboxComponent.prototype.navigateToPropertyDetails = function () {
        this.checkSearchData(this.searchModel.category);
        if (this.validSearchKey) {
            this.route.navigate(['/app-property-details', this.searchModel.category, this.searchModel.searchData]);
        }
        else {
            this.warningMsg = 'Data not found, enter valid search data.';
            this.warningdialogue = true;
        }
    };
    SearchboxComponent.prototype.getApartmentPropertyDetails = function () {
        var _this = this;
        this._httpService.fetchdata('assets/json/apartment.json').subscribe(function (res) {
            _this._dtsService.appartmentData = res;
            _this.navigateToPropertyDetails();
        });
    };
    SearchboxComponent.prototype.getTVPropertyDetails = function () {
        var _this = this;
        this._httpService.fetchdata('assets/json/tv.json').subscribe(function (res) {
            _this._dtsService.tvData = res;
            _this.navigateToPropertyDetails();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('search-model'),
        __metadata("design:type", _models_search_model__WEBPACK_IMPORTED_MODULE_2__["SearchModel"])
    ], SearchboxComponent.prototype, "searchModel", void 0);
    SearchboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-searchbox',
            template: __webpack_require__(/*! ./searchbox.component.html */ "./src/app/components/searchbox/searchbox.component.html"),
            styles: [__webpack_require__(/*! ./searchbox.component.css */ "./src/app/components/searchbox/searchbox.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_service_datatransfer_service__WEBPACK_IMPORTED_MODULE_3__["DatatransferService"], src_app_service_shared_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]])
    ], SearchboxComponent);
    return SearchboxComponent;
}());



/***/ }),

/***/ "./src/app/components/sell/sell.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/sell/sell.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sell/sell.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/sell/sell.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding-top:5%\">\n  <amexio-row>\n    <amexio-column size=\"6\">\n      <div [formGroup]=\"sellFormGroup\">\n        <amexio-card [header]=\"false\" [header-align]=\"'left'\" [footer]=\"true\" [footer-align]=\"'right'\" height=\"650\">\n          <amexio-body>\n            <!-- <amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"'left'\">\n          <amexio-layout-item>\n            <amexio-image style=\"cursor: pointer;\" [icon-class]=\"'fa fa-arrow-left fa-lg'\" [tooltip]=\"'Back'\" (onClick)=\"onBack()\"></amexio-image>\n          </amexio-layout-item>\n        </amexio-layout-columns> -->\n            <amexio-badge [absolute]=\"true\" [background]=\"'black'\" [color]=\"'white'\" [top]=\"'0px'\" [right]=\"'0px'\">\n              Post Cards here\n            </amexio-badge>\n            <amexio-row>\n              <amexio-column size=\"6\">\n                <amexio-text-input [(ngModel)]=\"sellModel.title\" formControlName=\"Title\" field-label=\"Title\" place-holder=\"Enter Title\">\n                </amexio-text-input>\n              </amexio-column>\n              <amexio-column size=\"6\">\n                <amexio-text-input [(ngModel)]=\"sellModel.subtitle\" formControlName=\"SubTitle\" field-label=\"Sub Title\" place-holder=\"Enter Sub Title\">\n                </amexio-text-input>\n              </amexio-column>\n              <amexio-column size=\"6\">\n                <amexio-dropdown [(ngModel)]=\"sellModel.category\" formControlName=\"Category\" [place-holder]=\"'Choose'\" name=\"category\" [field-label]=\"'Category'\"\n                  [data]=\"categories\" [display-field]=\"'name'\" [value-field]=\"'id'\">\n                </amexio-dropdown>\n              </amexio-column>\n              <amexio-column size=\"6\">\n                <amexio-text-input [(ngModel)]=\"sellModel.tag\" formControlName=\"Tag\" [field-label]=\"'Tag'\">\n                </amexio-text-input>\n              </amexio-column>\n              <amexio-column size=\"6\">\n                <amexio-text-input [(ngModel)]=\"sellModel.price\" formControlName=\"Price\" field-label=\"Price\" place-holder=\"Enter Price\">\n                </amexio-text-input>\n              </amexio-column>\n              <amexio-column size=\"6\">\n                <amexio-text-input [(ngModel)]=\"sellModel.city\" formControlName=\"City\" field-label=\"City\" place-holder=\"Enter Price\">\n                </amexio-text-input>\n              </amexio-column>\n              <amexio-column size=\"6\">\n                <amexio-text-input [(ngModel)]=\"sellModel.locality\" formControlName=\"Locality\" field-label=\"Locality\" place-holder=\"Enter Price\">\n                </amexio-text-input>\n              </amexio-column>\n              <amexio-column size=\"6\">\n                <amexio-fileupload [http-url]=\"'/upload'\" [http-method]=\"'POST'\" [file-type]=\"'image/*'\" [multiple-file]=\"'*'\" [field-label]=\"'Photo Upload'\"\n                  (onFileUpload)=\"onPhotoUpload($event)\" formControlName=\"Photo\" [(ngModel)]=\"sellModel.image\" (onRemove)=\"onPhotoRemoveClick($event)\">\n                </amexio-fileupload>\n              </amexio-column>\n              <amexio-column size=\"12\">\n                <amexio-image class=\"sellImage\" *ngFor=\"let photos of sellModel.images\"  [path]=\"photos\">\n                </amexio-image>\n                &nbsp; &nbsp;\n              </amexio-column>\n              <amexio-column size=\"12\">\n                <amexio-textarea-input [(ngModel)]=\"sellModel.description\" formControlName=\"Description\" [enable-popover]=\"true\" [field-label]=\"'Description'\"\n                  [place-holder]=\"'Enter Description'\" [allow-blank]=\"false\" [error-msg]=\"'Please enter description'\" [icon-feedback]=\"true\"\n                  [rows]=\"'2'\" [columns]=\"'2'\">\n                </amexio-textarea-input>\n              </amexio-column>\n            </amexio-row>\n          </amexio-body>\n          <amexio-action>\n            <amexio-button [disabled]=\"!sellFormGroup.valid\" [size]=\"'default'\" [type]=\"'secondary'\" [icon]=\"'fa fa-floppy-o'\" (onClick)=\"onAddClick()\"\n              label=\"Post\"></amexio-button>\n          </amexio-action>\n        </amexio-card>\n      </div>\n    </amexio-column>\n    <amexio-column size=\"6\" [fit]=\"true\">    \n         <amexio-card\n           [header]=\"false\"\n           [footer]=\"false\"\n           height=\"650\">\n             <amexio-body>\n               <amexio-row>\n               <amexio-column size=\"6\" [fit]=\"true\" *ngFor=\"let property of data.properties\">\n               <amexio-badge [absolute]=\"true\" [background]=\"'black'\" [color]=\"'white'\" [top]=\"'0px'\" [right]=\"'0px'\">\n              Existing Cards\n            </amexio-badge>\n            <br>\n                <amexio-card-ce>\n            <amexio-header-ce>\n              <amexio-label size=\"medium-bold\">\n                {{property.title }}\n              </amexio-label>\n            </amexio-header-ce> \n            <amexio-image width=\"100%\" height=\"130px\" [path]=\"property.images[0]\"></amexio-image>\n            <amexio-body-ce>\n              <amexio-label size=\"smalls\">\n                {{property.subtitle }}\n              </amexio-label>\n              <br>\n              <amexio-label size=\"medium-bold\">\n                {{property.price }}\n              </amexio-label>\n            </amexio-body-ce>\n          </amexio-card-ce>\n               </amexio-column>\n               </amexio-row>\n             </amexio-body>\n         </amexio-card>\n        </amexio-column>\n  </amexio-row>\n</div>"

/***/ }),

/***/ "./src/app/components/sell/sell.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/sell/sell.component.ts ***!
  \***************************************************/
/*! exports provided: SellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellComponent", function() { return SellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_datatransfer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/datatransfer.service */ "./src/app/service/datatransfer.service.ts");
/* harmony import */ var _models_search_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/search.model */ "./src/app/models/search.model.ts");
/* harmony import */ var src_app_service_shared_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/shared/http.service */ "./src/app/service/shared/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_sellData_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/sellData.model */ "./src/app/models/sellData.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SellComponent = /** @class */ (function () {
    function SellComponent(_route, _dtsService, _httpService, fb) {
        this._route = _route;
        this._dtsService = _dtsService;
        this._httpService = _httpService;
        this.fb = fb;
        this.constImgaePath = "assets/images/";
        this.searchModel = new _models_search_model__WEBPACK_IMPORTED_MODULE_2__["SearchModel"]();
        this.sellModel = new _models_sellData_model__WEBPACK_IMPORTED_MODULE_5__["SellDataModel"]();
        this.searchModel.type = 'sell';
        this._dtsService.transparentFlag = false;
        this._dtsService.sellFlag = false;
    }
    SellComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._httpService.fetchdata('assets/json/sell.json').subscribe(function (res) {
            _this.data = res;
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
    };
    SellComponent.prototype.valiadteSellForm = function () {
        this.sellFormGroup = this.fb.group({
            Title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            SubTitle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            Category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            Tag: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            Price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            City: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            Locality: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            Description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            Photo: ['', { standalone: true }]
        });
    };
    SellComponent.prototype.onPhotoUpload = function (event) {
        var _this = this;
        this.sellModel.images = [];
        this.sellModel.image = this.constImgaePath + event[0].name;
        // this.sellModel.images=event;
        event.forEach(function (obj) {
            _this.sellModel.images.push(_this.constImgaePath + obj.name);
        });
    };
    SellComponent.prototype.onPhotoRemoveClick = function (event) {
        var _this = this;
        this.sellModel.images.forEach(function (obj, index) {
            if (obj == _this.constImgaePath + event.fileData.name) {
                _this.sellModel.images.splice(index, 1);
            }
        });
    };
    SellComponent.prototype.onBack = function () {
        this._route.navigate(['/home']);
    };
    SellComponent.prototype.onAddClick = function () {
        this.data.properties.push(this.sellModel);
    };
    SellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sell',
            template: __webpack_require__(/*! ./sell.component.html */ "./src/app/components/sell/sell.component.html"),
            styles: [__webpack_require__(/*! ./sell.component.css */ "./src/app/components/sell/sell.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _service_datatransfer_service__WEBPACK_IMPORTED_MODULE_1__["DatatransferService"], src_app_service_shared_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], SellComponent);
    return SellComponent;
}());



/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"signInGroup\" *ngIf=\"showSignInWindow\">\n  <amexio-card-ce>\n   <amexio-body-ce>\n        <amexio-layout-columns style=\"font-size:2em;\" [border]=\"false\" [fit]=\"true\" [alignment]=\"'center'\" [orientation]=\"'horizontal'\">\n        <amexio-layout-item>\n          <amexio-image class=\"authImage\" [path]=\"'assets/images/building.png'\" [filter]=\"'round'\">\n          </amexio-image>\n        </amexio-layout-item>\n      </amexio-layout-columns>\n      <amexio-layout-columns style=\"font-size:2em;\" [border]=\"false\" [fit]=\"true\" [alignment]=\"'center'\" [orientation]=\"'horizontal'\">\n      <amexio-layout-item>\n          <amexio-label size=\"medium-bold\">Login to your Account</amexio-label>\n        </amexio-layout-item>\n      </amexio-layout-columns>  \n      <amexio-layout-columns style=\"font-size:2em;\" [border]=\"false\" [fit]=\"true\" [alignment]=\"'start'\" [orientation]=\"'vertical'\">\n     <amexio-layout-item>\n      <amexio-number-input formControlName=\"Phone\" name=\"name\" field-label=\"Phone\" place-holder=\"Enter Name\" [(ngModel)]=\"loginModel.phone\">\n      </amexio-number-input>\n      <amexio-password-input formControlName=\"Password\" [enable-popover]=\"true\" [field-label]=\"'Password '\" name=\"password\" [place-holder]=\"'Enter Password'\"\n        [allow-blank]=\"false\"   [icon-feedback]=\"true\" [(ngModel)]=\"loginModel.password\">\n      </amexio-password-input>\n      </amexio-layout-item>\n      <amexio-layout-item>\n        <amexio-button [disabled]=\"!signInGroup.valid\" [label]=\"'Login'\" [type]=\"'theme-color'\" [tooltip]=\"'Get Started'\" [block]=\"true\"\n          (onClick)=\"onSignInClick()\">\n        </amexio-button>\n      </amexio-layout-item>\n      </amexio-layout-columns>\n    </amexio-body-ce>\n\n    <amexio-action-ce [border-top]=\"true\" [align]=\"'center'\" class=\"floatingBtn\">\n      <amexio-login-social [style-type]=\"'circle'\" [api-key]=\"'743009515877-3rfp9u0b2iq95m2o2921kc3hecaamc3e'\" [type]=\"'google'\"\n        (onLogin)=\"onGoogleClick($event)\">\n      </amexio-login-social>\n      <amexio-login-social [style-type]=\"'circle'\" [api-key]=\"'320512778592240'\" [type]=\"'facebook'\" (onLogin)=\"onFacebookClick($event)\">\n      </amexio-login-social>\n      <amexio-login-social [style-type]=\"'circle'\" [api-key]=\"'81wzvqnx8wtvmg'\" [type]=\"'linkedin'\" (onLogin)=\"onLinkedinClick($event)\">\n      </amexio-login-social>\n      <amexio-floating-button [relative]=\"true\" [icon]=\"'fa fa-user-plus'\" (onClick)=\"onRegisterClick($event)\" [type]=\"'theme-color'\"></amexio-floating-button>\n    </amexio-action-ce>\n  </amexio-card-ce>\n</div>\n\n\n  <!-- <amexio-card [header]=\"false\" [header-align]=\"'left'\" [footer]=\"true\" [footer-align]=\"'center'\" [show]=\"showSignInWindow\">\n  <amexio-body>\n     <amexio-row>\n      <amexio-column size=\"12\">\n     <amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"right\">\n          <amexio-layout-item>\n            <amexio-image style=\"cursor: pointer;\"  [icon-class]=\"'fa fa-arrow-left fa-lg'\" [tooltip]=\"'Back'\" (onClick)=\"onBack()\"></amexio-image>\n          </amexio-layout-item>\n        </amexio-layout-columns>\n   <amexio-layout-columns style=\"font-size:2em;\" [border]=\"false\" [fit]=\"true\" [alignment]=\"'center'\" [orientation]=\"'horizontal'\">\n          <amexio-layout-item>\n            <amexio-image class=\"authImage\" [path]=\"'assets/images/building.png'\"  [filter]=\"'round'\" [title-position]=\"'centered'\">\n            </amexio-image>\n          </amexio-layout-item>\n        </amexio-layout-columns>\n        <amexio-layout-columns style=\"font-size:2em;\" [border]=\"false\" [fit]=\"true\" [alignment]=\"'center'\" [orientation]=\"'horizontal'\">\n          <amexio-layout-item>\n            <amexio-label size=\"medium-bold\">Login to your Account</amexio-label>\n          </amexio-layout-item>\n        </amexio-layout-columns>\n      </amexio-column>  \n     </amexio-row>\n    <amexio-row>\n      <amexio-column [size]=\"12\">\n        \n      </amexio-column>\n    </amexio-row>\n  </amexio-body>\n  <amexio-action>\n  \n    <amexio-button   [size]=\"'default'\" [type]=\"'secondary'\" [icon]=\"'fa fa-times'\" (onClick)=\"onCancel()\" label=\"Cancel\"></amexio-button>\n    <amexio-button [disabled]=\"!signInGroup.valid\"  [size]=\"'default'\" [icon]=\"'fa fa-sign-in'\" [type]=\"'primary'\" (onClick)=\"onSignInClick()\" label=\"Login\"></amexio-button>\n  </amexio-action>\n</amexio-card> -->\n"

/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.ts ***!
  \*********************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_login_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/login.model */ "./src/app/models/login.model.ts");
/* harmony import */ var src_app_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _service_datatransfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/datatransfer.service */ "./src/app/service/datatransfer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignInComponent = /** @class */ (function () {
    function SignInComponent(auth_Service, dtsService, route, fb) {
        this.auth_Service = auth_Service;
        this.dtsService = dtsService;
        this.route = route;
        this.fb = fb;
        this.loginModel = new _models_login_model__WEBPACK_IMPORTED_MODULE_1__["LoginModel"]();
    }
    SignInComponent.prototype.ngOnInit = function () {
        this.dtsService.loginNavFlag = false;
        this.dtsService.transparentFlag = true;
        this.dtsService.sellFlag = false;
        this.validateSigninform();
    };
    SignInComponent.prototype.validateSigninform = function () {
        this.signInGroup = this.fb.group({
            Phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1111111111), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].max(9999999999)]],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
        });
    };
    SignInComponent.prototype.onSignInClick = function () {
        debugger;
        this.route.navigate(['/home']);
        this.auth_Service.loginFlag = true;
        this.dtsService.loginNavFlag = false;
    };
    SignInComponent.prototype.onCancel = function () {
        this.route.navigate(['/home']);
    };
    // onBack(){
    //   this.auth_Service.showOTPWindow=false;
    //   this.auth_Service.showregisterWindow=false;
    //   this.auth_Service.showLogin=true;
    //   this.auth_Service.showSignInWindow=false;
    // }
    SignInComponent.prototype.onRegisterClick = function (event) {
        this.auth_Service.showOTPWindow = false;
        this.auth_Service.showregisterWindow = true;
        this.auth_Service.showSignInWindow = false;
    };
    SignInComponent.prototype.onLoginClick = function () {
    };
    SignInComponent.prototype.onFacebookClick = function (event) {
    };
    SignInComponent.prototype.onGoogleClick = function (event) {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SignInComponent.prototype, "showSignInWindow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('login-model'),
        __metadata("design:type", _models_login_model__WEBPACK_IMPORTED_MODULE_1__["LoginModel"])
    ], SignInComponent.prototype, "loginModel", void 0);
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/components/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/components/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _service_datatransfer_service__WEBPACK_IMPORTED_MODULE_3__["DatatransferService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/components/user-registration/user-registration.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/user-registration/user-registration.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-registration/user-registration.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/user-registration/user-registration.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"userRegistrationGroup\">\n<amexio-card [header]=\"false\" [header-align]=\"'left'\" [footer]=\"true\" [footer-align]=\"'center'\" [show]=\"showregisterWindow\">\n  <amexio-body>\n     <amexio-row>\n      <amexio-column size=\"12\">\n    <amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"right\">\n          <amexio-layout-item>\n            <amexio-image style=\"cursor: pointer;\" [icon-class]=\"'fa fa-arrow-left fa-lg'\" [tooltip]=\"'Back'\" (onClick)=\"onBack()\"></amexio-image>\n          </amexio-layout-item>\n        </amexio-layout-columns>\n        <amexio-layout-columns style=\"font-size:2em;\" [border]=\"false\" [fit]=\"true\" [alignment]=\"'center'\" [orientation]=\"'horizontal'\">\n          <amexio-layout-item>\n            <amexio-image class=\"authImage\"  [path]=\"'assets/images/building.png'\"  [filter]=\"'round'\" [title-position]=\"'centered'\">\n            </amexio-image>\n          </amexio-layout-item>\n        </amexio-layout-columns>\n        <!-- <amexio-layout-columns style=\"font-size:2em;\" [border]=\"false\" [fit]=\"true\" [alignment]=\"'center'\" [orientation]=\"'horizontal'\">\n          <amexio-layout-item>\n            <amexio-label size=\"medium-bold\">Your Keys Await</amexio-label>\n          </amexio-layout-item>\n        </amexio-layout-columns> -->\n      </amexio-column>\n     </amexio-row>\n      <!-- </amexio-layout-item>\n    </amexio-layout-columns> -->\n    <amexio-row>\n      <amexio-column size=\"12\" [fit]=\"true\">\n        <amexio-text-input formControlName=\"Name\" field-label=\"Name\" place-holder=\"Enter Name\" [(ngModel)]=\"userModel.name\">\n        </amexio-text-input>\n        <amexio-number-input  formControlName=\"Phone\"  [field-label]=\"'Phone'\" [place-holder]=\"'Enter phone Number'\" [(ngModel)]=\"userModel.phone\"\n         [error-msg]=\"'Please enter valid phone number'\">\n        </amexio-number-input>\n        <amexio-password-input   formControlName=\"Password\" [field-label]=\"'Password'\" [place-holder]=\"'Enter Password'\"\n          [allow-blank]=\"false\" [error-msg]=\"'Please enter password'\" [min-length]=\"6\" [min-error-msg]=\"'Minimum 6 char required'\"\n          [max-length]=\"32\" [max-error-msg]=\"'Maximum 32 char allowed'\" [icon-feedback]=\"true\" [(ngModel)]=\"userModel.password\">\n        </amexio-password-input>\n      </amexio-column>\n    </amexio-row>\n  </amexio-body>\n  <amexio-action>\n    <!-- <amexio-button  [size]=\"'medium'\" [type]=\"'primary'\" (onClick)=\"onBack()\" label=\"Back\"></amexio-button> -->\n      <amexio-button   [size]=\"'default'\" [type]=\"'secondary'\" [icon]=\"'fa fa-times'\" (onClick)=\"onCancel()\" label=\"Cancel\"></amexio-button>\n    <amexio-button [disabled]=\"!userRegistrationGroup.valid\"  [size]=\"'default'\" [icon]=\"'fa fa-user-plus'\" [type]=\"'primary'\" (onClick)=\"onRegister()\" label=\"Register\"></amexio-button>\n  </amexio-action>\n</amexio-card>\n</div>"

/***/ }),

/***/ "./src/app/components/user-registration/user-registration.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/user-registration/user-registration.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UserRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistrationComponent", function() { return UserRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _models_user_details_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/user.details.model */ "./src/app/models/user.details.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserRegistrationComponent = /** @class */ (function () {
    function UserRegistrationComponent(auth_Service, route, fb) {
        this.auth_Service = auth_Service;
        this.route = route;
        this.fb = fb;
        this.showregisterWindow = false;
        this.userModel = new _models_user_details_model__WEBPACK_IMPORTED_MODULE_2__["UserDetails"]();
    }
    UserRegistrationComponent.prototype.ngOnInit = function () {
        this.valiadteUserRegistrationForm();
    };
    UserRegistrationComponent.prototype.valiadteUserRegistrationForm = function () {
        this.userRegistrationGroup = this.fb.group({
            Name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            Phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1111111111), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(9999999999)]],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
    };
    UserRegistrationComponent.prototype.onRegister = function () {
        this.auth_Service.showOTPWindow = true;
        this.auth_Service.showregisterWindow = false;
        // this.auth_Service.showLogin=false;
        this.auth_Service.showSignInWindow = false;
    };
    UserRegistrationComponent.prototype.onCancel = function () {
        this.route.navigate(['/home']);
    };
    UserRegistrationComponent.prototype.onBack = function () {
        this.auth_Service.showOTPWindow = false;
        this.auth_Service.showregisterWindow = false;
        this.auth_Service.showSignInWindow = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], UserRegistrationComponent.prototype, "showregisterWindow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('user-model'),
        __metadata("design:type", _models_user_details_model__WEBPACK_IMPORTED_MODULE_2__["UserDetails"])
    ], UserRegistrationComponent.prototype, "userModel", void 0);
    UserRegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-registration',
            template: __webpack_require__(/*! ./user-registration.component.html */ "./src/app/components/user-registration/user-registration.component.html"),
            styles: [__webpack_require__(/*! ./user-registration.component.css */ "./src/app/components/user-registration/user-registration.component.css")]
        }),
        __metadata("design:paramtypes", [_service_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], UserRegistrationComponent);
    return UserRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/models/login.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/login.model.ts ***!
  \***************************************/
/*! exports provided: LoginModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModel", function() { return LoginModel; });
var LoginModel = /** @class */ (function () {
    function LoginModel() {
        this.phone = '';
        this.password = '';
    }
    return LoginModel;
}());



/***/ }),

/***/ "./src/app/models/search.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/search.model.ts ***!
  \****************************************/
/*! exports provided: SearchModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModel", function() { return SearchModel; });
var SearchModel = /** @class */ (function () {
    function SearchModel() {
        this.type = '';
        this.searchData = '';
        this.category = '';
    }
    return SearchModel;
}());



/***/ }),

/***/ "./src/app/models/sellData.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/sellData.model.ts ***!
  \******************************************/
/*! exports provided: SellDataModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellDataModel", function() { return SellDataModel; });
var SellDataModel = /** @class */ (function () {
    function SellDataModel() {
        this.title = '';
        this.subtitle = '';
        this.category = '';
        this.tag = '';
        this.price = '';
        this.city = '';
        this.locality = '';
        this.description = '';
        this.image = '';
        this.images = [];
    }
    return SellDataModel;
}());



/***/ }),

/***/ "./src/app/models/user.details.model.ts":
/*!**********************************************!*\
  !*** ./src/app/models/user.details.model.ts ***!
  \**********************************************/
/*! exports provided: UserDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetails", function() { return UserDetails; });
var UserDetails = /** @class */ (function () {
    function UserDetails() {
        this.name = '';
        this.phone = '';
        this.password = '';
    }
    return UserDetails;
}());



/***/ }),

/***/ "./src/app/service/authentication.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/authentication.service.ts ***!
  \***************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthenticationService = /** @class */ (function () {
    function AuthenticationService() {
        this.loginFlag = false;
    }
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/service/datatransfer.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/datatransfer.service.ts ***!
  \*************************************************/
/*! exports provided: DatatransferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatransferService", function() { return DatatransferService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/shared/http.service */ "./src/app/service/shared/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DatatransferService = /** @class */ (function () {
    function DatatransferService(route, _httpService) {
        this.route = route;
        this._httpService = _httpService;
        this.appartmentData = [];
        this.tvData = [];
    }
    DatatransferService.prototype.getPropertyListCardData = function (id, data) {
        if (id === 'apartment') {
            return this.propertyListData.find(function (x) { return x.searchKey === data; });
        }
        else if (id === 'tv') {
            return this.propertyListData.find(function (x) { return x.searchKey === data; });
        }
    };
    DatatransferService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_shared_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], DatatransferService);
    return DatatransferService;
}());



/***/ }),

/***/ "./src/app/service/property.resolver.ts":
/*!**********************************************!*\
  !*** ./src/app/service/property.resolver.ts ***!
  \**********************************************/
/*! exports provided: PropertyResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyResolver", function() { return PropertyResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datatransfer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datatransfer.service */ "./src/app/service/datatransfer.service.ts");
/* harmony import */ var src_app_service_shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/shared/http.service */ "./src/app/service/shared/http.service.ts");
/**
 * Created by dattaram on 20/2/19.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PropertyResolver = /** @class */ (function () {
    function PropertyResolver(_dtsService, _httpService) {
        this._dtsService = _dtsService;
        this._httpService = _httpService;
    }
    PropertyResolver.prototype.resolve = function (route) {
        return this._httpService.fetchdata('assets/json/' + route.paramMap.get('id') + '.json');
    };
    PropertyResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_datatransfer_service__WEBPACK_IMPORTED_MODULE_1__["DatatransferService"], src_app_service_shared_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], PropertyResolver);
    return PropertyResolver;
}());



/***/ }),

/***/ "./src/app/service/shared/http.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/shared/http.service.ts ***!
  \************************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    //     fetch(serviceUrl: string, methodType: string): Observable<any> {
    //         const headers = new HttpHeaders().append('Content-Type', 'application/json;charset=UTF-8');
    //         if (methodType === 'post') {
    //             return this.http.post(SERVICE_URL.BASE_APP_URL + serviceUrl, { headers });
    //         } else if (methodType === 'get') {
    //             return this.http.get(SERVICE_URL.BASE_APP_URL + serviceUrl , { headers });
    //         }
    //     }
    //     post(serviceUrl: string, methodType: string, requestJson: any): Observable<any> {
    //         const headers = new HttpHeaders().append('Content-Type', 'application/json;charset=UTF-8');
    //         if (methodType === 'post') {
    //             return this.http.post(SERVICE_URL.BASE_APP_URL + serviceUrl, requestJson, { headers });
    //         } else if (methodType === 'get') {
    //             return this.http.get(SERVICE_URL.BASE_APP_URL + serviceUrl, { headers });
    //         }
    //     }
    //   fetchLocalData(serviceUrl: string, methodType: string): Observable<any> {
    //     const headers = new HttpHeaders().append('Content-Type', 'application/json;charset=UTF-8');
    //     if (methodType === 'post') {
    //       return this.http.post( serviceUrl, { headers });
    //     } else if (methodType === 'get') {
    //       return this.http.get(serviceUrl , { headers });
    //     }
    //   }
    HttpService.prototype.fetchdata = function (url) {
        return this.http.get(url);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/meta-magic/amexio-cards-42/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map