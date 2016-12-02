"use strict";
/**
 * Created by pkulenkamp on 14/11/2016.
 */
var job_application_model_1 = require('../job-application.model');
var company_model_1 = require('../company.model');
var file_type_model_1 = require('../file-type.model');
var file_asset_model_1 = require('../file-asset.model');
var contact_type_model_1 = require("../contact-type.model");
var Marshallers = (function () {
    function Marshallers() {
    }
    Marshallers.Company = { fromJson: function (json) { return new company_model_1.Company(json); } };
    Marshallers.JobApplication = { fromJson: function (json) { return new job_application_model_1.JobApplication(json); } };
    Marshallers.FileType = { fromJson: function (json) { return new file_type_model_1.FileType(json); } };
    Marshallers.ContactType = { fromJson: function (json) { return new contact_type_model_1.ContactType(json); } };
    Marshallers.FileAsset = { fromJson: function (json) { return new file_asset_model_1.FileAsset(json); } };
    return Marshallers;
}());
exports.Marshallers = Marshallers;
//# sourceMappingURL=marshallers.js.map