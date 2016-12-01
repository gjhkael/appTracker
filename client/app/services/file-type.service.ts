/**
 * Created by pkulenkamp on 25/10/2016.
 */
import {Injectable} from '@angular/core';
import {ServerConnector} from './server-connector';
import {Marshallers} from "../models/transformation/marshallers";
import {FileType} from "../models/file-type.model"
import {Observable, ReplaySubject} from 'rxjs/Rx';
import {TypeService} from "./type.service";

@Injectable()
export abstract class FileTypeService extends TypeService{
    fileTypes: ReplaySubject<FileType[]> = new ReplaySubject<FileType[]>(1);

    constructor(protected connector: ServerConnector) {
        super(connector);
        this.getTypes(ServerConnector.FILE_TYPE, Marshallers.FileType).subscribe(result => {
            result=result.slice(1);
            this.fileTypes.next(result);
        });
    }

    public getFileTypes(): Observable<FileType[]>  {
        return this.fileTypes;
    }
}
