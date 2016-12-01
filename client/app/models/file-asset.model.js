"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by pkulenkamp on 14/11/2016.
 */
var file_type_model_1 = require('./file-type.model');
var identifiable_model_1 = require("./identifiable.model");
var FileAsset = (function (_super) {
    __extends(FileAsset, _super);
    function FileAsset(fileAssetJson) {
        _super.call(this, fileAssetJson);
        fileAssetJson = fileAssetJson || {};
        this.fileName = fileAssetJson.fileName || '';
        this.description = fileAssetJson.description || '';
        this.fileType = fileAssetJson.fileType || new file_type_model_1.FileType();
    }
    return FileAsset;
}(identifiable_model_1.Identifiable));
exports.FileAsset = FileAsset;
//# sourceMappingURL=file-asset.model.js.map