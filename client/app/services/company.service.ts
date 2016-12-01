/**
 * Created by pkulenkamp on 25/10/2016.
 */
import {Injectable} from '@angular/core';
import {ServerConnector} from './server-connector';
import {Marshallers} from "../models/transformation/marshallers";
import {Observable} from 'rxjs/Rx';
import {Company} from "../models/company.model";

@Injectable()
export class CompanyService{
    
    constructor(private connector: ServerConnector) {}

    getCompanies(): Observable<Company>  {
        return this.connector.getEntity(ServerConnector.COMPANY, 2, Marshallers.Company);
    }
}
