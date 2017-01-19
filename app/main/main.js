"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Dima on 17.01.2017.
 */
var core_1 = require("@angular/core");
var website_1 = require("../user.page/website");
var http_1 = require("@angular/http");
var Main = (function () {
    function Main(http) {
        var _this = this;
        this.http = http;
        this.img = "";
        this.tags = [{ text: "tag", weight: 9 },
            { text: "tag" },
            { text: "tag" },
            { text: "tag" },
            { text: "tag" },
            { text: "tag" },
            { text: "tag" },
            { text: "tag" },
            { text: "tag" },
            { text: "tag2" },
            { text: "tag2" },
            { text: "tag2" },
            { text: "tag2" },
            { text: "tag2" },
            { text: "tag2" },
            { text: "tag2" },
            { text: "tag2" },
            { text: "tag3" },
            { text: "tag3" },
            { text: "tag3" },
            { text: "tag3" },
            { text: "tag3" },
        ];
        this.webSites = [];
        this.selectedWebSite = new website_1.WebSite("", "", [], 5, 1, "");
        var tags = [];
        for (var i = 1; i <= 10; i++) {
            tags.push("tag" + i);
            this.webSites.push(new website_1.WebSite("WebSite" + i, "blablablablablablablab" + i, tags, 5, 1, "#6699ff"));
        }
        console.log(this.tags);
        this.http.get("app/main/tags.json")
            .subscribe(function (tags) {
            _this.tags = tags.json();
        });
    }
    Main.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("app/main/tags.json")
            .subscribe(function (tags) {
            _this.tags = tags.json();
        });
    };
    Main.prototype.selectWebSite = function (event) {
        this.selectedWebSite = event;
    };
    return Main;
}());
Main = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'main.html',
        styleUrls: ['main.css'],
    }),
    __metadata("design:paramtypes", [http_1.Http])
], Main);
exports.Main = Main;
//# sourceMappingURL=main.js.map