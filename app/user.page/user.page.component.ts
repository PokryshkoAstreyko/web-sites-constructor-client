/**
 * Created by Dima on 06.01.2017.
 */

import {Component, ViewChild, ViewChildren, NgModule, OnInit} from "@angular/core";
import {WebSite} from './website';
import {ModalText} from '../modals/modal.text'

declare var $: any;
@Component({
    moduleId: module.id,
    templateUrl: 'user.page.component.html',
    styleUrls: ['user.page.component.css'],

})
export class UserPageComponent implements OnInit{
    webSites: WebSite[];
    selectedWebSite: WebSite;
    achievementsClass="gray";
    modalText: ModalText=new ModalText();
    constructor() {
        let tags: string[]=[];
        let tag = "tag";
        this.webSites = [];
        this.selectedWebSite = new WebSite("", "",[], 3,1,"#6699ff");
        for (let i = 1; i <= 10; i++) {
            tags.push(tag + i);
            this.webSites.push(new WebSite("WebSite" + i, "blablablablablablablab" + i, tags,3,1,"#6699ff"));
        }
    }

    ngOnInit() {
        $('[data-toggle="tooltip"]').tooltip();
    }

    selectWebSite(event: any) {
        this.selectedWebSite = event;
    }
    DeleteWebSite() {
        this.webSites.splice(this.webSites.indexOf(this.selectedWebSite), 1);
    }

    gray(){
        this.achievementsClass="";
    }
}


