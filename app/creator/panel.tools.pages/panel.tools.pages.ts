/**
 * Created by Dima on 16.01.2017.
 */

import {Component, Input, Output, EventEmitter} from "@angular/core";

import {Container} from "../../creator/container";
import {LineContainer} from "../../creator/line.container";
import {Page} from "../../creator/page";
import {ModalText} from '../../modals/modal.text';

@Component({
    templateUrl: 'app/creator/panel.tools.pages/panel.tools.pages.html',
    selector: 'panelToolsPages',
})

export class PanelToolsPages {
    @Input() listOfPages: Page[];
    @Input() selectedPage: Page;
    @Output() selectingPage: EventEmitter<any>= new EventEmitter<any>();
    @Output() removingPage: EventEmitter<any>= new EventEmitter<any>();
    @Output() addingPage: EventEmitter<any> = new EventEmitter<any>();
    @Output() editingPage: EventEmitter<any> = new EventEmitter<any>();

    deletedPageID: number;
    modalText: ModalText= new ModalText();
    constructor(){
    }
    addPage(title: string){
        this.addingPage.emit(title);
        if (this.listOfPages.length == 1) {
            this.selectPage(this.listOfPages[0]);
        }
    }
    editTitlePage(title: string) {
        this.editingPage.emit(title);
    }

    removePage() {
        this.removingPage.emit(this.deletedPageID);
        if (this.listOfPages.length == 0) {
            this.selectedPage = new Page("");
        }
        this.selectedPage = this.listOfPages[0];
    }
    selectDeletePageID(page: number) {
        this.deletedPageID = page;
    }
    selectPage(event: any) {
        this.selectedPage = event;
        this.selectingPage.emit(this.selectedPage);
    }

}