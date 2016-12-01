import {Identifiable} from "./identifiable.model";

export class Company extends Identifiable{
    name: string;
    address: string;
    iconId: number;

    constructor(companyJson?: any) {
        super(companyJson);
        companyJson = companyJson || {};
        this.name = companyJson.name || '';
        this.address = companyJson.address || '';
        this.iconId = companyJson.iconId || null;
    }
}