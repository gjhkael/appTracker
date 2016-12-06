/**
 * Created by pkulenkamp on 18/11/2016.
 */
import {Component, Output, Input, EventEmitter} from "@angular/core";
import {FileAsset} from "../models/file-asset.model";
import {FileType} from "../models/file-type.model";
import {ServerConnector} from "../services/server-connector";
import {FileTypeService} from "../services/file-type.service";

@Component({
    selector: 'file-upload',
    templateUrl: '../../html/file-upload.html',
    styleUrls: ['../../css/file-upload.css'],
})
export class FileUploadComponent {
    @Output() close = new EventEmitter();
    @Input() entityUri: string;
    @Input() entityId: number;
    @Input() isIcon: boolean;

    newFile: FileAsset = new FileAsset;
    fileTypes: FileType[];
    fileTypeSel: number;
    error: string;

    showError: boolean = false;

    static get NO_FILE_ERROR(): string {
        return "Please select a file to upload."
    };

    static get NO_TYPE_ERROR(): string {
        return "Please select a file type."
    };

    constructor(private fileTypeService: FileTypeService, private connector: ServerConnector) {
        fileTypeService.getFileTypes().subscribe(result => {
            this.fileTypes = result;
        });
    };

    closeSelf() {
        this.close.emit(null);
    }

    submitFile(fileToUpload: File) {
        if (!fileToUpload) {
            this.error = FileUploadComponent.NO_FILE_ERROR;
            this.showError = true;
        }
        else if (!this.isIcon && !this.fileTypeSel) {
            this.error = FileUploadComponent.NO_TYPE_ERROR;
            this.showError = true;
        }
        else {
            this.connector.uploadFile(fileToUpload, this.entityUri, this.entityId, this.newFile.description, this.isIcon?-1:this.fileTypeSel)
                .map(res => res.json()).subscribe((data) =>
                this.close.emit(data));
        }

    }
}
