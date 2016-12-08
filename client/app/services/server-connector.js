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
 * Created by pkulenkamp on 11/11/2016.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var ServerConnector = (function () {
    function ServerConnector(_http) {
        this._http = _http;
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    Object.defineProperty(ServerConnector, "SERVER", {
        get: function () {
            return "http://podk.com:8080/";
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ServerConnector, "APPLICATION", {
        get: function () {
            return "application/";
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ServerConnector, "COMPANY", {
        get: function () {
            return "company/";
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ServerConnector, "FILE_TYPE", {
        get: function () {
            return "file-type/";
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ServerConnector, "CONTACT_TYPE", {
        get: function () {
            return "contact-type/";
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ServerConnector, "FILE_ASSET", {
        get: function () {
            return "file-asset/";
        },
        enumerable: true,
        configurable: true
    });
    ;
    ServerConnector.prototype.getEntityUrl = function (entityPath) {
        return ServerConnector.SERVER + entityPath;
    };
    ServerConnector.prototype.getFileUrl = function (id) {
        return ServerConnector.SERVER + ServerConnector.FILE_ASSET + 'download/' + id;
    };
    ServerConnector.prototype.uploadFile = function (file, entityUri, entityId, description, typeId) {
        var formData = new FormData();
        formData.append("file", file);
        var uploadUrl = ServerConnector.SERVER + entityUri + 'upload?id=' + entityId;
        uploadUrl += typeId ? '&fileTypeId=' + typeId : '';
        uploadUrl += description ? '&fileDescription=' + description : '';
        return this._http.post(uploadUrl, formData);
    };
    ServerConnector.prototype.postEntity = function (entityUri, entity, marshaller) {
        var _this = this;
        if (marshaller === void 0) { marshaller = null; }
        return this._http.post(this.getEntityUrl(entityUri) + 'create', JSON.stringify(entity), { headers: this.headers })
            .map(function (response) { return _this.fromJson(response, marshaller); });
    };
    ServerConnector.prototype.getEntity = function (entityUri, id, marshaller) {
        var _this = this;
        if (marshaller === void 0) { marshaller = null; }
        return this._http.get(this.getEntityUrl(entityUri) + id)
            .map(function (response) { return _this.fromJson(response, marshaller); });
        //.retryWhen((errors:any) => this.handleError(errors));
    };
    ServerConnector.prototype.getEntities = function (entityUri, marshaller) {
        var _this = this;
        if (marshaller === void 0) { marshaller = null; }
        return this._http.get(this.getEntityUrl(entityUri) + 'list')
            .map(function (response) { return _this.fromJson(response, marshaller); });
        //   .retryWhen((errors: any) => this.handleError(errors));
    };
    //TODO: Better error handling
    ServerConnector.prototype.handleError = function (error) {
    };
    ServerConnector.prototype.fromJson = function (res, marshaller) {
        if (marshaller === void 0) { marshaller = null; }
        var json = res.json();
        if (!marshaller) {
            return json;
        }
        if (Array.isArray(json)) {
            var result = [];
            json.forEach(function (e) { return result.push(marshaller.fromJson(e)); });
            return result;
        }
        else {
            return marshaller.fromJson(json);
        }
    };
    ServerConnector = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ServerConnector);
    return ServerConnector;
}());
exports.ServerConnector = ServerConnector;
//# sourceMappingURL=server-connector.js.map