/**
 * Created by pkulenkamp on 25/10/2016.
 */
import {Injectable} from '@angular/core';
import {ServerConnector} from './server-connector';
import {Marshallers} from "../models/transformation/marshallers";
import {Observable} from 'rxjs/Rx';
import {JobApplication} from "../models/job-application.model";

@Injectable()
export class ApplicationService{
    
    constructor(private connector: ServerConnector) {}

    getApplication(id: number): Observable<JobApplication>  {
        return this.connector.getEntity(ServerConnector.APPLICATION, id, Marshallers.JobApplication);
    }

    getApplications(): Observable<JobApplication[]> {
        return this.connector.getEntities(ServerConnector.APPLICATION, Marshallers.JobApplication)
    }
}