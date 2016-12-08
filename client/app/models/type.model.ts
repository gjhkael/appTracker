import {Identifiable} from "./identifiable.model";
/**
 * Created by pkulenkamp on 14/11/2016.
 */
export class Type extends Identifiable {
    type: string;

    constructor(typeJson?:any) {
        super(typeJson);
        typeJson=typeJson || {};
        this.type=typeJson.type || null;
    }
}