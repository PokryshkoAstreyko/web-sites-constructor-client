/**
 * Created by Dima on 17.01.2017.
 */
import {Component, OnInit} from "@angular/core";
import {WebSite} from "../user.page/website";
import {Http} from "@angular/http";
import {Tags} from "./tags";

@Component({
    moduleId: module.id,
    templateUrl: 'main.html',
    styleUrls: ['main.css'],

})

export class Main implements OnInit {
    img: string = "";
    tags =[{text: "tag" ,weight: 9},
        {text: "tag" },
        {text: "tag" },
        {text: "tag" },
        {text: "tag"},
        {text: "tag" },
        {text: "tag"},
        {text: "tag" },
        {text: "tag" },

        {text: "tag2" },
        {text: "tag2" },
        {text: "tag2" },
        {text: "tag2" },
        {text: "tag2" },
        {text: "tag2" },
        {text: "tag2" },
        {text: "tag2" },
        {text: "tag3" },
        {text: "tag3" },
        {text: "tag3" },
        {text: "tag3" },
        {text: "tag3" },
        ];

    webSites: WebSite[] = [];
    selectedWebSite: WebSite = new WebSite("", "", [], 5, 1, "");

    constructor(private http: Http) {
        let tags: string[] = [];
        for (let i = 1; i <= 10; i++) {
            tags.push("tag" + i);
            this.webSites.push(new WebSite("WebSite" + i, "blablablablablablablab" + i, tags, 5, 1, "#6699ff"));
        }
        console.log(this.tags);
        this.http.get("app/main/tags.json")
            .subscribe((tags) => {
                this.tags = tags.json();
            });
    }

    ngOnInit(): void {
        this.http.get("app/main/tags.json")
            .subscribe((tags) => {
                this.tags = tags.json();
            });
    }


    selectWebSite(event: any) {
        this.selectedWebSite = event;
    }

}
