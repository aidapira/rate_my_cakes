(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form (submit)=\"handleSubmit()\">\n    <div>\n        <label>Cake Name:</label>\n        <input type=\"text\" name=\"cakeName\" [(ngModel)]=\"newCake.cakeName\">\n    </div>\n    <div>\n        <label>Image URL:</label>\n        <input type=\"text\" name=\"imgUrl\" [(ngModel)]=\"newCake.imgUrl\">\n    </div>\n    <div>\n        <label>Price:</label>\n        <input type=\"number\" name=\"price\" [(ngModel)]=\"newCake.price\">\n    </div>\n    <button>Submit</button>\n</form>\n\n\n<table style=\"width: 100%\">\n    <thead>\n        <tr>\n            <th>Cake</th>\n            <th>First name</th>\n            <th>Last name</th>\n            <th>Email</th>\n            <th>Phone number</th>\n            <th>Address</th>\n            <th>Apartment</th>\n            <th>City</th>\n            <th>Zip Code</th>\n        </tr>\n    </thead>\n    <tbody>\n        <ng-container *ngFor=\"let cake of cakes\">\n            <tr *ngFor=\"let order of cake.orders\">\n                <td>{{cake.cakeName}}</td>\n                <td>{{order.firstname}}</td>\n                <td>{{order.lastname}}</td>\n                <td>{{order.email}}</td>\n                <td>{{order.phone}}</td>\n                <td>{{order.address}}</td>\n                <td>{{order.apartment}}</td>\n                <td>{{order.city}}</td>\n                <td>{{order.zipcode}}</td>    \n            </tr>\n        </ng-container>\n    </tbody>\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/buy-cake/buy-cake.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/buy-cake/buy-cake.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form (submit)=\"handlePurchase(cake._id)\">\n    <div>\n        <button class=\"btn btn-light\">Buy Cake!</button>\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cake-review/cake-review.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cake-review/cake-review.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form (submit)=\"handleRate(cake._id)\" style=\"box-sizing: unset;\">\n  <div>\n    <select [(ngModel)]=\"newReview.rating\" name=\"rating\">\n      <option value=\"1\">1</option>\n      <option value=\"2\">2</option>\n      <option value=\"3\">3</option>\n      <option value=\"4\">4</option>\n      <option value=\"5\">5</option>\n    </select>\n    <input style=\"width:59%\" [(ngModel)]=\"newReview.comment\" type=\"text\" name=\"comment\">\n    <button class=\"btn btn-light\">Rate!</button>\n  </div>\n</form>\n\n<!-- <p style=\"padding-left: 34px;\">Average Rating:{{avgRating}}</p> -->\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout-cake/checkout-cake.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout-cake/checkout-cake.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid pl-0 pr-0 bg\" style=\"height: 100%\">\n    <div class=\"row header\" style=\"height: 25%\">\n        <div class=\"col col-md-2 mt-3\" style=\"padding-left: 6.5rem\">\n            <img src=\"../../assets/logo.png\" class=\"img-fluid d-inline-block\" style=\"max-width: 84%;\" alt=\"logo\">\n        </div>\n        <div class=\"col-md-auto\" style=\"width: 65%; margin-top: 1.5rem;\">\n        </div>\n        <div class=\"col\">\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col mt-4 mb-4\" style=\"margin-left: 1.5rem;\">\n            <p>\n                Ready to Place Your Order?\n            </p>\n            <p>\n                Fill Out This Form!\n            </p>\n            <h2>\n                Plan your pastry with us!\n            </h2>\n            <p>\n                We only deliver to Souther Califonia (San Diego, LA, and Orange County :(\n            </p>\n            <form (submit)=\"handleCheckout()\">\n                <h3>\n                    Tell us how many cakes would you like?\n                </h3>\n                <select [(ngModel)]=\"newOrder.quantity\" name=\"quantity\">\n                    <option value=\"1\">1</option>\n                    <option value=\"2\">2</option>\n                    <option value=\"3\">3</option>\n                </select>\n                <h3>\n                    Give us an estimate of when do you want it delivered to you?\n                </h3>\n                <input [(ngModel)]=\"newOrder.deliverydate\" name=\"deliverydate\" placeholder=\"I want this RIGHT NOW\">\n                <p>\n                    Please give us a few days headsup\n                </p>\n                <h3>\n                    Who & where are we shipping this to? (You have to be in Southern California, US)\n                </h3>\n                <input [(ngModel)]=\"newOrder.firstname\" name=\"firstname\" placeholder=\"First name\">\n                <input [(ngModel)]=\"newOrder.lastname\" name=\"lastname\" placeholder=\"Last name\">\n                <input [(ngModel)]=\"newOrder.email\" name=\"email\" placeholder=\"Email address\">\n                <input [(ngModel)]=\"newOrder.phone\" name=\"phone\" placeholder=\"Phone Number\">\n                <input [(ngModel)]=\"newOrder.address\" name=\"address\" placeholder=\"Address\">\n                <input [(ngModel)]=\"newOrder.apartment\" name=\"apartment\" placeholder=\"apartment\">\n                <input [(ngModel)]=\"newOrder.city\" name=\"city\" placeholder=\"city\">\n                <input [(ngModel)]=\"newOrder.zipcode\" name=\"zipcode\" placeholder=\"ZIP code\">\n                <p>\n                    We will email you to confirm your delivery date & your special requests, if you have any!\n                </p>\n\n\n\n\n                <!-- Button trigger modal -->\n                <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\" style=\"border: 2px solid #CA1A05;\">\n                    Check Out\n                </button>\n\n\n                <!-- Modal -->\n                <div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\"\n                    aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n                    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n                        <div class=\"modal-content\">\n                            <div class=\"modal-header\">\n                                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Thank You!</h5>\n                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                                    <span aria-hidden=\"true\">&times;</span>\n                                </button>\n                            </div>\n                            <div class=\"modal-body\">\n                                We will contact you within the next 24 hours to confirm your order and details! :)\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n\n            </form>\n        </div>\n    </div>\n    <div class=\"row\"></div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pop-up/pop-up.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pop-up/pop-up.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"row\">\n  <div class=\"col\">\n    <p>Thank you for your order! We will contact you wihtin 24 hours for order confirmation and payment method!</p>\n  </div>\n</div> -->\n\n\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-body\">\n            <p>Thank you for your order! We will contact you wihtin 24 hours for order confirmation and payment method!</p>\n        </div>\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/show-cake/show-cake.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/show-cake/show-cake.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <img src=\"{{ cake.imgUrl }}\" style=\"width:100%; height:330px\" >\n    <app-buy-cake [cake]=\"cake\" class=\"pull-right position-relative\" style=\"top:29px\"></app-buy-cake>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/show-review/show-review.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/show-review/show-review.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"display:inline-block\">\n    <div *ngIf=\"cakeReviewed !== null\" style=\"display:inline-block\">\n        \n            <p style=\"display:inline-block\">Avg rating: {{ avgRating }}</p>\n        \n        <div *ngFor=\"let review of cakeReviewed.reviews\" class=\"overflow-auto\" style=\"height: 100px;\">\n            <p>Comment: {{ review.comment }}</p>\n            <!-- <p>Rating: {{ review.rating }}</p> -->\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/single-cake/single-cake.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/single-cake/single-cake.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid pl-0 pr-0 bg\" style=\"height: 100%\">\n  <div class=\"row header\" style=\"height: 25%\">\n    <div class=\"col col-md-2 mt-3\" style=\"padding-left: 6.5rem\">\n      <img src=\"../../assets/logo.png\" class=\"img-fluid d-inline-block\" style=\"max-width: 84%;\" alt=\"logo\">\n    </div>\n    <div class=\"col-md-auto\" style=\"width: 65%; margin-top: 1.5rem;\">\n      <h4 class=\"d-inline-block ml-4 font-weight-bold text-wrap\" style=\"color: #E0E0E0\">\n          We're A Family Bakery -- We focus on seducing and alluring you into buying our cakes.\n      </h4>\n    </div>\n    <div class=\"col\">\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n    <div class=\"col-md-4 bsp_padding-0 col-centered overflow-auto cbg mt-4 services-section\" style=\"height: 470px;\">\n      <div class=\"bsp_bbb_item\">\n        <div *ngFor=\"let cake of cakes\">\n          <img (click)=\"selectCake(cake)\" src=\"{{ cake.imgUrl }}\" class=\"bsp_image mt-1\" />\n          <h5 class=\"bsp_card-title cakename mt-3\">{{ cake.cakeName }}</h5>\n          <h5 class=\"bsp_card-text d-inline-block pull-right mt-3\">$ {{ cake.price }}</h5>\n          <div>\n            <app-buy-cake [cake]=\"cake\" class=\"d-inline-block pull-right\"></app-buy-cake>\n            <app-cake-review [cake]=\"cake\" class=\"d-inline-block\" style=\"box-sizing: unset; width: 70%\"></app-cake-review>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\"></div>\n  <div class=\"row\">\n    <div class=\"col-md-5 bsp_padding-0 col-centered mt-5\">\n      <app-show-cake *ngIf=\"selectedCake !== null\" [cake]=\"selectedCake\" ></app-show-cake>\n      <app-show-review *ngIf=\"selectedCake !== null\" [cakeReviewed]=\"selectedCake\" class=\"d-inline-block\"></app-show-review>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");




