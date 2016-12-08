import {Company} from './company.model';
import {ContactType} from "./contact-type.model";
import {FileAsset} from "./file-asset.model";
import {Identifiable} from "./identifiable.model";

export class JobApplication extends Identifiable{
    company: Company;
    tag: string;
    position: string;
    appliedTo: boolean;
    contactType: ContactType;
    contactInfo: string;
    dateApplied: Date;
    followUp: Date;
    applicationFiles: FileAsset[];
    notes: string;

    constructor(applicationJson?: any) {
        super(applicationJson);
        applicationJson = applicationJson || {};
        //If a Status json extract the application
        if (applicationJson.message)
            applicationJson = applicationJson.entity;
        this.company = applicationJson.company || new Company();
        this.tag = applicationJson.tag || '';
        this.position = applicationJson.position || '';
        this.appliedTo = applicationJson.appliedTo || false;
        this.contactType = applicationJson.contactType || new ContactType();
        this.contactInfo = applicationJson.contactInfo || '';
        this.dateApplied = applicationJson.dateApplied || null;
        this.followUp = applicationJson.followUp || null;
        this.applicationFiles = applicationJson.applicationFiles || null;
        this.notes = applicationJson.notes || '';
    }
}
