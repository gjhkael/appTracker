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
var server_connector_1 = require('../services/server-connector');
var job_application_model_1 = require("../models/job-application.model");
var contact_type_service_1 = require("../services/contact-type.service");
var ApplicationDetailsComponent = (function () {
    function ApplicationDetailsComponent(connector, contactTypeService) {
        this.connector = connector;
        this.contactTypeService = contactTypeService;
        this.close = new core_1.EventEmitter();
        this.showAddFile = false;
        this.isIcon = false;
    }
    ApplicationDetailsComponent.prototype.closeSelf = function () {
        this.close.emit(true);
    };
    ApplicationDetailsComponent.prototype.closeDialog = function (fileAsset) {
        if (fileAsset) {
            if (this.isIcon) {
                this.application.company.iconId = fileAsset.id;
            }
            else {
                this.application.applicationFiles.push(fileAsset);
            }
        }
        this.showAddFile = false;
    };
    Object.defineProperty(ApplicationDetailsComponent.prototype, "Uri", {
        get: function () {
            if (this.isIcon) {
                return server_connector_1.ServerConnector.COMPANY;
            }
            return server_connector_1.ServerConnector.APPLICATION;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ApplicationDetailsComponent.prototype, "close", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', job_application_model_1.JobApplication)
    ], ApplicationDetailsComponent.prototype, "application", void 0);
    ApplicationDetailsComponent = __decorate([
        core_1.Component({
            selector: 'application-details',
            templateUrl: '../../html/application-details.html',
            styleUrls: ['../../css/app-details.css'],
        }), 
        __metadata('design:paramtypes', [server_connector_1.ServerConnector, contact_type_service_1.ContactTypeService])
    ], ApplicationDetailsComponent);
    return ApplicationDetailsComponent;
}());
exports.ApplicationDetailsComponent = ApplicationDetailsComponent;
//# sourceMappingURL=application-details.component.js.map