let AdminComponent = class AdminComponent {
    constructor(_router, _httpService) {
        this._router = _router;
        this._httpService = _httpService;
        this.cakes = [];
        this.validationErrors = null;
        this.newCake = {
            cakeName: '',
            imgUrl: '',
            price: ''
        };
    }
    ngOnInit() {
        this.allCakes();
    }
    allCakes() {
        this._httpService.getCakes()
            .subscribe((data) => {
            if (data.hasOwnProperty('errors')) {
                this.validationErrors = data.errors;
            }
            else {
                this.cakes = data.cakes;
            }
        });
    }
    handleSubmit() {
        this._httpService.createCakes(this.newCake)
            .subscribe((data) => {
            if (data.hasOwnProperty('errors')) {
                this.validationErrors = data.errors;
            }
            else {
                this.allCakes();
                this.newCake = {
                    cakeName: '',
                    imgUrl: '',
                    price: ''
                };
                this._router.navigate(['/']);
            }
        });
    }
};
AdminComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _single_cake_single_cake_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./single-cake/single-cake.component */ "./src/app/single-cake/single-cake.component.ts");
/* harmony import */ var _show_cake_show_cake_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-cake/show-cake.component */ "./src/app/show-cake/show-cake.component.ts");
/* harmony import */ var _checkout_cake_checkout_cake_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout-cake/checkout-cake.component */ "./src/app/checkout-cake/checkout-cake.component.ts");







