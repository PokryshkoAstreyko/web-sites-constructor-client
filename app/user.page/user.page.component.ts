import {Component, ViewChild, ViewChildren, NgModule, OnInit} from "@angular/core";
import {WebSite} from './website';
import {ModalText} from '../modals/modal.text'
import {Tag} from "./tag";
import {SiteCreationService} from "../_services/site.creation.service";
import {JsonParse} from "../_services/json.parse.service";


declare var $: any;
@Component({
    moduleId: module.id,
    templateUrl: 'user.page.component.html',
    styleUrls: ['user.page.component.css'],

})
export class UserPageComponent implements OnInit{
    webSites: WebSite[] = [];
    selectedWebSite: WebSite = new WebSite("", "", [], 5, 1, "");
    achievementsClass = "gray";
    modalText: ModalText = new ModalText();

    constructor(private siteCreationService : SiteCreationService) {

    }

    ngOnInit() {
        $('[data-toggle="tooltip"]').tooltip();
        this.loadAllUserSites();
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

    loadAllUserSites(){
        //TODO изменить юзер id(ищет по юзеру, который делает запрос)
        this.siteCreationService.loadAllUserSites()
            .subscribe(
                data =>{
                         this.webSites = data;
                         this.getPagesFromString()
                        },
                error => alert(error),
                () => console.log("Getting WebSites FINISHED"))
    }

    getPagesFromString(){
        for (let site of this.webSites){
            site.pages = JsonParse.ourParseJSON(site.pagesString);
        }
        console.log(this.webSites);
    }
}


