/**
 * Created by pkulenkamp on 25/10/2016.
 */
import {Component, Output, EventEmitter} from '@angular/core';
import {TogglePipe} from "../pipes/toggle.pipe";
import {JobApplication} from "../models/job-application.model";


@Component({
    selector: 'application-list',
    templateUrl: '../../html/application-list.html',
    inputs: ['applications'],
    styleUrls: ['../../css/app-list.css'],
    providers: [TogglePipe]
})

export class ApplicationListComponent {
    @Output() selectionChanged = new EventEmitter();

    hideFilter: boolean = false;
    toggleSel: string = TogglePipe.ALL;

    get appliedTo() {
        return TogglePipe.APPLIED_TO;
    }

    get all() {
        return TogglePipe.ALL;
    }

    get notAppliedTo() {
        return TogglePipe.NOT_APPLIED_TO;
    }

    changeSelection(application?: JobApplication, modify?: boolean){
        application = application?application:new JobApplication();
        modify = modify?modify:false;
        this.selectionChanged.emit({application:application, modify:modify});
    }

}