const routes = [
    {
        path: 'admin/addCake',
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"]
    },
    {
        path: '',
        component: _single_cake_single_cake_component__WEBPACK_IMPORTED_MODULE_4__["SingleCakeComponent"]
    },
    {
        path: 'homepage/:id',
        component: _show_cake_show_cake_component__WEBPACK_IMPORTED_MODULE_5__["ShowCakeComponent"]
    },
    {
        path: 'purchase/:id',
        component: _checkout_cake_checkout_cake_component__WEBPACK_IMPORTED_MODULE_6__["CheckoutCakeComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'public';
        this.selectedCake = null;
    }
    ngOnInit() {
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _single_cake_single_cake_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./single-cake/single-cake.component */ "./src/app/single-cake/single-cake.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _show_cake_show_cake_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./show-cake/show-cake.component */ "./src/app/show-cake/show-cake.component.ts");
/* harmony import */ var _cake_review_cake_review_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cake-review/cake-review.component */ "./src/app/cake-review/cake-review.component.ts");
/* harmony import */ var _show_review_show_review_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./show-review/show-review.component */ "./src/app/show-review/show-review.component.ts");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _buy_cake_buy_cake_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./buy-cake/buy-cake.component */ "./src/app/buy-cake/buy-cake.component.ts");
/* harmony import */ var _checkout_cake_checkout_cake_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./checkout-cake/checkout-cake.component */ "./src/app/checkout-cake/checkout-cake.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pop-up/pop-up.component */ "./src/app/pop-up/pop-up.component.ts");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _single_cake_single_cake_component__WEBPACK_IMPORTED_MODULE_7__["SingleCakeComponent"],
            _show_cake_show_cake_component__WEBPACK_IMPORTED_MODULE_9__["ShowCakeComponent"],
            _cake_review_cake_review_component__WEBPACK_IMPORTED_MODULE_10__["CakeReviewComponent"],
            _show_review_show_review_component__WEBPACK_IMPORTED_MODULE_11__["ShowReviewComponent"],
            _buy_cake_buy_cake_component__WEBPACK_IMPORTED_MODULE_14__["BuyCakeComponent"],
            _checkout_cake_checkout_cake_component__WEBPACK_IMPORTED_MODULE_15__["CheckoutCakeComponent"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_16__["AdminComponent"],
            _pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_17__["PopUpComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ScrollDispatchModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ScrollingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"]
        ],
        providers: [_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/buy-cake/buy-cake.component.css":
/*!*************************************************!*\
  !*** ./src/app/buy-cake/buy-cake.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1eS1jYWtlL2J1eS1jYWtlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/buy-cake/buy-cake.component.ts":
/*!************************************************!*\
  !*** ./src/app/buy-cake/buy-cake.component.ts ***!
  \************************************************/
/*! exports provided: BuyCakeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyCakeComponent", function() { return BuyCakeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");




let BuyCakeComponent = class BuyCakeComponent {
    constructor(_router, _httpService) {
        this._router = _router;
        this._httpService = _httpService;
    }
    ngOnInit() {
    }
    handlePurchase(cakeId) {
        console.log("let's go to checkout");
        this._router.navigate(['purchase/' + cakeId]);
    }
};
BuyCakeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BuyCakeComponent.prototype, "cake", void 0);
BuyCakeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-buy-cake',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./buy-cake.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/buy-cake/buy-cake.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./buy-cake.component.css */ "./src/app/buy-cake/buy-cake.component.css")).default]
    })
], BuyCakeComponent);



