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
var website_1 = require("./website");
var modal_text_1 = require("../modals/modal.text");
var site_creation_service_1 = require("../_services/site.creation.service");
var json_parse_service_1 = require("../_services/json.parse.service");
var UserPageComponent = (function () {
    function UserPageComponent(siteCreationService) {
        this.siteCreationService = siteCreationService;
        this.webSites = [];
        this.selectedWebSite = new website_1.WebSite("", "", [], 5, 1, "");
        this.achievementsClass = "gray";
        this.modalText = new modal_text_1.ModalText();
    }
    UserPageComponent.prototype.ngOnInit = function () {
        $('[data-toggle="tooltip"]').tooltip();
        this.loadAllUserSites();
    };
    UserPageComponent.prototype.selectWebSite = function (event) {
        this.selectedWebSite = event;
    };
    UserPageComponent.prototype.DeleteWebSite = function () {
        this.webSites.splice(this.webSites.indexOf(this.selectedWebSite), 1);
    };
    UserPageComponent.prototype.gray = function () {
        this.achievementsClass = "";
    };
    UserPageComponent.prototype.loadAllUserSites = function () {
        var _this = this;
        //TODO изменить юзер id(ищет по юзеру, который делает запрос)
        this.siteCreationService.loadAllUserSites()
            .subscribe(function (data) {
            _this.webSites = data;
            _this.getPagesFromString();
        }, function (error) { return alert(error); }, function () { return console.log("Getting WebSites FINISHED"); });
    };
    UserPageComponent.prototype.getPagesFromString = function () {
        for (var _i = 0, _a = this.webSites; _i < _a.length; _i++) {
            var site = _a[_i];
            site.pages = json_parse_service_1.JsonParse.ourParseJSON(site.pagesString);
        }
        console.log(this.webSites);
    };
    return UserPageComponent;
}());
UserPageComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'user.page.component.html',
        styleUrls: ['user.page.component.css'],
    }),
    __metadata("design:paramtypes", [site_creation_service_1.SiteCreationService])
], UserPageComponent);
exports.UserPageComponent = UserPageComponent;
//# sourceMappingURL=user.page.component.js.map