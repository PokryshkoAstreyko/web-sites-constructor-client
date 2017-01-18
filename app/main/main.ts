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
    tags =[
        {text: "Ipsum", weight: 9},
        {text: "Dolor", weight: 6},
    ];

    webSites: WebSite[] = [];
    selectedWebSite: WebSite = new WebSite("", "", [], 5, 1, "");

    constructor(private http: Http) {
        let tags: string[] = [];
        for (let i = 1; i <= 5; i++) {
            tags.push("tag" + i);
            this.webSites.push(new WebSite("WebSite" + i, "blablablablablablablab" + i, tags, 5, 1, "#6699ff"));
        }
    }

    ngOnInit(): void {
        this.http.get("app/main/tags.json")
            .subscribe((tags) => {
                this.tags = tags.json();
                console.log(tags.json());
                console.log(this.tags);
            });
        console.log("2323");
        console.log(this.tags);

    }


    selectWebSite(event: any) {
        this.selectedWebSite = event;
        console.log(this.tags);
    }

}
