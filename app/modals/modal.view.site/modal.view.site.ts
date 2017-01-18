/**
 * Created by Dima on 15.01.2017.
 */

import {Component, Input, Output, EventEmitter, OnChanges} from "@angular/core";


import {Page} from "../../creator/page";
import {WebSite} from "../../user.page/website";
declare var $: any;
@Component({
    templateUrl: 'app/modals/modal.view.site/modal.view.site.html',
    selector: 'modalViewSite',
})

export class ModalViewSite implements OnChanges{
    @Input() webSite: WebSite;
    @Input() selectedViewPage: Page;
    @Input() colorMenu: string;

    ngOnChanges(){
        $('#nav2').css("background-color",this.colorMenu);
        console.log(this.webSite);
    }

    selectViewPage(page: Page) {
        this.selectedViewPage = page;
    }
}
