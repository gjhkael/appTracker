/**
 * Created by pkulenkamp on 05/12/2016.
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'mask-modal',
    moduleId: module.id,
    templateUrl: '../../html/modal.html',
    styleUrls: ['../../css/modal.css'],
})

export class ModalComponent {
    @Output() close = new EventEmitter();
    @Input() modalTitle: string;
    @Input() width: string = '50%';

    closeSelf() {
        this.close.emit(null);
    }
}
