/**
 * Created by Dima on 17.01.2017.
 */
import {Component, OnInit} from "@angular/core";
import {WebSite} from "../user.page/website";
import {Http} from "@angular/http";
import {Tags} from "./tags";
import {Tag} from "../user.page/tag";

@Component({
    moduleId: module.id,
    templateUrl: 'main.html',
    styleUrls: ['main.css'],

})

export class Main implements OnInit {
    img: string = "";
    webSites: WebSite[] = [];
    selectedWebSite: WebSite = new WebSite("", "", [], 5, 1, "");

    constructor(private http: Http) {
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

    ngOnInit(): void {
    }


    selectWebSite(event: any) {
        this.selectedWebSite = event;
    }

}
