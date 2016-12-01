"use strict";
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
 * Created by pkulenkamp on 25/10/2016.
 */
var core_1 = require('@angular/core');
var TogglePipe = (function () {
    function TogglePipe() {
    }
    Object.defineProperty(TogglePipe, "ALL", {
        get: function () { return "all"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TogglePipe, "APPLIED_TO", {
        get: function () { return "appTo"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TogglePipe, "NOT_APPLIED_TO", {
        get: function () { return "notAppTo"; },
        enumerable: true,
        configurable: true
    });
    TogglePipe.prototype.transform = function (pipeData, pipeModifier) {
        return pipeData.filter(function (eachItem) {
            switch (pipeModifier) {
                case TogglePipe.ALL:
                    return true;
                case TogglePipe.APPLIED_TO:
                    return eachItem['appliedTo'] == true;
                case TogglePipe.NOT_APPLIED_TO:
                    return eachItem['appliedTo'] == false;
            }
        });
    };
    TogglePipe = __decorate([
        core_1.Pipe({
            name: 'toggle'
        }), 
        __metadata('design:paramtypes', [])
    ], TogglePipe);
    return TogglePipe;
}());
exports.TogglePipe = TogglePipe;
//# sourceMappingURL=toggle.pipe.js.map