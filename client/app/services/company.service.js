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
var server_connector_1 = require('./server-connector');
var marshallers_1 = require("../models/transformation/marshallers");
var CompanyService = (function () {
    function CompanyService(connector) {
        this.connector = connector;
    }
    CompanyService.prototype.getCompanies = function () {
        return this.connector.getEntity(server_connector_1.ServerConnector.COMPANY, 2, marshallers_1.Marshallers.Company);
    };
    CompanyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [server_connector_1.ServerConnector])
    ], CompanyService);
    return CompanyService;
}());
exports.CompanyService = CompanyService;
//# sourceMappingURL=company.service.js.map