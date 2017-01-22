import {Component, ViewChild, ViewChildren, NgModule, OnInit} from "@angular/core";
import {WebSite} from './website';
import {ModalText} from '../modals/modal.text'
import {Tag} from "./tag";
import {SiteCreationService} from "../_services/site.creation.service";
import {JsonParse} from "../_services/json.parse.service";
import {ActivatedRoute} from "@angular/router";
import {UserSitesEditableResponse} from "./UserSitesEditableResponse";


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


    editable : boolean;
    userIdParam : number;
    private subParams: any;

    constructor(private siteCreationService : SiteCreationService,
                private activatedRoute : ActivatedRoute) {

    }

    ngOnInit() {
        $('[data-toggle="tooltip"]').tooltip();
        this.getRouteParams();
        this.loadUserSites();

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


    loadUserSites(){
        //TODO изменить юзер id(ищет по юзеру, который делает запрос)
        this.siteCreationService.loadUserSitesByUserPage(this.userIdParam)
            .subscribe(
                data =>{
                    this.webSites = UserSitesEditableResponse.userEditableParseJSON(data.userSites);
                    this.editable = data.editable;
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

    getRouteParams(){
        //to get params from route
        this.subParams = this.activatedRoute.params.subscribe(params => {
            this.userIdParam = +params['id']; // (+) converts string 'id' to a number
            // In a real app: dispatch action to load the details here.
        });
    }
}


