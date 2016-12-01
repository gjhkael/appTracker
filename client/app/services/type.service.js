"use strict";
var TypeService = (function () {
    function TypeService(connector) {
        this.connector = connector;
    }
    TypeService.prototype.getTypes = function (entityUri, marshaller) {
        return this.connector.getEntities(entityUri, marshaller);
    };
    return TypeService;
}());
exports.TypeService = TypeService;
//# sourceMappingURL=type.service.js.map