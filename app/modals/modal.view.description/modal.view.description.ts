/**
 * Created by Dima on 18.01.2017.
 */
import {Component, Input, Output, EventEmitter, OnChanges} from "@angular/core";


import {Page} from "../../creator/page";
import {WebSite} from "../../user.page/website";
declare var $: any;
@Component({
    templateUrl: 'app/modals/modal.view.description/modal.view.description.html',
    selector: 'modalViewDescription',
})

export class ModalViewDescription {
    @Input() description: string;
    @Input() tags: string[];
    @Input() title: string;
}
