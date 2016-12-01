/**
 * Created by pkulenkamp on 14/11/2016.
 */
export abstract class Identifiable {
    public id: number;

    constructor(identifierJson?: any) {
        if (identifierJson) {
            this.id = identifierJson.id;
        }
    }
}