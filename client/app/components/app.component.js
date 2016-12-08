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
var application_service_1 = require('../services/application.service');
var AppComponent = (function () {
    function AppComponent(applicationService) {
        this.applicationService = applicationService;
        this.editCompany = false;
        this.showAppInput = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getApplications();
    };
    AppComponent.prototype.getApplications = function () {
        var _this = this;
        this.applicationService.getApplications().subscribe(function (data) {
            _this.applications = data;
        });
    };
    AppComponent.prototype.handleSelection = function (item) {
        if (!item.modify) {
            this.showDetails(item.application);
        }
        else {
            this.showApplicationInput(item.application);
        }
    };
    AppComponent.prototype.showDetails = function (application) {
        this.currentApplication = application;
    };
    AppComponent.prototype.showApplicationInput = function (application) {
        this.showAppInput = true;
        this.currentApplication = application;
    };
    AppComponent.prototype.closeDetails = function () {
        this.currentApplication = null;
    };
    AppComponent.prototype.closeApplicationInput = function (newApp) {
        this.showAppInput = false;
        if (newApp)
            this.getApplications();
        this.currentApplication = this.currentApplication.id ? this.currentApplication : null;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: '../../html/app.html',
            styleUrls: ['../../css/app.css'],
            providers: [application_service_1.ApplicationService]
        }), 
        __metadata('design:paramtypes', [application_service_1.ApplicationService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map