/***/ }),

/***/ "./src/app/cake-review/cake-review.component.css":
/*!*******************************************************!*\
  !*** ./src/app/cake-review/cake-review.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nha2UtcmV2aWV3L2Nha2UtcmV2aWV3LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/cake-review/cake-review.component.ts":
/*!******************************************************!*\
  !*** ./src/app/cake-review/cake-review.component.ts ***!
  \******************************************************/
/*! exports provided: CakeReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CakeReviewComponent", function() { return CakeReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");



let CakeReviewComponent = class CakeReviewComponent {
    constructor(_httpService) {
        this._httpService = _httpService;
        this.cakeToReview = null;
        this.newReview = {
            rating: 5,
            comment: ''
        };
        this.avgRating = 5;
        this.errors = [];
    }
    ngOnInit() {
    }
    handleRate(cakeId) {
        console.log(cakeId);
        this._httpService.createReview(cakeId, this.newReview)
            .subscribe((data) => {
            console.log(data);
            if (data.hasOwnProperty('errors')) {
                this.errors = [data.errors.message];
                console.log(this.errors);
            }
            else {
                this.cakeToReview = this.cake;
                this.cakeToReview.reviews = data.cake.reviews;
                var sum = 0;
                for (var i = 0; i < this.cakeToReview.reviews.length; i++) {
                    sum += this.cakeToReview.reviews[i].rating;
                }
                this.avgRating = sum / this.cakeToReview.reviews.length;
                this.newReview.rating = 5;
                this.newReview.comment = '';
            }
        });
    }
};
CakeReviewComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CakeReviewComponent.prototype, "cake", void 0);
CakeReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cake-review',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cake-review.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cake-review/cake-review.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cake-review.component.css */ "./src/app/cake-review/cake-review.component.css")).default]
    })
], CakeReviewComponent);



/***/ }),

/***/ "./src/app/checkout-cake/checkout-cake.component.css":
/*!***********************************************************!*\
  !*** ./src/app/checkout-cake/checkout-cake.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0LWNha2UvY2hlY2tvdXQtY2FrZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/checkout-cake/checkout-cake.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/checkout-cake/checkout-cake.component.ts ***!
  \**********************************************************/
/*! exports provided: CheckoutCakeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutCakeComponent", function() { return CheckoutCakeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let CheckoutCakeComponent = class CheckoutCakeComponent {
    constructor(_httpService, _route) {
        this._httpService = _httpService;
        this._route = _route;
        this.personOrdering = null;
        this.popUpOpen = false;
        this.newOrder = {
            quantity: '',
            deliverydate: '',
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            zipcode: ''
        };
        this.errors = [];
    }
    ngOnInit() {
        console.log("HI welcome to checkout");
    }
    handleCheckout() {
        this._route.params.subscribe((params) => {
            this._httpService.createOrder(params.id, this.newOrder)
                .subscribe((data) => {
                if (data.hasOwnProperty('errors')) {
                    // console.log("error")
                    this.errors = [data.errors.message];
                }
                else {
                    this.personOrdering = data.cake;
                    this.personOrdering.orders = data.cake.orders;
                    console.log(data.cake);
                    console.log('****');
                    console.log(this.personOrdering);
                }
            });
        });
    }
    openPopUp() {
        this.popUpOpen = true;
    }
};
CheckoutCakeComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CheckoutCakeComponent.prototype, "popUpOpen", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CheckoutCakeComponent.prototype, "cake", void 0);
CheckoutCakeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout-cake',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checkout-cake.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout-cake/checkout-cake.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checkout-cake.component.css */ "./src/app/checkout-cake/checkout-cake.component.css")).default]
    })
], CheckoutCakeComponent);



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HttpService = class HttpService {
    constructor(_http) {
        this._http = _http;
    }
    getCakes() {
        const observable = this._http.get('/api/cakes');
        return observable;
    }
    createCakes(newCake) {
        const observable = this._http.post('/api/cakes', newCake);
        return observable;
    }
    getSingleCake(id) {
        const observable = this._http.get('/api/cakes/' + id);
        return observable;
    }
    createReview(cakeId, newReview) {
        const observable = this._http.post('/api/reviews/' + cakeId, newReview);
        return observable;
    }
    createOrder(cakeId, newOrder) {
        const observable = this._http.post('/api/orders/' + cakeId, newOrder);
        return observable;
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ "./src/app/pop-up/pop-up.component.css":
/*!*********************************************!*\
  !*** ./src/app/pop-up/pop-up.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcC11cC9wb3AtdXAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pop-up/pop-up.component.ts":
/*!********************************************!*\
  !*** ./src/app/pop-up/pop-up.component.ts ***!
  \********************************************/
/*! exports provided: PopUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopUpComponent", function() { return PopUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PopUpComponent = class PopUpComponent {
    constructor() {
        this.popUpOpen = false;
        this.isOpen = false;
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PopUpComponent.prototype, "isOpen", void 0);
PopUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pop-up',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pop-up.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pop-up/pop-up.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pop-up.component.css */ "./src/app/pop-up/pop-up.component.css")).default]
    })
], PopUpComponent);



