/**
 * Created by pkulenkamp on 14/11/2016.
 */
import {JobApplication} from '../job-application.model';
import {Company} from '../company.model';
import {FileType} from '../file-type.model';
import {FileAsset} from '../file-asset.model'

export interface Marshaller {
    fromJson(json: any) : any;
}

export class Marshallers {
    public static Company: Marshaller = { fromJson: (json: any) => {return new Company(json); }};
    public static JobApplication: Marshaller = { fromJson: (json: any) => {return new JobApplication(json); }};
    public static FileType: Marshaller = { fromJson: (json: any) => {return new FileType(json); }};
    public static FileAsset: Marshaller = { fromJson: (json: any) => {return new FileAsset(json); }};
}