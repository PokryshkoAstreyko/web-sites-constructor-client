/**
 * Created by Dima on 06.01.2017.
 */

import {Component, ViewChild, ViewChildren, NgModule} from "@angular/core";

import {ModalCreateForm} from './modal.create.form/modal.create.form';
import {IUserWebSite} from './user.page';
import {UserWebSite} from './user.page';
import {WebSiteRow} from './website.row';
import {el} from "@angular/platform-browser/testing/browser_util";

@Component({
    moduleId: module.id,
    templateUrl: 'user.page.component.html',
    styleUrls: ['user.page.component.css'],

})
export class UserPageComponent {
    userMainPage = '/app/user.page/img/MainPage.png'
    userBigMainPage = '/app/user.page/img/bigMainPage.png'
    userWebSites: UserWebSite[];
    webSiteRows: WebSiteRow[];
    webSitesdata: UserWebSite[];
    newTags: string[];
    newTitle: string;
    emptyString: "";
    newDescription: string;
    selectedWebSite: UserWebSite;
    deleteModal: boolean
    titleError: boolean;
    showCreateModal: boolean;

    constructor() {
        let tags: string[]
        let tag = "tag";
        tags = [];
        this.deleteModal = false;
        this.titleError = false;
        this.showCreateModal=true;
        this.webSitesdata = [];
        this.selectedWebSite = new UserWebSite("", "", "", []);
        for (let i = 1; i <=7; i++) {
            tags.push(tag + i);
            this.webSitesdata.push(new UserWebSite(this.userMainPage, "WebSite" + i, "blablablablablablablab" + i, tags));
        }
        this.toGridSite();
        console.log(this.webSitesdata);
    }

    toGridSite() {
        this.userWebSites = [];
        this.webSiteRows = [];
        this.newTags = [];
        this.newTitle="";
        this.newDescription='';

        for (let i = 0; i < this.webSitesdata.length; i++) {
            this.userWebSites.push(this.webSitesdata[i]);
            if ((i + 1) % 4 == 0) {
                this.webSiteRows.push(new WebSiteRow(this.userWebSites));
                this.userWebSites = [];
            }
        }
        if (this.userWebSites)
            this.webSiteRows.push(new WebSiteRow(this.userWebSites));
    }

    toAddTeg(event: any) {
        if (event) {
            this.newTags.push(event);
        }
    }

    toFormCreateWebSite(event: any) {
        this.newTags = [];
        this.newTitle='';
        this.newDescription='';
        this.titleError=false;
        this.showCreateModal=true;
    }

    toDeleteTeg(event: any) {
        this.newTags.splice(this.newTags.indexOf(event), 1);
    }

    toSelectWebSite(event: any) {
        this.selectedWebSite = event;
        this.deleteModal = false;
    }

    toSelectTD(event: any) {
        //event.colorTD = "#9999CC";
        event.colorTD = "#CCCCFF";

    }

    toUnSelectTD(event: any) {
        event.colorTD = "#ecf0f1";
    }

    toDeleteWebSite() {
        this.webSitesdata.splice(this.webSitesdata.indexOf(this.selectedWebSite), 1);

        this.toGridSite();
    }
    viewDeleteModal() {
        this.deleteModal = true;
    }
    toSubmitForm(){
        if(this.newTitle){
            this.titleError=false;
            this.webSitesdata.push(new UserWebSite(this.userMainPage, this.newTitle,this.newDescription,this.newTags));
            this.toGridSite();
        }
        else{
            this.titleError=true;
        }

    }
    toggleTitleError(){
        this.titleError=false;
    }
    tosaveNewTitle(event: any){
        if(event){
            this.showCreateModal=false;
        }
        else {
            this.showCreateModal=true;
        }
        this.newTitle=event;
    }
    tosaveNewDescription(event: any){
        this.newDescription=event;
    }
    tosaveNewMenu(event:any){
        console.log(event);
    }
    toConsole(event: any){
        console.log(event);

    }
}


