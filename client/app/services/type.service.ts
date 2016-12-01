/**
 * Created by pkulenkamp on 25/10/2016.
 */
import {ServerConnector} from './server-connector';
import {Marshaller} from '../models/transformation/marshallers';
import {Observable} from 'rxjs/Rx';
import {Type} from '../models/type.model';

export abstract class TypeService {

    constructor(protected connector: ServerConnector) {
    }

    protected getTypes(entityUri: string, marshaller: Marshaller): Observable<Type[]> {
        return this.connector.getEntities(entityUri, marshaller);
    }
}
