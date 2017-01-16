import {Component, Input, Output, EventEmitter} from "@angular/core";
/**
 * Created by Dima on 15.01.2017.
 */


@Component({
    templateUrl: 'app/modals/modal.delete/modal.delete.html',
    selector: 'modalDelete'

})

export class ModalDelete {
    @Input() titleText: string;
    @Input() bodyText: string;
    @Output() deleting: EventEmitter<any>;

    constructor(){
        this.deleting = new EventEmitter<any>();
    }

    delete(){
        this.deleting.emit();
    }

}