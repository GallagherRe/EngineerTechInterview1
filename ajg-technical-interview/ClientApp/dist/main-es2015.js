(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n  <app-nav-menu></app-nav-menu>\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/counter/counter.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/counter/counter.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Counter</h1>\r\n\r\n<p>This is a simple example of an Angular component.</p>\r\n\r\n<p aria-live=\"polite\">Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button class=\"btn btn-primary\" (click)=\"incrementCounter()\">Increment</button>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Hello, world!</h1>\r\n<p>Welcome to the technical interview for the position of Software Engineer at Gallagher Re.</p>\r\n<p>This is a simple ASP.Net Core application with Angular. It includes following tabs:</p>\r\n<ul>\r\n  <li><strong>Counter:</strong> simple counter which is incremented by pressing a button</li>\r\n  <li><strong>Sanctioned Entities:</strong> table displaying sanctioned entities fetched from the server</li>\r\n</ul>\r\n<p>Having ability to modify all parts of the code and use the Internet or your own notes, please tackle the following problems:</p>\r\n<ul>\r\n  <li>Display the counter on the home page\r\n    <ul>\r\n      <li>Number on the Counter page should always match the one on the Home page</li>\r\n      <li>The count should persist when switching between the tabs</li>\r\n    </ul>\r\n  </li>\r\n  <li>Add a capability to add a sanctioned entity\r\n    <ul>\r\n      <li>Add a form to provide details of a new sanctioned entity</li>\r\n      <li>The status should use a\r\n        <a href=\"https://getbootstrap.com/docs/4.6/components/forms/#switches\" target=\"_blank\">Bootstrap switch</a>\r\n      </li>\r\n      <li>No property of the sanctioned entity can be empty</li>\r\n      <li>The code needs to ensure that there cannot be more than one entity with the same name and domicile</li>\r\n    </ul>\r\n  </li>\r\n</ul>\r\n\r\n<app-jumbotron-counter></app-jumbotron-counter>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/jumbotron-counter/jumbotron-counter.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/jumbotron-counter/jumbotron-counter.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron text-center\">\r\n    <p>Current count:</p>\r\n    <p><strong>Please include the counter here</strong></p>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-menu/nav-menu.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-menu/nav-menu.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n  <nav\r\n    class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\"\r\n  >\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">Gallagher Re: Technical Interview</a>\r\n      <button\r\n        class=\"navbar-toggler\"\r\n        type=\"button\"\r\n        data-toggle=\"collapse\"\r\n        data-target=\".navbar-collapse\"\r\n        aria-label=\"Toggle navigation\"\r\n        [attr.aria-expanded]=\"isExpanded\"\r\n        (click)=\"toggle()\"\r\n      >\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div\r\n        class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\"\r\n        [ngClass]=\"{ show: isExpanded }\"\r\n      >\r\n        <ul class=\"navbar-nav flex-grow\">\r\n          <li\r\n            class=\"nav-item\"\r\n            [routerLinkActive]=\"['link-active']\"\r\n            [routerLinkActiveOptions]=\"{ exact: true }\"\r\n          >\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/']\">Home</a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/counter']\">Counter</a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/sanctioned-entities']\">Sanctioned Entities</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sanctioned-entities/sanctioned-entities.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sanctioned-entities/sanctioned-entities.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 id=\"tableLabel\">Sanctioned Entities</h1>\r\n\r\n<p *ngIf=\"!entities\"><em>Loading...</em></p>\r\n\r\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"entities\">\r\n    <thead>\r\n    <tr>\r\n        <th>Name</th>\r\n        <th>Domicile</th>\r\n        <th>Status</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let entity of entities\">\r\n        <td>{{ entity.name }}</td>\r\n        <td>{{ entity.domicile }}</td>\r\n        <td *ngIf=\"entity.accepted\" class=\"text-success\">Accepted</td>\r\n        <td *ngIf=\"!entity.accepted\" class=\"text-danger\">Rejected</td>\r\n        <td>\r\n            <div class=\"custom-control custom-switch\">\r\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"customSwitch1\">\r\n                <label *ngIf=\"entity.accepted\" class=\"custom-control-label text-success\" for=\"customSwitch1\">Accepted</label>\r\n                <label *ngIf=\"!entity.accepted\" class=\"custom-control-label text-danger\" for=\"customSwitch1\">Rejected</label>\r\n              </div>\r\n        </td>\r\n    </tr>\r\n    </tbody>\r\n</table>\r\n");

/***/ }),

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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/nav-menu/nav-menu.component */ "./src/app/components/nav-menu/nav-menu.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/counter/counter.component */ "./src/app/components/counter/counter.component.ts");
/* harmony import */ var _components_sanctioned_entities_sanctioned_entities_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/sanctioned-entities/sanctioned-entities.component */ "./src/app/components/sanctioned-entities/sanctioned-entities.component.ts");
/* harmony import */ var _components_jumbotron_counter_jumbotron_counter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/jumbotron-counter/jumbotron-counter.component */ "./src/app/components/jumbotron-counter/jumbotron-counter.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};











