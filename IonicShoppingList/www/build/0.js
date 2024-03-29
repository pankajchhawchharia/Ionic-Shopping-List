webpackJsonp([0],{

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddShoppingItemPageModule", function() { return AddShoppingItemPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_shopping_item__ = __webpack_require__(702);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddShoppingItemPageModule = /** @class */ (function () {
    function AddShoppingItemPageModule() {
    }
    AddShoppingItemPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_shopping_item__["a" /* AddShoppingItemPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_shopping_item__["a" /* AddShoppingItemPage */]),
            ],
        })
    ], AddShoppingItemPageModule);
    return AddShoppingItemPageModule;
}());

//# sourceMappingURL=add-shopping-item.module.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddShoppingItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_toast_toast_service__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_toast_toast_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__services_toast_toast_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shopping_list_shopping_list_service__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shopping_list_shopping_list_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__services_shopping_list_shopping_list_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AddShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddShoppingItemPage = /** @class */ (function () {
    function AddShoppingItemPage(navCtrl, navParams, shoppingListService, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shoppingListService = shoppingListService;
        this.toast = toast;
        this.item = {
            name: '',
            quantity: undefined,
            price: undefined,
        };
    }
    AddShoppingItemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddShoppingItemPage');
    };
    AddShoppingItemPage.prototype.addItem = function (item) {
        var _this = this;
        this.shoppingListService.addItem(item).then(function (ref) {
            _this.toast.show(item.name + " is added! ", 1000);
            _this.navCtrl.setRoot('HomePage', { key: ref.key });
        });
    };
    AddShoppingItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-add-shopping-item',template:/*ion-inline-start:"C:\Pankaj_Projects\Ionic\Ionic-Shopping-List\IonicShoppingList\src\pages\add-shopping-item\add-shopping-item.html"*/'<!--\n  Generated template for the AddShoppingItemPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color=\'primary\'>\n    <ion-title>Add Item</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<ion-item>\n  <ion-label>\n    Name\n  </ion-label>\n  <ion-input  [(ngModel)] = \'item.name\' placeholder=\'ex: Redmi mobile\'>\n\n  </ion-input>\n</ion-item>\n<ion-item>\n  <ion-label>\n    Quatity\n  </ion-label>\n  <ion-input type=\'number\'  [(ngModel)] = \'item.quantity\' placeholder=\'ex: 1\'>\n\n  </ion-input>\n</ion-item>\n<ion-item>\n  <ion-label>\n    Price\n  </ion-label>\n  <ion-input type=\'number\' [(ngModel)] = \'item.price\' placeholder=\'ex: 5000\'>\n\n  </ion-input>\n</ion-item>\n\n<button ion-button block clear (click)= addItem(item)> Add </button>\n</ion-content>\n'/*ion-inline-end:"C:\Pankaj_Projects\Ionic\Ionic-Shopping-List\IonicShoppingList\src\pages\add-shopping-item\add-shopping-item.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_shopping_list_shopping_list_service__["ShoppingListService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_shopping_list_shopping_list_service__["ShoppingListService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__services_toast_toast_service__["ToastService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_toast_toast_service__["ToastService"]) === "function" && _d || Object])
    ], AddShoppingItemPage);
    return AddShoppingItemPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=add-shopping-item.js.map

/***/ })

});
//# sourceMappingURL=0.js.map