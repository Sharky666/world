webpackJsonp([0],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
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
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/media/daniel/a/dev/js/ionic/world/src/pages/home/home.html"*/'<world></world>'/*ion-inline-end:"/media/daniel/a/dev/js/ionic/world/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Game; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__raceFactory__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collisionDetector__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baseEntityCollisionHandler__ = __webpack_require__(276);



var Game = /** @class */ (function () {
    function Game() {
        var _this = this;
        this.collisionDetector = new __WEBPACK_IMPORTED_MODULE_1__collisionDetector__["a" /* CollisionDetector */](__WEBPACK_IMPORTED_MODULE_2__baseEntityCollisionHandler__["a" /* BaseEntityCollisionHandler */]);
        this.canvas = null;
        this.ctx = null;
        this.races = [];
        this.creatures = [];
        this.createCanvas();
        this.races = __WEBPACK_IMPORTED_MODULE_0__raceFactory__["a" /* RaceFactory */].generateRaces(3)
            .map(function (race) {
            _this.creatures = _this.creatures.concat(race.generateCreatures(5));
            return race;
        });
        setInterval(function () {
            _this.loop();
        }, 1000);
    }
    Game.prototype.loop = function () {
        this.collisionDetector.detectCollisions(this.creatures);
        this.render();
    };
    Game.prototype.render = function () {
        var _this = this;
        this.clearCanvas();
        this.creatures.forEach(function (e) {
            _this.ctx.fillStyle = e.color;
            e.step();
            _this.ctx.fillRect(e.locationX, e.locationY, e.width, e.height);
        });
    };
    ;
    Game.prototype.createCanvas = function () {
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext('2d');
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
    };
    Game.prototype.clearCanvas = function () {
        this.ctx.fillStyle = "#f7faff";
        this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    };
    return Game;
}());

//# sourceMappingURL=game.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_world_world__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__game__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__components_world_world__["a" /* WorldComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__components_world_world__["a" /* WorldComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__game__["a" /* Game */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/media/daniel/a/dev/js/ionic/world/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"/media/daniel/a/dev/js/ionic/world/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_app_game__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorldComponent = /** @class */ (function () {
    function WorldComponent(game) {
        this.game = game;
        setInterval(function () {
            document.body.appendChild(game.canvas); //Temporary until I know how to append it to the actualy fucking component.
        }, 500);
    }
    ;
    WorldComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'world',template:/*ion-inline-start:"/media/daniel/a/dev/js/ionic/world/src/components/world/world.html"*/''/*ion-inline-end:"/media/daniel/a/dev/js/ionic/world/src/components/world/world.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__src_app_game__["a" /* Game */]])
    ], WorldComponent);
    return WorldComponent;
}());

//# sourceMappingURL=world.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RaceFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__race__ = __webpack_require__(271);

var RaceFactory = /** @class */ (function () {
    function RaceFactory() {
    }
    RaceFactory.generateRaces = function (raceNum) {
        var races = [];
        for (var i = 0; i < raceNum; i++) {
            races.push(new __WEBPACK_IMPORTED_MODULE_0__race__["a" /* Race */]());
        }
        return races;
    };
    ;
    return RaceFactory;
}());

//# sourceMappingURL=raceFactory.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Race; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creature__ = __webpack_require__(272);

var Race = /** @class */ (function () {
    function Race() {
        this.color = null; //Generate a random color, and then base the color of the creatures from this race on it.
        this.maxStep = Math.floor(Math.random() * 25) + 1; //Each race have maximum blocks they can move each step.
        this.color = this.convertRgbToHex(this.generateRgb());
    }
    ;
    Race.prototype.generateCreatures = function (n) {
        var creatures = [];
        for (var i = 0; i < n; i++) {
            creatures.push(new __WEBPACK_IMPORTED_MODULE_0__creature__["a" /* Creature */](this.maxStep, this));
        }
        return creatures;
    };
    Race.prototype.convertRgbToHex = function (rgb) {
        var finalHex = '#';
        rgb.forEach(function (c) {
            var hex = c.toString(16);
            finalHex += finalHex + hex.length === '1' ? '0' + hex : hex;
        });
        return finalHex;
    };
    Race.prototype.generateRgb = function () {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return [r, g, b];
    };
    return Race;
}());

