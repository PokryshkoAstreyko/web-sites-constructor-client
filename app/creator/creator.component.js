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
var container_1 = require("./container");
var line_container_1 = require("./line.container");
var page_1 = require("./page");
var PageToHTML_1 = require("./PageToHTML");
var modal_text_1 = require("../modals/modal.text");
var website_1 = require("../user.page/website");
var tag_1 = require("../user.page/tag");
var router_1 = require("@angular/router");
var shared_service_1 = require("../_services/shared.service");
var site_creation_service_1 = require("../_services/site.creation.service");
var CreatorComponent = (function () {
    function CreatorComponent(activatedRoute, sharedService, router, siteCreationService) {
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.router = router;
        this.siteCreationService = siteCreationService;
        this.selectedContainerID = 0;
        this.selectedLineContainerID = 0;
        this.deleteLineContainer = false;
        this.HTMLCode = '';
        this.classInputTitle = "";
        this.newTags = [];
        this.modalText = new modal_text_1.ModalText();
        this.HTMLCode = "";
        this.model = '#cccccc';
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
    CreatorComponent.prototype.ngOnInit = function () {
        $("#sticker").sticky({ topSpacing: 0 });
        $('#froala-editor').froalaEditor({
            charCounterCount: false,
            height: '400'
        });
        console.log(this.sharedService.currentSite);
        this.webSite = this.createCurrentSite();
        this.selectedPage = this.webSite.pages[0];
        $('.menu').css("background-color", this.webSite.menuColor);
        this.getRouteParams();
    };
    CreatorComponent.prototype.ngOnDestroy = function () {
        this.subParams.unsubscribe();
    };
    CreatorComponent.prototype.createCurrentSite = function () {
        //TODO pagesString добавить сюда
        var currentSite = this.sharedService.currentSite;
        var curSiteId = currentSite.id;
        var curSiteTitle = currentSite.title;
        var curSiteDescr = currentSite.description;
        var curSiteTags = currentSite.tags;
        var curSiteMenuType = currentSite.menuType;
        var curSiteMenuColor = currentSite.menuColor;
        var webSitee = new website_1.WebSite(curSiteTitle, curSiteDescr, curSiteTags, 2, curSiteMenuType, curSiteMenuColor);
        webSitee.id = curSiteId;
        console.log(webSitee);
        return webSitee;
    };
    CreatorComponent.prototype.saveSiteToServer = function () {
        var _this = this;
        this.webSite.pagesString = JSON.stringify(this.webSite.pages);
        this.siteCreationService.saveOrUpdateSite(this.webSite)
            .subscribe(function (siteFromServer) {
            if (siteFromServer) {
                _this.router.navigate(['/userpage']);
            }
            else
                console.log('EBANII SAIT NE SOZDALSYA NAHUI');
        });
    };
    CreatorComponent.prototype.getRouteParams = function () {
        var _this = this;
        //to get params from route
        this.subParams = this.activatedRoute.params.subscribe(function (params) {
            _this.editedSiteId = +params['id']; // (+) converts string 'id' to a number
            // In a real app: dispatch action to load the details here.
        });
    };
    CreatorComponent.prototype.savePost = function () {
        var text = $('#froala-editor').froalaEditor('html.get');
        if (text != null && text != '') {
            this.selectedPage.lineContainers[this.selectedLineContainerID].containers[this.selectedContainerID].postText = text;
        }
    };
    CreatorComponent.prototype.addPage = function (title) {
        this.webSite.pages.push(new page_1.Page(title));
    };
    CreatorComponent.prototype.removePage = function (id) {
        console.log(this.webSite.pages[id].name);
        this.webSite.pages.splice(id, 1);
        if (this.webSite.pages.length == 0) {
            this.selectedPage = new page_1.Page("");
        }
        else {
            this.selectedPage = this.webSite.pages[0];
        }
    };
    CreatorComponent.prototype.selectPage = function (page) {
        this.selectedPage = page;
    };
    CreatorComponent.prototype.editTitlePage = function (title) {
        this.selectedPage.name = title;
    };
    CreatorComponent.prototype.addContainer = function (lineContainer) {
        lineContainer.containers.push(new container_1.Container());
    };
    CreatorComponent.prototype.addLineContainer = function () {
        var lineContainer = new line_container_1.LineContainer();
        lineContainer.containers.push(new container_1.Container());
        this.selectedPage.lineContainers.push(lineContainer);
    };
    CreatorComponent.prototype.Select = function (container, lineContainer) {
        this.selectedLineContainerID = this.selectedPage.lineContainers.indexOf(lineContainer);
        this.selectedContainerID = this.selectedPage.lineContainers[this.selectedLineContainerID].containers.indexOf(container);
        this.deleteLineContainer = false;
    };
    CreatorComponent.prototype.SelectLineContainer = function (lineContainer) {
        this.selectedLineContainerID = this.selectedPage.lineContainers.indexOf(lineContainer);
        this.deleteLineContainer = true;
    };
    CreatorComponent.prototype.EditContainer = function (container, lineContainer) {
        this.Select(container, lineContainer);
        $('#froala-editor').froalaEditor('html.set', container.postText);
    };
    CreatorComponent.prototype.IncreaseSize = function (container, lineContainer) {
        this.Select(container, lineContainer);
        this.selectedPage.lineContainers[this.selectedLineContainerID].containers[this.selectedContainerID].toIncreaseSize();
    };
    CreatorComponent.prototype.DecreaseSize = function (container, lineContainer) {
        this.Select(container, lineContainer);
        this.selectedPage.lineContainers[this.selectedLineContainerID].containers[this.selectedContainerID].toDecreaseSize();
    };
    CreatorComponent.prototype.DeleteContainer = function () {
        if (this.deleteLineContainer) {
            this.selectedPage.lineContainers.splice(this.selectedLineContainerID, 1);
        }
        else {
            this.selectedPage.lineContainers[this.selectedLineContainerID].containers.splice(this.selectedContainerID, 1);
        }
    };
    CreatorComponent.prototype.toHTML = function () {
        this.HTMLCode = PageToHTML_1.PageToHTML.transfer(this.selectedPage);
    };
    CreatorComponent.prototype.editSettingsWebSite = function () {
        $('#editTitle').val(this.webSite.title);
        $('#editDescription').val(this.webSite.description);
        $('#editTag').val('');
        $('#editTypeMenu').val(this.webSite.menuType);
        this.model = this.webSite.menuType;
        this.classInputTitle = "";
        this.newTags = [];
        for (var _i = 0, _a = this.webSite.tags; _i < _a.length; _i++) {
            var tag = _a[_i];
            this.newTags.push(tag.tag);
        }
    };
    CreatorComponent.prototype.AddTeg = function (event) {
        if (!this.newTags.includes(event)) {
            if (event) {
                this.newTags.push(event);
            }
        }
    };
    CreatorComponent.prototype.DeleteTag = function (tag) {
        this.newTags.splice(this.newTags.indexOf(tag), 1);
    };
    CreatorComponent.prototype.SafeChange = function () {
        if ($('#editTitle').val()) {
            var tag = [];
            for (var i = 0; i < this.newTags.length; i++) {
                tag.push(new tag_1.Tag(this.newTags[i]));
            }
            this.webSite.title = $('#editTitle').val();
            this.webSite.menuType = $('#editTypeMenu').val();
            this.webSite.menuColor = this.model;
            this.webSite.description = $('#editDescription').val();
            this.webSite.tags = tag;
            $('.menu').css("background-color", this.webSite.menuColor);
            $('#settings-modal').modal('toggle');
        }
        else {
            this.classInputTitle = "has-error";
        }
        console.log(this.webSite);
    };
    return CreatorComponent;
}());
CreatorComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'creator.component.html',
        styleUrls: ['./creator.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        shared_service_1.SharedService,
        router_1.Router,
        site_creation_service_1.SiteCreationService])
], CreatorComponent);
exports.CreatorComponent = CreatorComponent;
//# sourceMappingURL=creator.component.js.map