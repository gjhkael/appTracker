/**
 * Created by pkulenkamp on 11/11/2016.
 */
import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Marshaller, Marshallers} from "../models/transformation/marshallers";
import 'rxjs/Rx';
import {FileAsset} from "../models/file-asset.model";

@Injectable()
export class ServerConnector {
    private headers: Headers;

    public static get SERVER(): string {
        return "http://podk.com:8080/"
    };

    public static get APPLICATION(): string {
        return "application/"
    };

    public static get COMPANY(): string {
        return "company/"
    };

    public static get CONTACT_TYPE(): string {
        return "contact-type/"
    };

    public static get FILE_TYPE(): string {
        return "file-type/"
    };

    public static get FILE_ASSET(): string {
        return "file-asset/"
    };

    constructor(private _http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public getEntityUrl(entityPath: string): string {
        return ServerConnector.SERVER + entityPath;
    }

    public getFileUrl(id: number): string {
        return ServerConnector.SERVER + ServerConnector.FILE_ASSET + 'download/' + id;
    }

    uploadFile(file: File, entityUri: string, entityId: number, description?: string, typeId?: number): Observable<any> {
        let formData = new FormData();
        formData.append("file", file);
        let uploadUrl: string = ServerConnector.SERVER + entityUri + 'upload?id=' + entityId;
        uploadUrl += typeId ? '&fileTypeId=' + typeId : '';
        uploadUrl += description ? '&fileDescription=' + description : '';
        return this._http.post(uploadUrl, formData);
    }

    public getEntity(entityUri: string, id: number, marshaller: Marshaller = null): Observable<any> {
        return this._http.get(this.getEntityUrl(entityUri) + id)
            .map(response => this.fromJson(response, marshaller));
        //.retryWhen((errors:any) => this.handleError(errors));
    }

    public getEntities(entityUri: string, marshaller: Marshaller = null): Observable<any[]> {
        return this._http.get(this.getEntityUrl(entityUri) + 'list')
            .map(response => this.fromJson(response, marshaller));
        //   .retryWhen((errors: any) => this.handleError(errors));
    }

    //TODO: Better error handling
    private handleError(error: Response) {

    }

    private fromJson(res: Response, marshaller: Marshaller = null): any {
        var json = res.json();
        if (!marshaller) {
            return json;
        }
        if (Array.isArray(json)) {
            var result: any[] = [];
            json.forEach(e => result.push(marshaller.fromJson(e)));
            return result;
        } else {
            return marshaller.fromJson(json);
        }
    }
}
