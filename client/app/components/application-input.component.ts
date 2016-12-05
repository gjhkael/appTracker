/**
 * Created by pkulenkamp on 18/11/2016.
 */
import {Component, Output, Input, EventEmitter} from "@angular/core";
import {ServerConnector} from "../services/server-connector";
import {ContactTypeService} from "../services/contact-type.service";
import {ContactType} from "../models/contact-type.model";
import {JobApplication} from "../models/job-application.model";

@Component({
    selector: 'app-input',
    templateUrl: '../../html/application-input.html',
    styleUrls: ['../../css/application-input.css'],
})
export class ApplicationInputComponent {
    @Output() close = new EventEmitter();
    @Input() entityUri: string;
    @Input() entityId: number;
    @Input() isIcon: boolean;

    application: JobApplication;
    contactTypes: ContactType[];
    contactTypeSel: number;
    error: string;

    showError: boolean = false;

    constructor(private contactType: ContactTypeService, private connector: ServerConnector) {
        contactType.getContactTypes().subscribe(result => {
            this.contactTypes = result;
        });
    };

    closeSelf() {
        this.close.emit(null);
    }
}
