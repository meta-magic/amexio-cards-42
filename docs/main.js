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

module.exports = "<div class=\"navlogo\">\n<amexio-nav [logo]=\"'assets/images/logos/cardslogo.jpg'\" [title]=\"'Cards.com'\"\n [transparent]=\"dtsService.transparentFlag\"  [enable-side-nav-position]=\"false\" (onNavTitleClick)=\"onCardsclick($event)\">\n    <!-- <amexio-nav-item position-left [type]=\"'link'\" [icon]=\"'fa fa-angle-double-up'\" [title]=\"'Cards.com'\" (onNavItemClick)=\"onCardsclick($event)\">\n    </amexio-nav-item> -->\n    <amexio-nav-item position-right [type]=\"'link'\" [icon]=\"'fa fa-user'\" [title]=\"'Login'\" (onNavItemClick)=\"onLoginLinkClick($event)\">\n    </amexio-nav-item>\n</amexio-nav>\n</div>\n<!-- <app-authentication [showWindow]=\"auth_Service.showWindow\"></app-authentication> -->\n<router-outlet></router-outlet>"

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
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.onCardsclick = function () {
        this.route.navigate(['/app-buy']);
    };
    AppComponent.prototype.onLoginLinkClick = function () {
        //  this.auth_Service.showWindow=true;
        this.route.navigate(['login']);
        this.auth_Service.showLogin = true;
        this.auth_Service.showOTPWindow = false;
        this.auth_Service.showregisterWindow = false;
        this.auth_Service.showSignInWindow = false;
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
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ "./src/app/components/sign-in/sign-in.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_buy_buy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/buy/buy.component */ "./src/app/components/buy/buy.component.ts");
/* harmony import */ var _components_sell_sell_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sell/sell.component */ "./src/app/components/sell/sell.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_otp_verification_otp_verification_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/otp-verification/otp-verification.component */ "./src/app/components/otp-verification/otp-verification.component.ts");
/* harmony import */ var _components_searchbox_searchbox_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/searchbox/searchbox.component */ "./src/app/components/searchbox/searchbox.component.ts");
/* harmony import */ var _components_rent_rent_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/rent/rent.component */ "./src/app/components/rent/rent.component.ts");
/* harmony import */ var _components_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/authentication/authentication.component */ "./src/app/components/authentication/authentication.component.ts");
/* harmony import */ var _components_property_details_property_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/property-details/property-details.component */ "./src/app/components/property-details/property-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    {
        path: '', component: _components_buy_buy_component__WEBPACK_IMPORTED_MODULE_9__["BuyComponent"]
    },
    {
        path: 'app-buy',
        component: _components_buy_buy_component__WEBPACK_IMPORTED_MODULE_9__["BuyComponent"]
    },
    {
        path: 'app-sell',
        component: _components_sell_sell_component__WEBPACK_IMPORTED_MODULE_10__["SellComponent"]
    },
    {
        path: 'app-rent',
        component: _components_rent_rent_component__WEBPACK_IMPORTED_MODULE_14__["RentComponent"]
    },
    {
        path: 'app-property-details/:id',
        component: _components_property_details_property_details_component__WEBPACK_IMPORTED_MODULE_16__["PropertyDetailsComponent"]
    },
    {
        path: 'login',
        component: _components_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_15__["AuthenticationComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_5__["UserRegistrationComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__["SignInComponent"],
                _components_buy_buy_component__WEBPACK_IMPORTED_MODULE_9__["BuyComponent"],
                _components_sell_sell_component__WEBPACK_IMPORTED_MODULE_10__["SellComponent"],
                _components_otp_verification_otp_verification_component__WEBPACK_IMPORTED_MODULE_12__["OtpVerificationComponent"],
                _components_searchbox_searchbox_component__WEBPACK_IMPORTED_MODULE_13__["SearchboxComponent"],
                _components_rent_rent_component__WEBPACK_IMPORTED_MODULE_14__["RentComponent"],
                _components_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_15__["AuthenticationComponent"],
                _components_property_details_property_details_component__WEBPACK_IMPORTED_MODULE_16__["PropertyDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes, { useHash: true }), amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_4__["AmexioWidgetModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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

module.exports = " <div>\n  <img class=\"pic-style\">\n  <amexio-row>\n\n    <amexio-column size=\"12\" style=\"padding-top:6%\">\n\n      <amexio-layout-columns class=\"horizontal-position\" [orientation]=\"'horizontal'\" [border]=\"false\" [alignment]=\"'center'\">\n        <amexio-layout-item>\n\n          <amexio-layout-columns [fit]=\"true\" [border]=\"false\" [orientation]=\"'vertical'\" [alignment]=\"'center'\">\n            <amexio-layout-item>\n\n              <!-- <div class=\"main-class\"> -->\n                <amexio-row>\n                  <amexio-column size=\"12\" [fit]=\"true\">\n                   <app-login [showLogin]=\"auth_Service.showLogin\"></app-login>\n    <app-user-registration [user-model]=\"userModel\" [showregisterWindow]=\"auth_Service.showregisterWindow\"></app-user-registration>\n    <app-sign-in [login-model]=\"loginModel\" [showSignInWindow]=\"auth_Service.showSignInWindow\"></app-sign-in>\n    <app-otp-verification [showOTPWindow]=\"auth_Service.showOTPWindow\"></app-otp-verification>\n\n                  </amexio-column>\n\n                </amexio-row>\n              <!-- </div> -->\n   </amexio-layout-item>\n          </amexio-layout-columns>\n        </amexio-layout-item>\n      </amexio-layout-columns>\n\n\n\n    </amexio-column>\n  </amexio-row>\n\n</div>"

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
        this.auth_Service.showLogin = true;
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

/***/ "./src/app/components/buy/buy.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/buy/buy.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/buy/buy.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/buy/buy.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- <div [ngStyle]=\"{'padding-top':250+'px'}\">  -->\n   <div>\n  <img src=\"assets/images/living-room.jpg\" class=\"bg\">\n  <amexio-row>\n    <amexio-column size=\"12\" style=\"padding-top:15%\">\n      \n    </amexio-column>\n  </amexio-row>\n  <amexio-layout-columns [orientation]=\"'vertical'\" [border]=\"false\">\n      <amexio-layout-item [fit]=\"true\" *ngFor=\"let alignment of ['center']\">\n        <amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"alignment\">\n          <amexio-layout-item>\n           <amexio-label size=\"large-bold\">\n             Properties for Buy \n           </amexio-label>\n          </amexio-layout-item>\n        </amexio-layout-columns>\n      </amexio-layout-item>\n    </amexio-layout-columns>\n     <amexio-layout-columns [orientation]=\"'vertical'\" [border]=\"false\" [alignment]=\"'center'\">\n      <amexio-layout-item [fit]=\"true\" >\n       <amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"'center'\">\n          <amexio-layout-item>\n           <app-searchbox [search-model]=\"searchModel\"></app-searchbox>\n          </amexio-layout-item>\n        </amexio-layout-columns>\n      </amexio-layout-item>\n    </amexio-layout-columns>\n   </div>\n<!-- </div> -->\n"

/***/ }),

/***/ "./src/app/components/buy/buy.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/buy/buy.component.ts ***!
  \*************************************************/
/*! exports provided: BuyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyComponent", function() { return BuyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_search_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/search.model */ "./src/app/models/search.model.ts");
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