/***/ }),

/***/ "./src/app/show-cake/show-cake.component.css":
/*!***************************************************!*\
  !*** ./src/app/show-cake/show-cake.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3ctY2FrZS9zaG93LWNha2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/show-cake/show-cake.component.ts":
/*!**************************************************!*\
  !*** ./src/app/show-cake/show-cake.component.ts ***!
  \**************************************************/
/*! exports provided: ShowCakeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowCakeComponent", function() { return ShowCakeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ShowCakeComponent = class ShowCakeComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShowCakeComponent.prototype, "cake", void 0);
ShowCakeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-show-cake',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./show-cake.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/show-cake/show-cake.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./show-cake.component.css */ "./src/app/show-cake/show-cake.component.css")).default]
    })
], ShowCakeComponent);



/***/ }),

/***/ "./src/app/show-review/show-review.component.css":
/*!*******************************************************!*\
  !*** ./src/app/show-review/show-review.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3ctcmV2aWV3L3Nob3ctcmV2aWV3LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/show-review/show-review.component.ts":
/*!******************************************************!*\
  !*** ./src/app/show-review/show-review.component.ts ***!
  \******************************************************/
/*! exports provided: ShowReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowReviewComponent", function() { return ShowReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ShowReviewComponent = class ShowReviewComponent {
    constructor() {
        this.sum = '';
    }
    ngOnInit() {
        this.sum = 0;
        for (var i = 0; i < this.cakeReviewed.reviews.length; i++) {
            this.sum += this.cakeReviewed.reviews[i].rating;
        }
        this.avgRating = this.sum / this.cakeReviewed.reviews.length;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShowReviewComponent.prototype, "cakeReviewed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShowReviewComponent.prototype, "avgRating", void 0);
ShowReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-show-review',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./show-review.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/show-review/show-review.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./show-review.component.css */ "./src/app/show-review/show-review.component.css")).default]
    })
], ShowReviewComponent);



/***/ }),

/***/ "./src/app/single-cake/single-cake.component.css":
/*!*******************************************************!*\
  !*** ./src/app/single-cake/single-cake.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpbmdsZS1jYWtlL3NpbmdsZS1jYWtlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/single-cake/single-cake.component.ts":
/*!******************************************************!*\
  !*** ./src/app/single-cake/single-cake.component.ts ***!
  \******************************************************/
/*! exports provided: SingleCakeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleCakeComponent", function() { return SingleCakeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");



let SingleCakeComponent = class SingleCakeComponent {
    constructor(_httpService) {
        this._httpService = _httpService;
        this.cakes = [];
        this.selectedCake = null;
    }
    ngOnInit() {
        this._httpService.getCakes()
            .subscribe((data) => {
            this.cakes = data.cakes;
        });
    }
    selectCake(cake) {
        this.selectedCake = cake;
    }
};
SingleCakeComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
SingleCakeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-single-cake',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./single-cake.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/single-cake/single-cake.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./single-cake.component.css */ "./src/app/single-cake/single-cake.component.css")).default]
    })
], SingleCakeComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aidapira/Documents/CodingBootcamp/mean_stack/angular/rate_my_cakes/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map