//# sourceMappingURL=race.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Creature; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity__ = __webpack_require__(273);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Creature = /** @class */ (function (_super) {
    __extends(Creature, _super);
    function Creature(maxStep, race) {
        var _this = _super.call(this) || this;
        _this.maxStep = null; //Max blocks they can move each step.
        _this.isColliding = false; //'CollisionDetector' uses this variableBaseEntityCollisionHandler
        _this.race = null;
        _this.generateDetails();
        _this.color = race.color;
        _this.maxStep = maxStep;
        _this.race = race;
        console.log(maxStep);
        return _this;
    }
    Creature.prototype.generateDetails = function () {
        this.width = Math.floor(Math.random() * 90) + 1;
        this.height = Math.floor(Math.random() * 90) + 1;
        this.locationX = Math.floor(Math.random() * window.innerWidth);
        this.locationY = Math.floor(Math.random() * window.innerHeight);
    };
    ;
    Creature.prototype.step = function () {
        var i = Math.floor(Math.random() * 4) + 1; //Randomizing possibilities
        switch (i) {
            case 1:
                this.locationX += Math.floor(Math.random() * this.maxStep) + 1;
                break;
            case 2:
                this.locationX -= Math.floor(Math.random() * this.maxStep) + 1;
                break;
            case 3:
                this.locationY += Math.floor(Math.random() * this.maxStep) + 1;
                break;
            case 4:
                this.locationY -= Math.floor(Math.random() * this.maxStep) + 1;
                break;
        }
    };
    /**
   * This function will be called when a collision occurs
   */
    Creature.prototype.onCollison = function (data) {
        if (data.entities[1].race !== this.race) {
        }
        // console.log(data.entities);
    };
    ;
    return Creature;
}(__WEBPACK_IMPORTED_MODULE_0__entity__["a" /* Entity */]));

//# sourceMappingURL=creature.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Entity; });
var Entity = /** @class */ (function () {
    function Entity() {
        this.width = null;
        this.height = null;
        this.locationX = null;
        this.locationY = null;
        this.color = null;
    }
    /**
     * This function will be called when a collision occurs
     */
    Entity.prototype.onCollison = function (data) {
        // Override
    };
    ;
    return Entity;
}());

//# sourceMappingURL=entity.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollisionDetector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__eventEmitter__ = __webpack_require__(275);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CollisionDetector = /** @class */ (function (_super) {
    __extends(CollisionDetector, _super);
    function CollisionDetector(handler) {
        var _this = _super.call(this) || this;
        _this.handler = handler;
        return _this;
    }
    //TODO: Emit the events to the 'creatures' and the 'game' or something like that~. :)
    CollisionDetector.prototype.detectCollisions = function (creatures) {
        var _this = this;
        creatures.forEach(function (a) {
            creatures.forEach(function (b) {
                // if the loop is running on the same creature: return.
                if (a === b)
                    return;
                if (b.locationX + b.width > a.locationX && a.locationX + a.width > b.locationX) {
                    //collision on the X axis
                    if (b.locationY + b.height > a.locationY && a.locationY + a.height > b.locationY) {
                        //collision on the Y axis
                        console.log("collison!");
                        var eventData = {
                            time: Date.now(),
                            fresh: false,
                            entities: [a, b]
                        };
                        if (!b.isColliding && !a.isColliding) {
                            //Fresh collision!
                            eventData.fresh = true;
                        }
                        _this.handler(eventData);
                        _this.emit('collision', eventData);
                        a.onCollison(eventData);
                        b.onCollison(eventData);
                        b.isColliding = true;
                        a.isColliding = true;
                    }
                    else {
                        b.isColliding = false;
                        a.isColliding = false;
                    }
                }
            });
        });
    };
    return CollisionDetector;
}(__WEBPACK_IMPORTED_MODULE_0__eventEmitter__["a" /* EventEmitter */]));

//# sourceMappingURL=collisionDetector.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventEmitter; });
var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        this.listeners = {};
    }
    EventEmitter.prototype.emit = function (event, data) {
        //if nobody is listening to the event, return. (because you can't `for each` on something that doesn't exist)
        if (!this.listeners[event])
            return;
        this.listeners[event].forEach(function (callback) {
            callback(data);
        });
    };
    EventEmitter.prototype.addEventListener = function (event, callback) {
        if (!this.listeners[event]) {
            //If the event doesn't exist, create a new one.
            this.listeners[event] = [];
        }
        //Push the callback to the given event.
        this.listeners[event].push(callback);
    };
    return EventEmitter;
}());

//# sourceMappingURL=eventEmitter.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = BaseEntityCollisionHandler;
function BaseEntityCollisionHandler(event) {
}
//# sourceMappingURL=baseEntityCollisionHandler.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map