var BuyComponent = /** @class */ (function () {
    function BuyComponent(dtsService) {
        this.dtsService = dtsService;
        this.searchModel = new _models_search_model__WEBPACK_IMPORTED_MODULE_1__["SearchModel"]();
        this.searchModel.type = 'buy';
        this.dtsService.transparentFlag = true;
    }
    BuyComponent.prototype.ngOnInit = function () {
    };
    BuyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buy',
            template: __webpack_require__(/*! ./buy.component.html */ "./src/app/components/buy/buy.component.html"),
            styles: [__webpack_require__(/*! ./buy.component.css */ "./src/app/components/buy/buy.component.css")]
        }),
        __metadata("design:paramtypes", [_service_datatransfer_service__WEBPACK_IMPORTED_MODULE_2__["DatatransferService"]])
    ], BuyComponent);
    return BuyComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<amexio-card [show]=\"showLogin\" [header]=\"false\" [header-align]=\"'left'\" [footer]=\"true\" [footer-align]=\"'center'\">\n\n  <amexio-body>\n    <amexio-layout-columns [orientation]=\"'vertical'\" [border]=\"false\">\n      <amexio-layout-item [fit]=\"true\" *ngFor=\"let alignment of ['center']\">\n        <amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"alignment\">\n          <amexio-layout-item>\n            <amexio-image [path]=\"'assets/images/building.png'\" height=\"100px\"  width=\"100px\"  [filter]=\"'round'\" [title-position]=\"'centered'\">\n            </amexio-image>\n          </amexio-layout-item>\n        </amexio-layout-columns>\n        <amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"alignment\">\n          <amexio-layout-item>\n            <amexio-label size=\"medium-bold\">Your Keys Await</amexio-label>\n          </amexio-layout-item>\n        </amexio-layout-columns>\n        <amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"alignment\">\n          <amexio-layout-item>\n            <amexio-label size=\"small-bold\" font-color=\"gray\">\n              Secure, seamless search starts here</amexio-label>\n          </amexio-layout-item>\n        </amexio-layout-columns>\n      </amexio-layout-item>\n    </amexio-layout-columns>\n     <amexio-row>\n       <amexio-column size=\"12\">\n      <amexio-layout-columns [border]=\"false\" [fit]=\"true\" [alignment]=\"'space-between'\"\n                              [orientation]=\"'horizontal'\">\n                              <amexio-layout-item>\n                                <amexio-login-social [style-type]=\"'circle'\" [api-key]=\"'743009515877-3rfp9u0b2iq95m2o2921kc3hecaamc3e.apps.googleusercontent.com'\"\n                                  [type]=\"'google'\"  (onLogin)=\"onGoogleClick($event)\">\n                                </amexio-login-social>\n                              </amexio-layout-item>\n                              <amexio-layout-item>\n                                <amexio-login-social [style-type]=\"'circle'\" [api-key]=\"'320512778592240'\" [type]=\"'facebook'\" (onLogin)=\"onFacebookClick($event)\">\n                                </amexio-login-social>\n                              </amexio-layout-item>\n                              <amexio-layout-item>\n                                <amexio-login-social [style-type]=\"'circle'\" [api-key]=\"'81wzvqnx8wtvmg'\" [type]=\"'linkedin'\" (onLogin)=\"onLinkedinClick($event)\">\n                                </amexio-login-social>\n                              </amexio-layout-item>\n                            </amexio-layout-columns>\n       </amexio-column>\n     </amexio-row>\n  \n  </amexio-body>\n  <amexio-action>\n    <amexio-row>\n      <amexio-column size=\"6\" [fit]=\"true\">\n        <amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"'center'\">\n          <amexio-layout-item [fit]=\"true\">\n            <amexio-button  [size]=\"'default'\" [icon]=\"'fa fa-sign-in'\" [label]=\"'Sign in'\" (onClick)=\"onSignInClick($event)\" [type]=\"'primary'\" [tooltip]=\"'Sign in'\"></amexio-button>\n          </amexio-layout-item>\n        </amexio-layout-columns>\n      </amexio-column>\n      <amexio-column size=\"6\" [fit]=\"true\">\n        <amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"'center'\">\n          <amexio-layout-item [fit]=\"true\">\n            <amexio-button [size]=\"'default'\" [icon]=\"'fa fa-user-plus'\" [label]=\"'Register'\" (onClick)=\"onRegisterClick($event)\" [type]=\"'primary'\" [tooltip]=\"'Register'\"></amexio-button>\n          </amexio-layout-item>\n        </amexio-layout-columns>\n      </amexio-column>\n    </amexio-row>\n  </amexio-action>\n</amexio-card>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/authentication.service */ "./src/app/service/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth_Service) {
        this.auth_Service = auth_Service;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSignInClick = function (event) {
        this.auth_Service.showOTPWindow = false;
        this.auth_Service.showregisterWindow = false;
        this.auth_Service.showLogin = false;
        this.auth_Service.showSignInWindow = true;
    };
    LoginComponent.prototype.onRegisterClick = function (event) {
        this.auth_Service.showOTPWindow = false;
        this.auth_Service.showregisterWindow = true;
        this.auth_Service.showLogin = false;
        this.auth_Service.showSignInWindow = false;
    };
    LoginComponent.prototype.onLoginClick = function () {
    };
    LoginComponent.prototype.onFacebookClick = function (event) {
        console.log(event);
    };
    LoginComponent.prototype.onGoogleClick = function (event) {
        console.log(event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], LoginComponent.prototype, "showLogin", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_service_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
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

module.exports = "\n\n\n\n\n<amexio-card\n  [header]=\"false\"\n  [header-align]=\"'left'\"\n  [footer]=\"true\"\n  [footer-align]=\"'center'\"\n  [show]=\"showOTPWindow\">\n\n    <amexio-body>\n    <amexio-layout-columns [orientation]=\"'vertical'\" [border]=\"false\">\n      <amexio-layout-item [fit]=\"true\" *ngFor=\"let alignment of ['center']\">\n        <amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"alignment\">\n          <amexio-layout-item>\n            <amexio-image [path]=\"'assets/images/building.png'\" height=\"100px\"  width=\"100px\"  [filter]=\"'round'\" [title-position]=\"'centered'\">\n            </amexio-image>\n          </amexio-layout-item>\n        </amexio-layout-columns>\n      </amexio-layout-item>\n    </amexio-layout-columns>\n<!--     \n    <amexio-row>\n      <amexio-column [size]=\"12\">\n <amexio-text-input name=\"otp\" [field-label]=\"'OTP'\" [place-holder]=\"'Enter OTP'\" [(ngModel)]=\"oTP\">\n                            </amexio-text-input>\n      </amexio-column>\n    </amexio-row> -->\n\n        <amexio-layout-columns [border]=\"false\" [orientation]=\"'vertical'\" [alignment]=\"'center'\">\n            <amexio-layout-item>\n                <amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"'center'\">\n                    <amexio-layout-item>\n                        <amexio-text-input name=\"otp\" [field-label]=\"'OTP'\" [place-holder]=\"'Enter OTP'\" [(ngModel)]=\"oTP\">\n                            </amexio-text-input>\n                    </amexio-layout-item>\n                </amexio-layout-columns>\n            </amexio-layout-item>\n        </amexio-layout-columns>\n    </amexio-body>\n    <amexio-action>\n         <amexio-button  [size]=\"'default'\" [type]=\"'secondary'\" [icon]=\"'fa fa-times'\" (onClick)=\"onCancel()\" label=\"Cancel\"></amexio-button>\n         <amexio-button  [size]=\"'default'\" [type]=\"'primary'\" [icon]=\"'fa fa-check'\" (onClick)=\"onVerify()\" label=\"Verify\"></amexio-button>\n         \n    </amexio-action>\n</amexio-card>"

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
    function OtpVerificationComponent(route) {
        this.route = route;
        this.oTP = '';
    }
    OtpVerificationComponent.prototype.ngOnInit = function () {
    };
    OtpVerificationComponent.prototype.onVerify = function () {
    };
    OtpVerificationComponent.prototype.onCancel = function () {
        this.route.navigate(['/app-buy']);
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
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], OtpVerificationComponent);
    return OtpVerificationComponent;
}());



