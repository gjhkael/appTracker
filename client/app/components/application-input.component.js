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
 * Created by pkulenkamp on 18/11/2016.
 */
var core_1 = require("@angular/core");
var server_connector_1 = require("../services/server-connector");
var contact_type_service_1 = require("../services/contact-type.service");
var job_application_model_1 = require("../models/job-application.model");
var company_service_1 = require("../services/company.service");
var ApplicationInputComponent = (function () {
    function ApplicationInputComponent(contactTypeService, companyService, connector) {
        var _this = this;
        this.contactTypeService = contactTypeService;
        this.companyService = companyService;
        this.connector = connector;
        this.close = new core_1.EventEmitter();
        this.companies = [];
        this.showError = false;
        this.searchCompanies = function (text$) {
            return text$
                .debounceTime(200)
                .distinctUntilChanged()
                .map(function (term) { return term === '' ? []
                : _this.companies.filter(function (v) { return new RegExp(term, 'gi').test(v.name); }).splice(0, 10); });
        };
        this.taFormatter = function (x) { return x.name; };
        contactTypeService.getContactTypes().subscribe(function (result) {
            _this.contactTypes = result;
        });
        companyService.getCompanies().subscribe(function (result) {
            _this.companies = result;
        });
    }
    ;
    ApplicationInputComponent.prototype.closeSelf = function () {
        this.close.emit(null);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ApplicationInputComponent.prototype, "close", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', job_application_model_1.JobApplication)
    ], ApplicationInputComponent.prototype, "application", void 0);
    ApplicationInputComponent = __decorate([
        core_1.Component({
            selector: 'app-input',
            templateUrl: '../../html/application-input.html',
            styleUrls: ['../../css/application-input.css'],
        }), 
        __metadata('design:paramtypes', [contact_type_service_1.ContactTypeService, company_service_1.CompanyService, server_connector_1.ServerConnector])
    ], ApplicationInputComponent);
    return ApplicationInputComponent;
}());
exports.ApplicationInputComponent = ApplicationInputComponent;
//# sourceMappingURL=application-input.component.js.map