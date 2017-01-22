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
var core_1 = require("@angular/core");
var website_1 = require("../user.page/website");
var http_1 = require("@angular/http");
var site_creation_service_1 = require("../_services/site.creation.service");
var Main = (function () {
    function Main(http, siteCreationService) {
        this.http = http;
        this.siteCreationService = siteCreationService;
        this.img = "";
        this.webSites = [];
        this.selectedWebSite = new website_1.WebSite("", "", [], 5, 1, "");
    }
    Main.prototype.ngOnInit = function () {
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
    __metadata("design:paramtypes", [http_1.Http,
        site_creation_service_1.SiteCreationService])
], Main);
exports.Main = Main;
//# sourceMappingURL=main.js.map