import {Component, OnInit} from "@angular/core";
import {WebSite} from "../user.page/website";
import {Http} from "@angular/http";
import {Tags} from "./tags";
import {Tag} from "../user.page/tag";
import {SiteCreationService} from "../_services/site.creation.service";

@Component({
    moduleId: module.id,
    templateUrl: 'main.html',
    styleUrls: ['main.css'],

})

export class Main implements OnInit {

    img: string = "";
    webSites: WebSite[] = [];
    selectedWebSite: WebSite = new WebSite("", "", [], 5, 1, "");

    constructor(private http: Http,
                private siteCreationService : SiteCreationService) {

    }

    ngOnInit(): void {

    }


    selectWebSite(event: any) {
        this.selectedWebSite = event;
    }



}
