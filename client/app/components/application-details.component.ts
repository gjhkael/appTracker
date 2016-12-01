/**
 * Created by pkulenkamp on 25/10/2016.
 */
import {Component, Output, Input, EventEmitter} from '@angular/core';
import {ServerConnector} from '../services/server-connector';
import {FileAsset} from "../models/file-asset.model";
import {JobApplication} from "../models/job-application.model"

@Component({
    selector: 'application-details',
    templateUrl: '../../html/application-details.html',
    styleUrls: ['../../css/app-details.css'],
})

export class ApplicationDetailsComponent {
    @Output() close = new EventEmitter();
    @Input() application: JobApplication;

    showAddFile: boolean = false;
    isIcon: boolean = false;


    constructor(private connector: ServerConnector) {
    }

    closeSelf() {
        this.close.emit(true);
    }

    closeDialog(fileAsset: FileAsset) {
        if (fileAsset) {
            if (this.isIcon) {
                this.application.company.iconId = fileAsset.id;
            } else {
                this.application.applicationFiles.push(fileAsset);
            }
        }
        this.showAddFile = false;
    }

    get Uri() {
        if (this.isIcon) {
            return ServerConnector.COMPANY;
        }
        return ServerConnector.APPLICATION;
    }
}
