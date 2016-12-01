"use strict";
/**
 * Created by pkulenkamp on 14/11/2016.
 */
var Identifiable = (function () {
    function Identifiable(identifierJson) {
        if (identifierJson) {
            this.id = identifierJson.id;
        }
    }
    return Identifiable;
}());
exports.Identifiable = Identifiable;
//# sourceMappingURL=identifiable.model.js.map