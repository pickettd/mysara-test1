webpackJsonp([0],{

/***/ 221:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 221;

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inspection_inspection__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__kanban_kanban__ = __webpack_require__(448);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.units = [
            { id: 'VI1204', name: 'Valley Isle 1204' },
            { id: 'KR414', name: 'Kanaha Ridge 414' },
            { id: 'KR121', name: 'Kanaha Ridge 121' }
        ];
    }
    HomePage.prototype.editUnit = function (unit) {
        console.log('edit: ' + unit.id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__inspection_inspection__["a" /* InspectionPage */], {
            unit: unit
        });
    };
    HomePage.prototype.goToKanbanPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__kanban_kanban__["a" /* KanbanPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/david/sites/__kimscott/__marsi/__sara/1test_sara/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title >\n      <div class="logo content-max-width">\n\n        <img src="assets/img/my-sara-logo.png" alt="MySARA logo" />\n\n\n      </div>\n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <section class="content-max-width">\n    <div class="content-header">\n      <h2>Start Inspection</h2>\n      <p class="negative-margin">Select a property to start the inspection.</p>\n      <div class="problem-view">\n        <button class="cta" (click)="goToKanbanPage()">\n          Admin view\n       </button>\n      </div>\n    </div>\n\n  </section>\n  <ion-list reorder="true">\n    <button ion-item (click)="editUnit(unit)" *ngFor="let unit of units">\n      {{unit.name}}\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/david/sites/__kimscott/__marsi/__sara/1test_sara/src/pages/home/home.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InspectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__problem_problem__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover__ = __webpack_require__(447);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InspectionPage = (function () {
    function InspectionPage(navCtrl, navParams, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.metadata = {};
        this.metadata.itemsProperty = 'incompleteItems';
        this.timestamp = new Date().getTime();
        this.unit = {
            id: '',
            name: ''
        };
        this.rooms = [
            {
                id: 'GENERAL',
                name: 'General',
                incompleteItems: [
                    {
                        id: 'GENERAL|Electrical|Walls|Switches',
                        tips: 'Turn on/off all lights and lamps',
                        itemOptions: [
                            { id: 'Switches', name: 'Switches' },
                            { id: 'Overhead Lighting', name: 'Overhead Lighting' },
                            { id: 'Lamps/Misc Lighting', name: 'Lamps/Misc Lighting' }
                        ]
                    },
                    {
                        id: 'GENERAL|HVAC|Cooling|Air Conditioner',
                        tips: 'Check to make sure AC is operational (if applicable)',
                        itemOptions: [{ id: 'Air Conditioner', name: 'Air Conditioner' }]
                    },
                    {
                        id: 'GENERAL|Amenities|Electronics|TV/DVD/Stereo',
                        tips: 'Turn on TV and confirm cable is operational',
                        itemOptions: [{ id: 'TV/DVD/Stereo', name: 'TV/DVD/Stereo' }]
                    },
                    {
                        id: 'GENERAL|Amenities|Electronics|Internet',
                        tips: 'Connect to Wi-fi and confirm user name and password are correct',
                        itemOptions: [{ id: 'Internet', name: 'Internet' }]
                    }
                ],
                completeItems: []
            },
            {
                id: 'KITCHEN',
                name: 'Kitchen',
                incompleteItems: [
                    {
                        id: 'KITCHEN|Amenities|Appliance|Refrigerator',
                        tips: 'Refrigerator is closing correctly and temperature control is on the middle setting',
                        itemOptions: [{ id: 'Refrigerator', name: 'Refrigerator' }]
                    }
                ],
                completeItems: []
            }
        ];
    }
    InspectionPage.prototype.ionViewDidLoad = function () {
        var unit = this.navParams.get('unit');
        if (typeof (unit) !== 'undefined') {
            this.unit = unit;
        }
    };
    InspectionPage.prototype.reportProblem = function (room, itemSet) {
        if ((typeof (room) !== 'undefined') && (typeof (itemSet) !== 'undefined')) {
            console.log('Report a problem: ' + room.id + ', ' + itemSet.id);
            this.moveItemSetToComplete(room, itemSet);
        }
        else {
            console.log('Report a problem with no preselected room or item set');
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__problem_problem__["a" /* ProblemPage */], {
            room: room,
            itemSet: itemSet
        });
    };
    InspectionPage.prototype.moveItemSetToComplete = function (room, itemSet) {
        itemSet.completed = true;
        for (var index in room.incompleteItems) {
            if ((room.incompleteItems[index]).id === itemSet.id) {
                room.completeItems.push(itemSet);
                room.incompleteItems.splice(index, 1);
            }
        }
    };
    InspectionPage.prototype.markReady = function (room, itemSet) {
        if ((typeof (room) !== 'undefined') && (typeof (itemSet) !== 'undefined')) {
            console.log('Marked ready: ' + room.id + ', ' + itemSet.id);
        }
        itemSet.ready = true;
        this.moveItemSetToComplete(room, itemSet);
    };
    InspectionPage.prototype.toggleTaskView = function () {
        console.log('Show closed tasks');
        if (this.metadata.itemsProperty === 'completeItems') {
            this.metadata.itemsProperty = 'incompleteItems';
        }
        else {
            this.metadata.itemsProperty = 'completeItems';
        }
    };
    InspectionPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__popover__["a" /* InspectionPopover */], {
            itemsProperty: this.metadata,
            reportProblem: this.reportProblem,
            toggleTaskView: this.toggleTaskView
        });
        popover.present({
            ev: myEvent
        });
    };
    InspectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-inspection',template:/*ion-inline-start:"/Users/david/sites/__kimscott/__marsi/__sara/1test_sara/src/pages/inspection/inspection.html"*/'<!--\n  Generated template for the Inspection page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title >\n      <div class="logo content-max-width">\n          <img src="assets/img/my-sara-logo.png" alt="MySARA logo" />\n\n      </div>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <section class="content-max-width ">\n    <div class="content-header">\n      <h2>{{unit.name}}</h2>\n      <p class="negative-margin">{{timestamp | date}}</p>\n      <button ion-button icon-only (click)="presentPopover($event)" class="menu-problem">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </div>\n  </section>\n\n\n  <ion-list *ngFor="let room of rooms">\n    <ion-list-header>\n      {{room.name}}\n    </ion-list-header>\n    <ion-item-sliding *ngFor="let item of room[metadata.itemsProperty]">\n      <ion-item>\n        <span *ngIf="!item.completed">\n          {{item.tips}}\n        </span>\n        <span *ngIf="item.completed">\n          <div *ngIf="item.ready"  class="classification primary">\n            <img src="assets/img/thumbs-up-light.svg" alt="thumbs up" style="padding: 2px" />\n          </div>\n          <div *ngIf="!item.ready"  class="classification danger">\n            <img src="assets/img/thumbs-down-light.svg" alt="thumbs down" style="padding: 2px" />\n          </div>\n          <p class="completed">{{item.tips}}</p>\n        </span>\n      </ion-item>\n      <ion-item-options side="left">\n        <button *ngIf="!item.completed"\n                ion-button color="primary"\n                (click)="markReady(room, item)">\n          <img src="assets/img/thumbs-up-light.svg" alt="thumbs up" />\n          <p>Arrival<br />Ready</p>\n        </button>\n      </ion-item-options>\n      <ion-item-options side="right">\n        <button *ngIf="!item.completed"\n                ion-button color="danger"\n                (click)="reportProblem(room, item)">\n\n          <p>Report<br /> Problem</p>\n          <img src="assets/img/thumbs-down-light.svg" alt="thumbs down" />\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/david/sites/__kimscott/__marsi/__sara/1test_sara/src/pages/inspection/inspection.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* PopoverController */]])
    ], InspectionPage);
    return InspectionPage;
}());
//# sourceMappingURL=inspection.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the Problem page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ProblemPage = (function () {
    function ProblemPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.resetView();
    }
    ProblemPage.prototype.getAndSetRoomFromParams = function () {
        var inputRoom = this.navParams.get('room');
        if (typeof (inputRoom) !== 'undefined') {
            for (var index in this.roomOptions) {
                if ((this.roomOptions[index]).id === inputRoom.id) {
                    this.selectedRoomName = this.roomOptions[index].name;
                    console.log('Matched room id: ' + inputRoom.id);
                }
            }
        }
    };
    ProblemPage.prototype.getAndSetItemSetFromParams = function () {
        var inputItemSet = this.navParams.get('itemSet');
        if (typeof (inputItemSet) !== 'undefined') {
            this.selectedItemSet = inputItemSet;
            if (inputItemSet.itemOptions.length === 1) {
                this.selectedItemName = inputItemSet.itemOptions[0].name;
                console.log('Only one item option, so select it');
            }
            console.log('Received itemset');
        }
    };
    ProblemPage.prototype.resetView = function () {
        this.timestamp = new Date().getTime();
        this.problemNotes = '';
        this.selectedItemSet = {
            id: '',
            tips: '',
            itemOptions: [
                { id: 'Switches', name: 'Switches' },
                { id: 'Overhead Lighting', name: 'Overhead Lighting' },
                { id: 'Lamps/Misc Lighting', name: 'Lamps/Misc Lighting' },
                { id: 'Air Conditioner', name: 'Air Conditioner' },
                { id: 'TV/DVD/Stereo', name: 'TV/DVD/Stereo' },
                { id: 'Internet', name: 'Internet' },
                { id: 'Refrigerator', name: 'Refrigerator' },
                { id: 'Other', name: 'Other' }
            ]
        };
        this.selectedRoomName = '';
        this.itemOptions = [];
        this.selectedItemName = '';
        this.roomOptions = [
            { id: 'GENERAL', name: 'General (or multiple rooms)' },
            { id: 'ENTRY/HALLWAY', name: 'Entry/Hallway' },
            { id: 'LANAI', name: 'Lanai' },
            { id: 'KITCHEN', name: 'Kitchen' },
            { id: 'LIVING ROOM', name: 'Living Room' },
            { id: 'DINING ROOM', name: 'Dining Room' },
            { id: 'BATHROOM#1', name: 'Bathroom #1' },
            { id: 'BEDROOM#1', name: 'Bedroom #1' }
        ];
        this.getAndSetRoomFromParams();
        this.getAndSetItemSetFromParams();
    };
    ProblemPage.prototype.ionViewDidLoad = function () {
        this.resetView();
    };
    ProblemPage.prototype.saveProblem = function () {
        this.navCtrl.pop();
    };
    ProblemPage.prototype.addNewIssue = function () {
        this.resetView();
    };
    ProblemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-problem',template:/*ion-inline-start:"/Users/david/sites/__kimscott/__marsi/__sara/1test_sara/src/pages/problem/problem.html"*/'<!--\n  Generated template for the Problem page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title >\n      <div class="logo content-max-width">\n        <img src="assets/img/my-sara-logo.png" alt="MySARA logo" />\n\n      </div>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <section class="content-max-width problem">\n    <div class="content-header">\n    <h2>Report a Problem</h2>\n      <p class="negative-margin">{{selectedItemSet.tips}}</p>\n      </div>\n  </section>\n\n  <div class=" content-max-width problem">\n    <ion-item>\n      <ion-img src="assets/img/sunshine_small.jpg"\n             width="100%"\n             height="100%"></ion-img>\n    </ion-item>\n    <ion-item>\n      <ion-label>Room</ion-label>\n      <ion-select [(ngModel)]="selectedRoomName">\n        <ion-option *ngFor="let roomOption of roomOptions"\n                    [value]="roomOption.name">\n          {{roomOption.name}}\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Item</ion-label>\n      <ion-select [(ngModel)]="selectedItemName">\n        <ion-option *ngFor="let itemOption of selectedItemSet.itemOptions"\n                    [value]="itemOption.name">\n          {{itemOption.name}}\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Problem Notes</ion-label>\n      <ion-textarea [(ngModel)]="problemNotes"></ion-textarea>\n    </ion-item>\n    <div class="button-50">\n      <button ion-button class="secondary-button"\n              color="light"\n              block\n              (click)="addNewIssue()"\n              [disabled]="(problemNotes === \'\')||(selectedItemName === \'\')">\n        + Additional Problem\n      </button>\n      <button ion-button class="main-button"\n              color="light"\n              block\n              (click)="saveProblem()"\n              [disabled]="(problemNotes === \'\')||(selectedItemName === \'\')">\n        Close Problem\n      </button>\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/david/sites/__kimscott/__marsi/__sara/1test_sara/src/pages/problem/problem.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], ProblemPage);
    return ProblemPage;
}());
//# sourceMappingURL=problem.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InspectionPopover; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InspectionPopover = (function () {
    function InspectionPopover(navCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
    }
    InspectionPopover.prototype.ngOnInit = function () {
        if (this.navParams.data) {
            this.reportProblem = this.navParams.data.reportProblem;
            this.toggleTaskView = this.navParams.data.toggleTaskView;
            this.metadata = this.navParams.data.itemsProperty;
        }
    };
    InspectionPopover.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    InspectionPopover = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n    <ion-list>\n      <button ion-item (click)=\"reportProblem(); close()\">Report problem</button>\n      <button ion-item (click)=\"toggleTaskView(); close()\">\n        View\n        <span *ngIf=\"metadata.itemsProperty === 'incompleteItems'\">completed</span>\n        items\n      </button>\n    </ion-list>\n  "
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], InspectionPopover);
    return InspectionPopover;
}());
//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KanbanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kanban1_kanban1__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__problem1_problem1__ = __webpack_require__(450);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the Problem page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var KanbanPage = (function () {
    function KanbanPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    KanbanPage.prototype.goToKanbanPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__kanban1_kanban1__["a" /* Kanban1Page */]);
    };
    KanbanPage.prototype.goToProblemPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__problem1_problem1__["a" /* Problem1Page */]);
    };
    KanbanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-kanban',template:/*ion-inline-start:"/Users/david/sites/__kimscott/__marsi/__sara/1test_sara/src/pages/kanban/kanban.html"*/'<!--\n  Generated template for the Problem page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title >\n      <div class="logo content-max-width">\n        <img src="assets/img/my-sara-logo.png" alt="MySARA logo" />\n\n      </div>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <section class="content-max-width ">\n    <div class="content-header">\n    <h2>Inspections</h2>\n      <p class="negative-margin">Everything that is in progress</p>\n      <div class="problem-view">\n        <button class="cta" (click)="goToKanbanPage()">\n          Manage problems\n       </button>\n      </div>\n      </div>\n  </section>\n\n  <div class=" content-max-width ">\n\n    <div class="content-header">\n    <h3>Completed</h3>\n  </div>\n  <ion-list>\n\n      <button ion-item (click)="goToProblemPage()">\n    Valley Isle 1204 <div class="problem-count"><ion-icon name="build" item-end></ion-icon> <div class="bubble">2</div> </div>\n\n      </button>\n      <button ion-item>\n    Kanaha Ridge 121\n      </button>\n      <button ion-item (click)="goToProblemPage()">\n    Valley Isle 1033 <div class="problem-count"><ion-icon name="build" item-end></ion-icon> <div class="bubble">1</div> </div>\n    </button>\n    <button ion-item (click)="goToProblemPage()">\n  Maui Sunset 234 <div class="problem-count"><ion-icon name="build" item-end></ion-icon> <div class="bubble">1</div> </div>\n  </button>\n  <button ion-item (click)="goToProblemPage()">\n  Maui Sunset 105 <div class="problem-count"><ion-icon name="build" item-end></ion-icon> <div class="bubble">2</div> </div>\n\n  </button>\n\n  </ion-list>\n  <div class="content-header">\n  <h3>Not started</h3>\n</div>\n  <ion-list class="not-started">\n\n      <button ion-item>\n    Kanaha Ridge 414\n\n      </button>\n      <button ion-item>\n    Kanaha Ridge 121\n\n      </button>\n  </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/david/sites/__kimscott/__marsi/__sara/1test_sara/src/pages/kanban/kanban.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], KanbanPage);
    return KanbanPage;
}());
//# sourceMappingURL=kanban.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Kanban1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the Problem page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var Kanban1Page = (function () {
    function Kanban1Page() {
        this.q1 = [];
        this.q2 = [];
        this.q3 = [];
        this.dragOptions = {
            invalid: function (el, handle) {
                if (el && el.innerText) {
                    var staticEl = (el.innerText.indexOf('[Drag to here]') !== -1);
                    return staticEl;
                }
                return false;
            }
        };
        this.q1 = [{ name: 'Lighting Lamp', unit: 'Valley Isle 1204' }, { name: 'TV', unit: 'Maui Sunset 105' }];
        this.q2 = [{ name: 'AC', unit: 'Valley Isle 1033' }, { name: 'TV', unit: 'Maui Sunset 234' }];
        this.q3 = [{ name: 'Refrigerator', unit: 'Maui Sunset 105' }, { name: 'AC', unit: 'Valley Isle 1204' }];
    }
    Kanban1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-kanban1',template:/*ion-inline-start:"/Users/david/sites/__kimscott/__marsi/__sara/1test_sara/src/pages/kanban1/kanban1.html"*/'<!--\n  Generated template for the Problem page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title >\n      <div class="logo content-max-width">\n        <img src="assets/img/my-sara-logo.png" alt="MySARA logo" />\n\n      </div>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <section class="content-max-width ">\n    <div class="content-header">\n    <h2>Workflow</h2>\n      <p class="negative-margin">View what stage problems are at in being solved</p>\n\n      </div>\n  </section>\n\n  <div class=" content-max-width kanbanboard">\n<ion-grid>\n<ion-row>\n  <ion-col>\n    <h3>Attention Needed</h3>\n    <ion-list [dragula]=\'"my-bag"\' [dragulaModel]="q1" [dragulaOptions]="dragOptions">\n\n        <button ion-item *ngFor="let item of q1">\n\n    <p class="problem">{{item.name}}</p>\n    <p class="negative-margin">{{item.unit}}</p>\n\n\n        </button>\n        <button ion-item *ngIf="q1.length == 0">\n          <p class="problem">[Drag to here]</p>\n        </button>\n\n    </ion-list>\n  </ion-col>\n  <ion-col>\n    <h3>Repair Scheduled</h3>\n    <ion-list [dragula]=\'"my-bag"\' [dragulaModel]="q2" [dragulaOptions]="dragOptions">\n        <button ion-item *ngFor="let item of q2">\n          <p class="problem">{{item.name}}</p>\n          <p class="negative-margin">{{item.unit}}</p>\n        </button>\n      <button ion-item *ngIf="q2.length == 0">\n        <p class="problem">[Drag to here]</p>\n      </button>\n    </ion-list>\n  </ion-col>\n  <ion-col>\n    <h3>Review Work</h3>\n    <ion-list [dragula]=\'"my-bag"\' [dragulaModel]="q3" [dragulaOptions]="dragOptions">\n\n        <button ion-item *ngFor="let item of q3">\n          <p class="problem">{{item.name}}</p>\n          <p class="negative-margin">{{item.unit}}</p>\n\n        </button>\n      <button ion-item *ngIf="q3.length == 0">\n        <p class="problem">[Drag to here]</p>\n      </button>\n\n    </ion-list>\n  </ion-col>\n</ion-row>\n</ion-grid>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/david/sites/__kimscott/__marsi/__sara/1test_sara/src/pages/kanban1/kanban1.html"*/
        }), 
        __metadata('design:paramtypes', [])
    ], Kanban1Page);
    return Kanban1Page;
}());
//# sourceMappingURL=kanban1.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Problem1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the Problem page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var Problem1Page = (function () {
    function Problem1Page() {
    }
    Problem1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-problem1',template:/*ion-inline-start:"/Users/david/sites/__kimscott/__marsi/__sara/1test_sara/src/pages/problem1/problem1.html"*/'<!--\n  Generated template for the Problem page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title >\n      <div class="logo content-max-width">\n        <img src="assets/img/my-sara-logo.png" alt="MySARA logo" />\n\n      </div>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <section class="content-max-width viewing-problem">\n    <div class="content-header">\n    <h2>Valley Isle 1204</h2>\n      <p class="problem-description">The lamp is broken</p>\n      </div>\n      <ion-row>\n        <ion-col col-12>\n          <ion-item>\n          <ion-row>\n\n              <ion-col col-6>\n                Room\n                <p>Master Bedroom</p>\n              </ion-col>\n              <ion-col col-6>\n                Item\n                <p>Lighting/Lamps</p>\n              </ion-col>\n\n            </ion-row>\n      </ion-item>\n        <ion-item>\n          <ion-img src="assets/img/sunshine_small.jpg"\n                 width="100%"\n                 height="100%"></ion-img>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n  </section>\n    <section class="content-max-width viewing-problem">\n<ion-grid>\n  <ion-row>\n    <ion-col>\n    <h3 class="fixing-timeline">When will it be fixed?</h3>\n  </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-item>\n  <ion-segment class="timeline">\n    <ion-segment-button >\n      Today\n    </ion-segment-button>\n    <ion-segment-button>\n      Before check-in\n    </ion-segment-button>\n    <ion-segment-button>\n      After check-in\n    </ion-segment-button>\n    <ion-segment-button>\n      >30 days\n    </ion-segment-button>\n    <ion-segment-button>\n      Housekeeping\n    </ion-segment-button>\n  </ion-segment>\n</ion-item>\n</ion-col>\n</ion-row>\n</ion-grid>\n</section>\n</ion-content>\n'/*ion-inline-end:"/Users/david/sites/__kimscott/__marsi/__sara/1test_sara/src/pages/problem1/problem1.html"*/
        }), 
        __metadata('design:paramtypes', [])
    ], Problem1Page);
    return Problem1Page;
}());
//# sourceMappingURL=problem1.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(551);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=636409537938440000.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_inspection_inspection__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_inspection_popover__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_problem_problem__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_problem1_problem1__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_kanban_kanban__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_kanban1_kanban1__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_data__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_dragula__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_dragula__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_inspection_inspection__["a" /* InspectionPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_inspection_popover__["a" /* InspectionPopover */],
                __WEBPACK_IMPORTED_MODULE_6__pages_problem_problem__["a" /* ProblemPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_problem1_problem1__["a" /* Problem1Page */],
                __WEBPACK_IMPORTED_MODULE_9__pages_kanban1_kanban1__["a" /* Kanban1Page */],
                __WEBPACK_IMPORTED_MODULE_8__pages_kanban_kanban__["a" /* KanbanPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */]),
                __WEBPACK_IMPORTED_MODULE_11_ng2_dragula__["DragulaModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_inspection_inspection__["a" /* InspectionPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_inspection_popover__["a" /* InspectionPopover */],
                __WEBPACK_IMPORTED_MODULE_6__pages_problem_problem__["a" /* ProblemPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_problem1_problem1__["a" /* Problem1Page */],
                __WEBPACK_IMPORTED_MODULE_9__pages_kanban1_kanban1__["a" /* Kanban1Page */],
                __WEBPACK_IMPORTED_MODULE_8__pages_kanban_kanban__["a" /* KanbanPage */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__providers_data__["a" /* Data */], { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicErrorHandler */] }]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(444);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = (function () {
    function MyApp(platform) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["b" /* StatusBar */].styleDefault();
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["a" /* Splashscreen */].hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/david/sites/__kimscott/__marsi/__sara/1test_sara/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/david/sites/__kimscott/__marsi/__sara/1test_sara/src/app/app.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */]])
    ], MyApp);
    return MyApp;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Data = (function () {
    function Data(http) {
        this.http = http;
        console.log('Hello Data Provider');
    }
    Data = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], Data);
    return Data;
}());
//# sourceMappingURL=data.js.map

/***/ })

},[452]);
//# sourceMappingURL=636409537938440000.js.map