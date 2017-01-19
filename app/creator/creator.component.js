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
var CreatorComponent = (function () {
    function CreatorComponent() {
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
        this.webSite = new website_1.WebSite("Mi First Site", "tralalallala", [], 2, 1, '#6699ff');
        this.selectedPage = this.webSite.pages[0];
        $('.menu').css("background-color", this.webSite.colorMenu);
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
        $('#editTypeMenu').val(this.webSite.typeMenu);
        this.model = this.webSite.colorMenu;
        this.classInputTitle = "";
        this.newTags = Array.from(this.webSite.tags);
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
            this.webSite.title = $('#editTitle').val();
            this.webSite.typeMenu = $('#editTypeMenu').val();
            this.webSite.colorMenu = this.model;
            this.webSite.description = $('#editDescription').val();
            this.webSite.tags = this.newTags;
            $('.menu').css("background-color", this.webSite.colorMenu);
            $('#settings-modal').modal('toggle');
        }
        else {
            this.classInputTitle = "has-error";
        }
    };
    return CreatorComponent;
}());
CreatorComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'creator.component.html',
        styleUrls: ['./creator.component.css']
    }),
    __metadata("design:paramtypes", [])
], CreatorComponent);
exports.CreatorComponent = CreatorComponent;
//# sourceMappingURL=creator.component.js.map