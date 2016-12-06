/**
 * Created by pkulenkamp on 25/10/2016.
 */
import {Injectable} from '@angular/core';
import {ServerConnector} from './server-connector';
import {Marshallers} from "../models/transformation/marshallers";
import {Observable, ReplaySubject} from 'rxjs/Rx';
import {Company} from "../models/company.model";

@Injectable()
export class CompanyService{
    companies: ReplaySubject<Company[]> = new ReplaySubject<Company[]>(1);

    constructor(private connector: ServerConnector) {
        this.connector.getEntities(ServerConnector.COMPANY, Marshallers.Company).subscribe(result => {
            this.companies.next(result);
        });
    }

    getCompanies(): Observable<Company[]>  {
        return this.companies;
    }

    reloadCompanies(): Observable<Company[]> {
        this.connector.getEntities(ServerConnector.COMPANY, Marshallers.Company).subscribe(result => {
            this.companies.next(result);
        });
        return this.companies;
    }
}
