/**
 * Created by Dima on 18.01.2017.
 */
import {Component, Input, Output, EventEmitter, OnChanges} from "@angular/core";


import {Page} from "../../creator/page";
import {WebSite} from "../../user.page/website";
import {Tag} from "../../user.page/tag";
declare var $: any;
@Component({
    templateUrl: 'app/modals/modal.view.description/modal.view.description.html',
    selector: 'modalViewDescription',
})

export class ModalViewDescription {
    @Input() description: string;
    @Input() tags: Tag[];
    @Input() title: string;
}
