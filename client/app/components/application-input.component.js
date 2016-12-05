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
var ApplicationInputComponent = (function () {
    function ApplicationInputComponent(contactType, connector) {
        var _this = this;
        this.contactType = contactType;
        this.connector = connector;
        this.close = new core_1.EventEmitter();
        this.showError = false;
        contactType.getContactTypes().subscribe(function (result) {
            _this.contactTypes = result;
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
        __metadata('design:type', String)
    ], ApplicationInputComponent.prototype, "entityUri", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ApplicationInputComponent.prototype, "entityId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ApplicationInputComponent.prototype, "isIcon", void 0);
    ApplicationInputComponent = __decorate([
        core_1.Component({
            selector: 'app-input',
            templateUrl: '../../html/application-input.html',
            styleUrls: ['../../css/application-input.css'],
        }), 
        __metadata('design:paramtypes', [contact_type_service_1.ContactTypeService, server_connector_1.ServerConnector])
    ], ApplicationInputComponent);
    return ApplicationInputComponent;
}());
exports.ApplicationInputComponent = ApplicationInputComponent;
//# sourceMappingURL=application-input.component.js.map