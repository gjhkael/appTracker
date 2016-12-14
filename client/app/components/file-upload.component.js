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
var file_asset_model_1 = require("../models/file-asset.model");
var server_connector_1 = require("../services/server-connector");
var file_type_service_1 = require("../services/file-type.service");
var FileUploadComponent = (function () {
    function FileUploadComponent(fileTypeService, connector) {
        var _this = this;
        this.fileTypeService = fileTypeService;
        this.connector = connector;
        this.close = new core_1.EventEmitter();
        this.newFile = new file_asset_model_1.FileAsset;
        this.showError = false;
        fileTypeService.getFileTypes().subscribe(function (result) {
            _this.fileTypes = result;
        });
    }
    Object.defineProperty(FileUploadComponent, "NO_FILE_ERROR", {
        get: function () {
            return "Please select a file to upload.";
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FileUploadComponent, "NO_TYPE_ERROR", {
        get: function () {
            return "Please select a file type.";
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    FileUploadComponent.prototype.closeSelf = function () {
        this.close.emit(null);
    };
    FileUploadComponent.prototype.submitFile = function (fileToUpload) {
        var _this = this;
        if (!fileToUpload) {
            this.error = FileUploadComponent.NO_FILE_ERROR;
            this.showError = true;
        }
        else if (!this.isIcon && !this.fileTypeSel) {
            this.error = FileUploadComponent.NO_TYPE_ERROR;
            this.showError = true;
        }
        else {
            this.connector.uploadFile(fileToUpload, this.entityUri, this.entityId, this.newFile.description, this.isIcon ? -1 : this.fileTypeSel)
                .map(function (res) { return res.json(); }).subscribe(function (data) {
                return _this.close.emit(data);
            });
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FileUploadComponent.prototype, "close", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], FileUploadComponent.prototype, "entityUri", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], FileUploadComponent.prototype, "entityId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], FileUploadComponent.prototype, "isIcon", void 0);
    FileUploadComponent = __decorate([
        core_1.Component({
            selector: 'file-upload',
            moduleId: module.id,
            templateUrl: '../../html/file-upload.html',
            styleUrls: ['../../css/file-upload.css'],
        }), 
        __metadata('design:paramtypes', [file_type_service_1.FileTypeService, server_connector_1.ServerConnector])
    ], FileUploadComponent);
    return FileUploadComponent;
}());
exports.FileUploadComponent = FileUploadComponent;
//# sourceMappingURL=file-upload.component.js.map