let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__["NavMenuComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_8__["CounterComponent"],
            _components_sanctioned_entities_sanctioned_entities_component__WEBPACK_IMPORTED_MODULE_9__["SanctionedEntitiesComponent"],
            _components_jumbotron_counter_jumbotron_counter_component__WEBPACK_IMPORTED_MODULE_10__["JumbotronCounterComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], pathMatch: 'full' },
                { path: 'counter', component: _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_8__["CounterComponent"] },
                { path: 'sanctioned-entities', component: _components_sanctioned_entities_sanctioned_entities_component__WEBPACK_IMPORTED_MODULE_9__["SanctionedEntitiesComponent"] },
            ])
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/counter/counter.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/counter/counter.component.ts ***!
  \*********************************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let CounterComponent = class CounterComponent {
    constructor() {
        this.currentCount = 0;
    }
    incrementCounter() {
        this.currentCount++;
    }
};
CounterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-counter-component',
        template: __importDefault(__webpack_require__(/*! raw-loader!./counter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/counter/counter.component.html")).default
    })
], CounterComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let HomeComponent = class HomeComponent {
};
HomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/jumbotron-counter/jumbotron-counter.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/jumbotron-counter/jumbotron-counter.component.ts ***!
  \*****************************************************************************/
/*! exports provided: JumbotronCounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JumbotronCounterComponent", function() { return JumbotronCounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let JumbotronCounterComponent = class JumbotronCounterComponent {
};
JumbotronCounterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-jumbotron-counter',
        template: __importDefault(__webpack_require__(/*! raw-loader!./jumbotron-counter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/jumbotron-counter/jumbotron-counter.component.html")).default
    })
], JumbotronCounterComponent);



/***/ }),

/***/ "./src/app/components/nav-menu/nav-menu.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/nav-menu/nav-menu.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a.navbar-brand {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYtbWVudS9uYXYtbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRSw4Q0FBOEM7QUFDaEQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdi1tZW51L25hdi1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhLm5hdmJhci1icmFuZCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG59XHJcblxyXG5odG1sIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgaHRtbCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYm94LXNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogMCAuMjVyZW0gLjc1cmVtIHJnYmEoMCwgMCwgMCwgLjA1KTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/nav-menu/nav-menu.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/nav-menu/nav-menu.component.ts ***!
  \***********************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let NavMenuComponent = class NavMenuComponent {
    constructor() {
        this.isExpanded = false;
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
};
NavMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-nav-menu',
        template: __importDefault(__webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-menu/nav-menu.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/components/nav-menu/nav-menu.component.css")).default]
    })
], NavMenuComponent);



/***/ }),

/***/ "./src/app/components/sanctioned-entities/sanctioned-entities.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/sanctioned-entities/sanctioned-entities.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SanctionedEntitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanctionedEntitiesComponent", function() { return SanctionedEntitiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_sanctioned_entities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/sanctioned-entities.service */ "./src/app/services/sanctioned-entities.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let SanctionedEntitiesComponent = class SanctionedEntitiesComponent {
    constructor(entitiesService) {
        this.entitiesService = entitiesService;
        entitiesService.getSanctionedEntities().subscribe(entities => {
            this.entities = entities;
        });
    }
};
SanctionedEntitiesComponent.ctorParameters = () => [
    { type: _services_sanctioned_entities_service__WEBPACK_IMPORTED_MODULE_1__["SanctionedEntitiesService"] }
];
SanctionedEntitiesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-sanctioned-entities',
        template: __importDefault(__webpack_require__(/*! raw-loader!./sanctioned-entities.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sanctioned-entities/sanctioned-entities.component.html")).default
    }),
    __metadata("design:paramtypes", [_services_sanctioned_entities_service__WEBPACK_IMPORTED_MODULE_1__["SanctionedEntitiesService"]])
], SanctionedEntitiesComponent);



/***/ }),

/***/ "./src/app/services/sanctioned-entities.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/sanctioned-entities.service.ts ***!
  \*********************************************************/
/*! exports provided: SanctionedEntitiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanctionedEntitiesService", function() { return SanctionedEntitiesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let SanctionedEntitiesService = class SanctionedEntitiesService {
    constructor(http, baseUrl) {
        this.http = http;
        this.path = 'sanctioned-entities';
        this.apiUrl = baseUrl + 'api/';
    }
    getSanctionedEntities() {
        const url = this.apiUrl + this.path;
        return this.http.get(url);
    }
    addSanctionedEntity(sanctionedEntity) {
        const url = this.apiUrl + this.path;
        return this.http.post(url, sanctionedEntity);
    }
};
SanctionedEntitiesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
SanctionedEntitiesService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
], SanctionedEntitiesService);



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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
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
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\arunramamurthy\source\repos\GallagherReTechTest\ajg-technical-interview\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map