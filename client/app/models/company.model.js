"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var identifiable_model_1 = require("./identifiable.model");
var Company = (function (_super) {
    __extends(Company, _super);
    function Company(companyJson) {
        _super.call(this, companyJson);
        companyJson = companyJson || {};
        this.name = companyJson.name || '';
        this.address = companyJson.address || '';
        this.iconId = companyJson.iconId || null;
    }
    return Company;
}(identifiable_model_1.Identifiable));
exports.Company = Company;
//# sourceMappingURL=company.model.js.map