/***/ }),

/***/ "./src/app/components/property-details/property-details.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/property-details/property-details.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/property-details/property-details.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/property-details/property-details.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div [ngStyle]=\"{'padding-top':65+'px'}\">  \n<amexio-row>\n  <amexio-column size =\"4\" *ngFor=\"let property of propertyDetails\">\n    \n<amexio-card-ce>\n    \n    <amexio-image width=\"100%\" height=\"180px\" [path]=\"property.image\"></amexio-image>\n    <amexio-body-ce>\n        <amexio-badge [absolute]=\"true\" [background]=\"'#e74c3c'\" [color]=\"'white'\" [top]=\"'-44px'\" [left]=\"'0px'\">\n            <amexio-label>Photos</amexio-label>\n        </amexio-badge>\n         <div style=\"cursor: pointer\">\n         <amexio-row >\n        <amexio-column [size]=\"12\">\n          <table>\n            <tr>\n              <td><amexio-image [icon-class]=\"'fa fa-inr fa-lg'\"></amexio-image> &nbsp;<amexio-label size=\"medium-bold\">{{property.price}} </amexio-label></td>\n            </tr>\n            <tr>\n              <td><amexio-label size=\"medium-bold\">{{property.property}} </amexio-label> </td>\n            </tr>\n             <tr>\n              <td><amexio-label>{{property.address}}. </amexio-label> </td>\n            </tr>\n             <tr>\n              <td><amexio-label size=\"small\">{{property.description}} </amexio-label> </td>\n            </tr>\n            \n          </table>\n        </amexio-column>\n        <amexio-column size =\"2\">\n          \n        </amexio-column>\n      </amexio-row>\n      </div>\n    </amexio-body-ce>\n    <amexio-action-ce [align]=\"'space-between'\" [border-top]=\"true\">\n      <amexio-label>{{property.agentName}} </amexio-label> \n         <amexio-button [size]=\"'default'\" [icon]=\"'fa fa-money'\" [label]=\"'Buy Now'\" [type]=\"'primary'\" [tooltip]=\"'Buy Now'\">\n        </amexio-button>\n    </amexio-action-ce>\n</amexio-card-ce>\n  \n  </amexio-column>\n  \n</amexio-row>\n          \n  </div> \n\n"

