/**
 * Created by pkulenkamp on 25/10/2016.
 */
import {Component, Output, EventEmitter} from '@angular/core';
import {TogglePipe} from "../pipes/toggle.pipe";


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

    changeSelection(item) {
        this.selectionChanged.emit(item);
    }

}