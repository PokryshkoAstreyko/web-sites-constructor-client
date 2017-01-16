/**
 * Created by Dima on 15.01.2017.
 */

import {Component, Input, Output, EventEmitter} from "@angular/core";


import {Page} from "../../creator/page";

@Component({
    templateUrl: 'app/modals/modal.view.site/modal.view.site.html',
    selector: 'modalViewSite',
    styleUrls: ['app/modals/modal.view.site/modal.view.site.css']
})

export class ModalViewSite {
    @Input() listOfPages: Page[];
    @Input() selectedViewPage: Page;
    @Input() typeMenu: boolean;
    @Input() colorMenu: string;

    selectViewPage(page: Page) {
        this.selectedViewPage = page;
    }
}
