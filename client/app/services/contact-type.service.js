"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var type_service_1 = require("./type.service");
var ContactTypeService = (function (_super) {
    __extends(ContactTypeService, _super);
    function ContactTypeService(connector) {
        var _this = this;
        _super.call(this, connector);
        this.connector = connector;
        this.getTypes(server_connector_1.ServerConnector.CONTACT_TYPE, marshallers_1.Marshallers.ContactType).subscribe(function (result) {
            result = result.slice(1);
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var contactType = result_1[_i];
                _this.contactTypes[contactType.id] = contactType.type;
            }
        });
    }
    ContactTypeService.prototype.getContactTypes = function () {
        return this.contactTypes;
    };
    ContactTypeService.prototype.getContactTypeName = function (id) {
        return this.contactTypes[id];
    };
    ContactTypeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [server_connector_1.ServerConnector])
    ], ContactTypeService);
    return ContactTypeService;
}(type_service_1.TypeService));
exports.ContactTypeService = ContactTypeService;
//# sourceMappingURL=contact-type.service.js.map