/***/ }),

/***/ "./src/app/components/property-details/property-details.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/property-details/property-details.component.ts ***!
  \***************************************************************************/
/*! exports provided: PropertyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyDetailsComponent", function() { return PropertyDetailsComponent; });
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




var PropertyDetailsComponent = /** @class */ (function () {
    function PropertyDetailsComponent(route, router, dtsService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.dtsService = dtsService;
        this.propertyDetails = [];
        this.dtsService.transparentFlag = false;
        console.log('properties');
        this.route.params.subscribe(function (params) {
            console.log(params);
            _this.id = params.id;
        });
        if (this.id == "1") {
            this.propertyDetails = [
                {
                    "address": "south gate,magarapatta",
                    "price": "80 Lac",
                    "image": "assets/images/apartment1.jpeg",
                    "property": "2 BHK Apartment",
                    "description": "It is a magnanimous residency, comprising of well planned homes"
                },
                {
                    "address": "Handewadi,hadapser",
                    "price": "25 Lac",
                    "image": "assets/images/apartment2.jpeg",
                    "property": "1 BHK Apartment",
                    "description": "It is a magnanimous residency, comprising of well planned homes"
                },
                {
                    "address": "Bhosale Nagar,hadapser",
                    "price": "36 Lac",
                    "image": "assets/images/apartment3.jpeg",
                    "property": "1 BHK Apartment",
                    "description": "It is indeed a perfect dwelling and a wise investment"
                },
                {
                    "address": "Sasane Nagar,hadapser",
                    "price": "50 Lac",
                    "image": "assets/images/apartment4.jpeg",
                    "property": "2 BHK Apartment",
                    "description": "It is indeed a perfect dwelling and a wise investment"
                },
                {
                    "address": "Bhosale Nagar,hadapser",
                    "price": "65 Lac",
                    "image": "assets/images/apartment5.jpeg",
                    "property": "2 BHK Apartment",
                    "description": "It is indeed a perfect dwelling and a wise investment"
                },
                {
                    "address": "Amanora ,hadapser",
                    "price": "48 Lac",
                    "image": "assets/images/apartment6.jpeg",
                    "property": "1 BHK Apartment",
                    "description": "It is indeed a perfect dwelling and a wise investment"
                }
            ];
        }
        else if (this.id == "2") {
            this.propertyDetails = [
                {
                    "address": "viman nagar",
                    "price": "80 Lac",
                    "image": "assets/images/apartment1.jpeg",
                    "property": "2 BHK Apartment",
                    "description": "It is a magnanimous residency, comprising of well planned homes"
                },
                {
                    "address": "Near Finix Mall,Viman Nagar",
                    "price": "25 Lac",
                    "image": "assets/images/apartment2.jpeg",
                    "property": "1 BHK Apartment",
                    "description": "It is a magnanimous residency, comprising of well planned homes"
                },
                {
                    "address": "Air force campus",
                    "price": "36 Lac",
                    "image": "assets/images/apartment3.jpeg",
                    "property": "1 BHK Apartment",
                    "description": "It is a magnanimous residency, comprising of well planned homes"
                }
            ];
        }
        else if (this.id == "3") {
            this.propertyDetails = [
                {
                    "address": "Swargate,pune",
                    "price": "42,000",
                    "image": "assets/images/lg.jpeg",
                    "property": "LG Plasma",
                    "description": "LG Plasma tv 43Inch with 2 Year Warranty by Zopper"
                },
                {
                    "address": "Magarpatta city",
                    "price": "28,000",
                    "image": "assets/images/Malaysia.jpeg",
                    "property": "Malaysia sealed box LED TV",
                    "description": "Malaysia sealed box 55 4k Smart Android LED TV for sale"
                },
                {
                    "address": "Pune",
                    "price": "30,000",
                    "image": "assets/images/micromax.png",
                    "property": "Micromax 43T8100MHD / 43T4500MHD",
                    "description": "Micromax 43T8100MHD / 43T4500MHD 43 inch HD Ready TV"
                }
            ];
        }
    }
    PropertyDetailsComponent.prototype.ngOnInit = function () {
    };
    PropertyDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-property-details',
            template: __webpack_require__(/*! ./property-details.component.html */ "./src/app/components/property-details/property-details.component.html"),
            styles: [__webpack_require__(/*! ./property-details.component.css */ "./src/app/components/property-details/property-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _service_datatransfer_service__WEBPACK_IMPORTED_MODULE_2__["DatatransferService"]])
    ], PropertyDetailsComponent);
    return PropertyDetailsComponent;
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

module.exports = "<!-- <amexio-btn-group [size]=\"'small'\"> -->\n<amexio-button\n    [label]=\"'Buy'\"\n    [type]=\"'theme-color'\"\n    [tooltip]=\"'toolTip'\"\n    [icon]=\"'icon'\"\n    [disabled]=\"false\"\n    [size]=\"'small'\"\n    (onClick)=\"onBuyClick($event)\">\n</amexio-button>\n<amexio-button\n    [label]=\"'Sell'\"\n    [type]=\"'theme-color'\"\n    [tooltip]=\"'toolTip'\"\n    [icon]=\"'icon'\"\n    [disabled]=\"true\"\n    [size]=\"'small'\"\n    (onClick)=\"onRent()\">\n</amexio-button>\n <!-- </amexio-btn-group> -->\n <div class=\"localsearch\">\n<amexio-text-input [field-label]=\"'label'\" name =\"name\"\n[has-label]=\"false\"\n   [place-holder]=\"'Enter Data'\"\n   [(ngModel)]=\"searchModel.searchData\"\n   [icon-feedback]=\"true\">\n</amexio-text-input>\n<amexio-button\n    [label]=\"'Search'\"\n    [type]=\"'theme-color'\"\n    [badge]=\"badge\"\n    [tooltip]=\"'toolTip'\"\n    [icon]=\"'icon'\"\n    [disabled]=\"false\"\n    [size]=\"'default'\"\n    [loading]=\"false\"\n    [block]=\"false\"\n    (onClick)=\"onSearchButtonClick($event)\">\n</amexio-button>\n</div> \n"

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
    function SearchboxComponent(route) {
        this.route = route;
    }
    SearchboxComponent.prototype.ngOnInit = function () {
    };
    SearchboxComponent.prototype.onBuyClick = function () {
        debugger;
        this.route.navigate(['/app-buy']);
    };
    SearchboxComponent.prototype.onSearchButtonClick = function () {
        console.log('searchModel', this.searchModel);
        if (this.searchModel.searchData == "hadapser") {
            this.id = 1;
        }
        else if (this.searchModel.searchData == "viman nagar") {
            this.id = 2;
        }
        else if (this.searchModel.searchData = "tv") {
            this.id = 3;
        }
        this.route.navigate(['/app-property-details', this.id]);
    };
    SearchboxComponent.prototype.onRent = function () {
        debugger;
        this.route.navigate(['/app-rent']);
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
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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

module.exports = " <app-searchbox></app-searchbox>"

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
    function SellComponent() {
    }
    SellComponent.prototype.ngOnInit = function () {
    };
    SellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sell',
            template: __webpack_require__(/*! ./sell.component.html */ "./src/app/components/sell/sell.component.html"),
            styles: [__webpack_require__(/*! ./sell.component.css */ "./src/app/components/sell/sell.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<div [formGroup]=\"signInGroup\">\n<amexio-card [header]=\"false\" [header-align]=\"'left'\" [footer]=\"true\" [footer-align]=\"'center'\" [show]=\"showSignInWindow\">\n  <amexio-body>\n     <amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"right\">\n          <amexio-layout-item>\n            <amexio-image style=\"cursor: pointer;\"  [icon-class]=\"'fa fa-arrow-left fa-lg'\" [tooltip]=\"'Back'\" (onClick)=\"onBack()\"></amexio-image>\n          </amexio-layout-item>\n        </amexio-layout-columns>\n    <amexio-layout-columns [orientation]=\"'vertical'\" [border]=\"false\">\n      <amexio-layout-item [fit]=\"true\" *ngFor=\"let alignment of ['center']\">\n        <amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"alignment\">\n          <amexio-layout-item>\n            <amexio-image [path]=\"'assets/images/building.png'\" height=\"100px\"  width=\"100px\"  [filter]=\"'round'\" [title-position]=\"'centered'\">\n            </amexio-image>\n          </amexio-layout-item>\n        </amexio-layout-columns>\n        <amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"alignment\">\n          <amexio-layout-item>\n            <amexio-label size=\"medium-bold\">Login to your Account</amexio-label>\n          </amexio-layout-item>\n        </amexio-layout-columns>\n      </amexio-layout-item>\n    </amexio-layout-columns>\n    <amexio-row>\n      <amexio-column [size]=\"12\">\n        <amexio-number-input formControlName=\"Phone\" name=\"name\" field-label=\"Phone\" place-holder=\"Enter Name\" [(ngModel)]=\"loginModel.phone\">\n        </amexio-number-input>\n        <amexio-password-input formControlName=\"Password\" [enable-popover]=\"true\" [field-label]=\"'Password '\" name=\"password\" [place-holder]=\"'Enter Password'\"\n          [allow-blank]=\"false\" [error-msg]=\"'Please enter password'\" [min-length]=\"6\" [min-error-msg]=\"'Minimum 6 char required'\"\n          [max-length]=\"32\" [max-error-msg]=\"'Maximum 32 char allowed'\" [icon-feedback]=\"true\" [(ngModel)]=\"loginModel.password\">\n        </amexio-password-input>\n      </amexio-column>\n    </amexio-row>\n  </amexio-body>\n  <amexio-action>\n  \n  <!-- <amexio-button  [size]=\"'medium'\" [type]=\"'primary'\" (onClick)=\"onBack()\" label=\"Back\"></amexio-button> -->\n    <amexio-button   [size]=\"'default'\" [type]=\"'secondary'\" [icon]=\"'fa fa-times'\" (onClick)=\"onCancel()\" label=\"Cancel\"></amexio-button>\n    <amexio-button [disabled]=\"!signInGroup.valid\"  [size]=\"'default'\" [icon]=\"'fa fa-sign-in'\" [type]=\"'primary'\" (onClick)=\"onSignInClick()\" label=\"Login\"></amexio-button>\n  </amexio-action>\n</amexio-card>\n</div>"

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





var SignInComponent = /** @class */ (function () {
    function SignInComponent(auth_Service, route, fb) {
        this.auth_Service = auth_Service;
        this.route = route;
        this.fb = fb;
        this.loginModel = new _models_login_model__WEBPACK_IMPORTED_MODULE_1__["LoginModel"]();
    }
    SignInComponent.prototype.ngOnInit = function () {
        this.validateSigninform();
    };
    SignInComponent.prototype.validateSigninform = function () {
        this.signInGroup = this.fb.group({
            Phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10)]],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    };
    SignInComponent.prototype.onSignInClick = function () {
        console.log('loginmodel', this.loginModel);
    };
    SignInComponent.prototype.onCancel = function () {
        this.route.navigate(['/app-buy']);
    };
    SignInComponent.prototype.onBack = function () {
        this.auth_Service.showOTPWindow = false;
        this.auth_Service.showregisterWindow = false;
        this.auth_Service.showLogin = true;
        this.auth_Service.showSignInWindow = false;
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
        __metadata("design:paramtypes", [src_app_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
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

module.exports = "<div [formGroup]=\"userRegistrationGroup\">\n<amexio-card [header]=\"false\" [header-align]=\"'left'\" [footer]=\"true\" [footer-align]=\"'center'\" [show]=\"showregisterWindow\">\n  <amexio-body>\n    <amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"right\">\n          <amexio-layout-item>\n            <amexio-image style=\"cursor: pointer;\" [icon-class]=\"'fa fa-arrow-left fa-lg'\" [tooltip]=\"'Back'\" (onClick)=\"onBack()\"></amexio-image>\n          </amexio-layout-item>\n        </amexio-layout-columns>\n    <amexio-layout-columns [orientation]=\"'vertical'\" [border]=\"false\">\n      <amexio-layout-item [fit]=\"true\" *ngFor=\"let alignment of ['center']\">\n        <amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"alignment\">\n          <amexio-layout-item>\n            <amexio-image [path]=\"'assets/images/building.png'\" height=\"80px\"  width=\"80px\"  [filter]=\"'round'\" [title-position]=\"'centered'\">\n            </amexio-image>\n          </amexio-layout-item>\n        </amexio-layout-columns>\n        <amexio-layout-columns [border]=\"false\" [orientation]=\"'horizontal'\" [alignment]=\"alignment\">\n          <amexio-layout-item>\n            <amexio-label size=\"medium-bold\">Your Keys Await</amexio-label>\n          </amexio-layout-item>\n        </amexio-layout-columns>\n      </amexio-layout-item>\n    </amexio-layout-columns>\n    <amexio-row>\n      <amexio-column size=\"12\" [fit]=\"true\">\n        <amexio-text-input formControlName=\"Name\" field-label=\"Name\" place-holder=\"Enter Name\" [(ngModel)]=\"userModel.name\">\n        </amexio-text-input>\n        <amexio-number-input  formControlName=\"Phone\"  [field-label]=\"'Phone'\" [place-holder]=\"'Enter phone Number'\" [(ngModel)]=\"userModel.phone\">\n        </amexio-number-input>\n        <amexio-password-input   formControlName=\"Password\" [enable-popover]=\"true\" [field-label]=\"'Password'\" [place-holder]=\"'Enter Password'\"\n          [allow-blank]=\"false\" [error-msg]=\"'Please enter password'\" [min-length]=\"6\" [min-error-msg]=\"'Minimum 6 char required'\"\n          [max-length]=\"32\" [max-error-msg]=\"'Maximum 32 char allowed'\" [icon-feedback]=\"true\" [(ngModel)]=\"userModel.password\">\n        </amexio-password-input>\n      </amexio-column>\n    </amexio-row>\n  </amexio-body>\n  <amexio-action>\n    <!-- <amexio-button  [size]=\"'medium'\" [type]=\"'primary'\" (onClick)=\"onBack()\" label=\"Back\"></amexio-button> -->\n      <amexio-button   [size]=\"'default'\" [type]=\"'secondary'\" [icon]=\"'fa fa-times'\" (onClick)=\"onCancel()\" label=\"Cancel\"></amexio-button>\n    <amexio-button [disabled]=\"!userRegistrationGroup.valid\"  [size]=\"'default'\" [icon]=\"'fa fa-user-plus'\" [type]=\"'primary'\" (onClick)=\"onRegister()\" label=\"Register\"></amexio-button>\n  </amexio-action>\n</amexio-card>\n</div>"

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
            Phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10)]],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
    };
    UserRegistrationComponent.prototype.onRegister = function () {
        console.log('userModel', this.userModel);
        this.auth_Service.showOTPWindow = true;
        this.auth_Service.showregisterWindow = false;
        this.auth_Service.showLogin = false;
        this.auth_Service.showSignInWindow = false;
    };
    UserRegistrationComponent.prototype.onCancel = function () {
        this.route.navigate(['/app-buy']);
    };
    UserRegistrationComponent.prototype.onBack = function () {
        this.auth_Service.showOTPWindow = false;
        this.auth_Service.showregisterWindow = false;
        this.auth_Service.showLogin = true;
        this.auth_Service.showSignInWindow = false;
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
    }
    return SearchModel;
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
    function DatatransferService() {
    }
    DatatransferService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DatatransferService);
    return DatatransferService;
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