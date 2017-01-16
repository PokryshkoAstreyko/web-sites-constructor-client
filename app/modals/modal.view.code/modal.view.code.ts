/**
 * Created by Dima on 15.01.2017.
 */

import {Component, Input, Output, EventEmitter} from "@angular/core";


import {Page} from "../../creator/page";
import {PageToHTML} from "../../creator/PageToHTML";

@Component({
    templateUrl: 'app/modals/modal.view.code/modal.view.code.html',
    selector: 'modalViewCode',
})

export class ModalViewCode {
    @Input() listOfPages: Page[];
    @Input() selectedViewPage: Page;
    @Input() HTMLCode: string;


    selectViewPage(page: Page) {
        this.selectedViewPage = page;
        this.HTMLCode = PageToHTML.transfer(page);
    }
}
