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
var toggle_pipe_1 = require("../pipes/toggle.pipe");
var job_application_model_1 = require("../models/job-application.model");
var ApplicationListComponent = (function () {
    function ApplicationListComponent() {
        this.selectionChanged = new core_1.EventEmitter();
        this.hideFilter = false;
        this.toggleSel = toggle_pipe_1.TogglePipe.ALL;
    }
    Object.defineProperty(ApplicationListComponent.prototype, "appliedTo", {
        get: function () {
            return toggle_pipe_1.TogglePipe.APPLIED_TO;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationListComponent.prototype, "all", {
        get: function () {
            return toggle_pipe_1.TogglePipe.ALL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationListComponent.prototype, "notAppliedTo", {
        get: function () {
            return toggle_pipe_1.TogglePipe.NOT_APPLIED_TO;
        },
        enumerable: true,
        configurable: true
    });
    ApplicationListComponent.prototype.changeSelection = function (application, modify) {
        application = application ? application : new job_application_model_1.JobApplication();
        modify = modify ? modify : false;
        this.selectionChanged.emit({ application: application, modify: modify });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ApplicationListComponent.prototype, "selectionChanged", void 0);
    ApplicationListComponent = __decorate([
        core_1.Component({
            selector: 'application-list',
            templateUrl: '../../html/application-list.html',
            inputs: ['applications'],
            styleUrls: ['../../css/app-list.css'],
            providers: [toggle_pipe_1.TogglePipe]
        }), 
        __metadata('design:paramtypes', [])
    ], ApplicationListComponent);
    return ApplicationListComponent;
}());
exports.ApplicationListComponent = ApplicationListComponent;
//# sourceMappingURL=application-list.component.js.map