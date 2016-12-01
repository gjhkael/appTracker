"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by pkulenkamp on 14/11/2016.
 */
var type_model_1 = require('./type.model');
var FileType = (function (_super) {
    __extends(FileType, _super);
    function FileType(fileTypeJson) {
        _super.call(this, fileTypeJson);
    }
    return FileType;
}(type_model_1.Type));
exports.FileType = FileType;
//# sourceMappingURL=file-type.model.js.map