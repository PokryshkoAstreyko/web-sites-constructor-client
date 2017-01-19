/**
 * Created by Dima on 06.01.2017.
 */

import {Component, ViewChild, ViewChildren, NgModule, OnInit} from "@angular/core";
import {WebSite} from './website';
import {ModalText} from '../modals/modal.text'
import {Tag} from "./tag";

declare var $: any;
@Component({
    moduleId: module.id,
    templateUrl: 'user.page.component.html',
    styleUrls: ['user.page.component.css'],

})
export class UserPageComponent implements OnInit{
    webSites: WebSite[]=[];
    selectedWebSite: WebSite = new WebSite("", "", [], 5, 1, "");
    achievementsClass="gray";
    modalText: ModalText=new ModalText();

    constructor() {
        let tags: string[] = [];
        let tag: Tag[]=[];
        for (let i = 1; i <= 10; i++) {
            tags.push("tag" + i);
        }
        for(let i=0;i<tags.length;i++){
            tag.push(new Tag(tags[i]));
            this.webSites.push(new WebSite("WebSite" + i, "blablablablablablablab" + i, tag, 5, 1, "#6699ff"));
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


