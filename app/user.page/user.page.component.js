/**
 * Created by Dima on 06.01.2017.
 */
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
var user_page_1 = require("./user.page");
var website_row_1 = require("./website.row");
var UserPageComponent = (function () {
    function UserPageComponent() {
        this.userMainPage = '/app/user.page/img/MainPage.png';
        this.userBigMainPage = '/app/user.page/img/bigMainPage.png';
        var tags;
        var tag = "tag";
        tags = [];
        this.deleteModal = false;
        this.titleError = false;
        this.showCreateModal = true;
        this.webSitesdata = [];
        this.selectedWebSite = new user_page_1.UserWebSite("", "", "", []);
        for (var i = 1; i <= 7; i++) {
            tags.push(tag + i);
            this.webSitesdata.push(new user_page_1.UserWebSite(this.userMainPage, "WebSite" + i, "blablablablablablablab" + i, tags));
        }
        this.toGridSite();
        console.log(this.webSitesdata);
    }
    UserPageComponent.prototype.toGridSite = function () {
        this.userWebSites = [];
        this.webSiteRows = [];
        this.newTags = [];
        this.newTitle = "";
        this.newDescription = '';
        for (var i = 0; i < this.webSitesdata.length; i++) {
            this.userWebSites.push(this.webSitesdata[i]);
            if ((i + 1) % 4 == 0) {
                this.webSiteRows.push(new website_row_1.WebSiteRow(this.userWebSites));
                this.userWebSites = [];
            }
        }
        if (this.userWebSites)
            this.webSiteRows.push(new website_row_1.WebSiteRow(this.userWebSites));
    };
    UserPageComponent.prototype.toAddTeg = function (event) {
        if (event) {
            this.newTags.push(event);
        }
    };
    UserPageComponent.prototype.toFormCreateWebSite = function (event) {
        this.newTags = [];
        this.newTitle = '';
        this.newDescription = '';
        this.titleError = false;
        this.showCreateModal = true;
    };
    UserPageComponent.prototype.toDeleteTeg = function (event) {
        this.newTags.splice(this.newTags.indexOf(event), 1);
    };
    UserPageComponent.prototype.toSelectWebSite = function (event) {
        this.selectedWebSite = event;
        this.deleteModal = false;
    };
    UserPageComponent.prototype.toSelectTD = function (event) {
        //event.colorTD = "#9999CC";
        event.colorTD = "#CCCCFF";
    };
    UserPageComponent.prototype.toUnSelectTD = function (event) {
        event.colorTD = "#ecf0f1";
    };
    UserPageComponent.prototype.toDeleteWebSite = function () {
        this.webSitesdata.splice(this.webSitesdata.indexOf(this.selectedWebSite), 1);
        this.toGridSite();
    };
    UserPageComponent.prototype.viewDeleteModal = function () {
        this.deleteModal = true;
    };
    UserPageComponent.prototype.toSubmitForm = function () {
        if (this.newTitle) {
            this.titleError = false;
            this.webSitesdata.push(new user_page_1.UserWebSite(this.userMainPage, this.newTitle, this.newDescription, this.newTags));
            this.toGridSite();
        }
        else {
            this.titleError = true;
        }
    };
    UserPageComponent.prototype.toggleTitleError = function () {
        this.titleError = false;
    };
    UserPageComponent.prototype.tosaveNewTitle = function (event) {
        if (event) {
            this.showCreateModal = false;
        }
        else {
            this.showCreateModal = true;
        }
        this.newTitle = event;
    };
    UserPageComponent.prototype.tosaveNewDescription = function (event) {
        this.newDescription = event;
    };
    UserPageComponent.prototype.tosaveNewMenu = function (event) {
        console.log(event);
    };
    UserPageComponent.prototype.toConsole = function (event) {
        console.log(event);
    };
    return UserPageComponent;
}());
UserPageComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'user.page.component.html',
        styleUrls: ['user.page.component.css'],
    }),
    __metadata("design:paramtypes", [])
], UserPageComponent);
exports.UserPageComponent = UserPageComponent;
//# sourceMappingURL=user.page.component.js.map