/**
 * Created by pkulenkamp on 25/10/2016.
 */
import {Injectable} from '@angular/core';
import {ServerConnector} from './server-connector';
import {Marshallers} from "../models/transformation/marshallers";
import {TypeService} from "./type.service";
import {ContactType} from "../models/contact-type.model";
import {ReplaySubject, Observable} from "rxjs/Rx";

@Injectable()
export abstract class ContactTypeService extends TypeService {
    contactTypes: ReplaySubject<ContactType[]> = new ReplaySubject<ContactType[]>(1);

    constructor(protected connector: ServerConnector) {
        super(connector);
        this.getTypes(ServerConnector.CONTACT_TYPE, Marshallers.ContactType).subscribe(result => {
            result=result.slice(1);
            this.contactTypes.next(result);
        });
    }

    public getContactTypes(): Observable<ContactType[]> {
        return this.contactTypes;
    }

}

