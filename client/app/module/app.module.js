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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('../components/app.component');
var application_details_component_1 = require('../components/application-details.component');
var application_list_component_1 = require('../components/application-list.component');
var file_upload_component_1 = require('../components/file-upload.component');
var application_item_component_1 = require('../components/application-item.component');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var text_pipe_1 = require('../pipes/text.pipe');
var toggle_pipe_1 = require('../pipes/toggle.pipe');
var file_type_service_1 = require("../services/file-type.service");
var server_connector_1 = require("../services/server-connector");
var contact_type_service_1 = require("../services/contact-type.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, ng_bootstrap_1.NgbModule.forRoot()],
            declarations: [app_component_1.AppComponent, application_details_component_1.ApplicationDetailsComponent, application_list_component_1.ApplicationListComponent, file_upload_component_1.FileUploadComponent, application_item_component_1.ApplicationItemComponent, text_pipe_1.SearchPipe, toggle_pipe_1.TogglePipe],
            bootstrap: [app_component_1.AppComponent],
            providers: [server_connector_1.ServerConnector,
                { provide: file_type_service_1.FileTypeService, useClass: file_type_service_1.FileTypeService, useFactory: null },
                { provide: contact_type_service_1.ContactTypeService, useClass: contact_type_service_1.ContactTypeService, useFactory: null }]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map