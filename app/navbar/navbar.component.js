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
var authentication_service_1 = require("../_services/authentication.service");
var router_1 = require("@angular/router");
var website_1 = require("../user.page/website");
var site_creation_service_1 = require("../_services/site.creation.service");
var NavbarComponent = (function () {
    function NavbarComponent(router, authenticationService, siteCreationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.siteCreationService = siteCreationService;
        this.newTags = [];
        this.classInputTitle = '';
        this.isUserInfoShowed = !!localStorage.getItem('currentUser');
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
    NavbarComponent.prototype.saveSite = function (site) {
        var _this = this;
        this.siteCreationService.createSite(site).
            subscribe(function (siteIdFromServer) {
            if (siteIdFromServer) {
                _this.siteCreationService.currentSiteId = +siteIdFromServer;
                _this.router.navigate(['/creator']);
            }
        });
    };
    NavbarComponent.prototype.ngOnInit = function () {
        $('[data-toggle="tooltip"]').tooltip();
    };
    NavbarComponent.prototype.goLoginPage = function () {
        this.router.navigate(['/login']);
    };
    NavbarComponent.prototype.clearCreationWebSiteForm = function () {
        this.newTags = [];
        $('#inputTitle').val('');
        $('#inputDescription').val('');
        $('#inputTag').val('');
        $('#selectTypeMenu').val(1);
        this.model = '#6699ff';
        this.classInputTitle = "";
    };
    NavbarComponent.prototype.toSubmitForm = function () {
        if ($('#inputTitle').val()) {
            $('#create-modal').modal('toggle');
            this.saveSite(new website_1.WebSite($('#inputTitle').val(), $('#inputDescription').val(), this.newTags, 0, $("#selectTypeMenu").val(), this.model));
        }
        else {
            this.classInputTitle = "has-error";
        }
    };
    NavbarComponent.prototype.toAddTeg = function (event) {
        if (!this.newTags.includes(event)) {
            if (event) {
                this.newTags.push(event);
            }
        }
    };
    NavbarComponent.prototype.DeleteTeg = function (event) {
        this.newTags.splice(this.newTags.indexOf(event), 1);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'navbar.component.html',
        selector: 'navbar'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        authentication_service_1.AuthenticationService,
        site_creation_service_1.SiteCreationService])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map