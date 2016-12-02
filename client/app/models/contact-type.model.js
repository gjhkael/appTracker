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
var ContactType = (function (_super) {
    __extends(ContactType, _super);
    function ContactType(contactTypeJson) {
        _super.call(this, contactTypeJson);
    }
    return ContactType;
}(type_model_1.Type));
exports.ContactType = ContactType;
//# sourceMappingURL=contact-type.model.js.map