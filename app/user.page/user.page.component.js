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
var website_1 = require("./website");
var modal_text_1 = require("../modals/modal.text");
var UserPageComponent = (function () {
    function UserPageComponent() {
        this.classInputTitle = '';
        this.modalText = new modal_text_1.ModalText();
        var tags;
        var tag = "tag";
        tags = [];
        this.newTags = [];
        this.deleteModal = false;
        this.titleError = false;
        this.showCreateModal = true;
        this.webSites = [];
        this.selectedWebSite = new website_1.WebSite("", "", [], 3, 1, "#6699ff");
        for (var i = 1; i <= 10; i++) {
            tags.push(tag + i);
            this.webSites.push(new website_1.WebSite("WebSite" + i, "blablablablablablablab" + i, tags, 3, 1, "#6699ff"));
        }
        this.model = '#6699ff';
        this.config = {
            width: 25,
            height: 25,
            borderRadius: 4,
            availableColors: [
                '#33cccc',
                '#99cc99',
                '#cc99cc',
                '#fabf8f',
                '#bfbfbf',
                '#6699ff',
                '#ff6666',
                '#ffcc66'
            ]
        };
    }
    UserPageComponent.prototype.ngOnInit = function () {
    };
    UserPageComponent.prototype.change = function (val) {
        console.log(val);
    };
    UserPageComponent.prototype.toAddTeg = function (event) {
        if (!this.newTags.includes(event)) {
            if (event) {
                this.newTags.push(event);
            }
        }
    };
    UserPageComponent.prototype.toFormCreateWebSite = function () {
        this.newTags = [];
        $('#inputTitle').val('');
        $('#inputDescription').val('');
        $('#inputTag').val('');
        $('#selectTypeMenu').val(1);
        this.model = '#6699ff';
        this.classInputTitle = "";
    };
    UserPageComponent.prototype.DeleteTeg = function (event) {
        this.newTags.splice(this.newTags.indexOf(event), 1);
    };
    UserPageComponent.prototype.toSelectWebSite = function (event) {
        this.selectedWebSite = event;
        this.deleteModal = false;
    };
    UserPageComponent.prototype.DeleteWebSite = function () {
        this.webSites.splice(this.webSites.indexOf(this.selectedWebSite), 1);
    };
    UserPageComponent.prototype.viewDeleteModal = function () {
        this.deleteModal = true;
    };
    UserPageComponent.prototype.toSubmitForm = function () {
        if ($('#inputTitle').val()) {
            this.webSites.push(new website_1.WebSite($('#inputTitle').val(), $('#inputDescription').val(), this.newTags, 2, $('#inputDescription').val(), "#6699ff"));
            $('#create-modal').modal('toggle');
        }
        else {
            this.classInputTitle = "has-error";
        }
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