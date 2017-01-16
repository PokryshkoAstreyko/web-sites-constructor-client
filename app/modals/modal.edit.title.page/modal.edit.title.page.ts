/**
 * Created by Dima on 15.01.2017.
 */
import {Component, Input, Output, EventEmitter, OnInit, OnChanges} from "@angular/core";
/**
 * Created by Dima on 15.01.2017.
 */
declare var $: any;

@Component({
    templateUrl: 'app/modals/modal.edit.title.page/modal.edit.title.page.html',
    selector: 'modalEditTitlePage'

})

export class ModalEditTitle{
    @Input() titleText: string;
    @Input() currentTitle: string;
    @Output() change: EventEmitter<string> = new EventEmitter<string>();
    editing: boolean=true;

    edit(title: any){
        console.log( $('#myInput'));
        if(title.value!=""){
            this.change.emit(title.value);
        }

        this.editing=true;
    }
    console(){
        console.log( $('#myInput'));
    }
}