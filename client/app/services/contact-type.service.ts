/**
 * Created by pkulenkamp on 25/10/2016.
 */
import {Injectable} from '@angular/core';
import {ServerConnector} from './server-connector';
import {Marshallers} from "../models/transformation/marshallers";
import {TypeService} from "./type.service";

@Injectable()
export abstract class ContactTypeService extends TypeService {
    contactTypes: {[key: number]: string};

    constructor(protected connector: ServerConnector) {
        super(connector);
        this.getTypes(ServerConnector.CONTACT_TYPE, Marshallers.ContactType).subscribe(result => {
            result = result.slice(1);
            for (let contactType of result) {
                this.contactTypes[contactType.id] = contactType.type;
            }
        });
    }

    public getContactTypes(): {[key: number]: string} {
        return this.contactTypes;
    }

    public getContactTypeName(id: number): string {
        return this.contactTypes[id];
    }
}

