/**
 * Created by pkulenkamp on 14/11/2016.
 */
import {FileType} from './file-type.model'
import {Identifiable} from "./identifiable.model";
export class FileAsset extends Identifiable{
    fileName: string;
    description: string;
    fileType: FileType;

    constructor(fileAssetJson?: any) {
        super(fileAssetJson);
        fileAssetJson = fileAssetJson || {};
        this.fileName = fileAssetJson.fileName || '';
        this.description = fileAssetJson.description || '';
        this.fileType = fileAssetJson.fileType || new FileType();
    }
}