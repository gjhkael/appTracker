"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var identifiable_model_1 = require("./identifiable.model");
/**
 * Created by pkulenkamp on 14/11/2016.
 */
var Type = (function (_super) {
    __extends(Type, _super);
    function Type(typeJson) {
        _super.call(this, typeJson);
        typeJson = typeJson || {};
        this.type = typeJson.type || '';
    }
    return Type;
}(identifiable_model_1.Identifiable));
exports.Type = Type;
//# sourceMappingURL=type.model.js.map