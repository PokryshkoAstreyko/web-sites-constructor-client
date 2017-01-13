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
var CreatorComponent = (function () {
    function CreatorComponent() {
        this.listOfPages = [];
        this.pageToEdit = 0;
        this.lineContainers = [];
        this.selectedContainerID = 0;
        this.selectedLineContainerID = 0;
        this.availableComponents = [];
        this.deleteLineContainer = false;
        this.availableComponents.push("Container");
        this.listOfPages.push(new page_1.Page("Main"));
    }
    //Methods for nav tabs menu__________________
    CreatorComponent.prototype.setAreaExpanded = function (page) {
        if (this.listOfPages.indexOf(page) == 0) {
            return "true";
        }
        return "false";
    };
    CreatorComponent.prototype.setClassForNavTabs = function (page) {
        if (this.listOfPages.indexOf(page) == 0) {
            return "active";
        }
        return " ";
    };
    CreatorComponent.prototype.setClassForTabContent = function (page) {
        if (this.listOfPages.indexOf(page) == 0) {
            return 'tab-pane fade active in';
        }
        return 'tab-pane fade';
    };
    CreatorComponent.prototype.replaceSpacesFromId = function (page) {
        return page.name.replace(/\s/g, '');
    };
    //END of Methods for nav tabs menu__________________
    CreatorComponent.prototype.ngOnInit = function () {
        $('#summernote').summernote();
        $("#sticker").sticky({ topSpacing: 0 });
    };
    CreatorComponent.prototype.savePost = function () {
        var text = $('#summernote').summernote('code');
        console.log(text);
        if (text != null && text != '') {
            this.lineContainers[this.selectedLineContainerID].containers[this.selectedContainerID].postText = text;
        }
    };
    CreatorComponent.prototype.addPage = function (title) {
        // $('#PageModal').title = title;
        this.listOfPages.push(new page_1.Page(title));
    };
    CreatorComponent.prototype.removePage = function (index) {
        this.listOfPages.splice(index, 1);
    };
    CreatorComponent.prototype.addContainer = function (event, lineContainer) {
        console.log(event);
        lineContainer.containers.push(new container_1.Container());
        console.log("add container" + lineContainer);
    };
    CreatorComponent.prototype.addLineContainer = function () {
        var lineContainer = new line_container_1.LineContainer();
        lineContainer.containers.push(new container_1.Container());
        this.lineContainers.push(lineContainer);
        console.log("linecontainers");
        console.log(this.lineContainers);
    };
    CreatorComponent.prototype.Select = function (container, lineContainer) {
        this.selectedLineContainerID = this.lineContainers.indexOf(lineContainer);
        this.selectedContainerID = this.lineContainers[this.selectedLineContainerID].containers.indexOf(container);
        this.deleteLineContainer = false;
        console.log(container.postText);
    };
    CreatorComponent.prototype.SelectLineContainer = function (lineContainer) {
        this.selectedLineContainerID = this.lineContainers.indexOf(lineContainer);
        this.deleteLineContainer = true;
    };
    CreatorComponent.prototype.EditContainer = function (container, lineContainer) {
        this.Select(container, lineContainer);
        $('#summernote').summernote('code', container.postText);
    };
    CreatorComponent.prototype.IncreaseSize = function (container, lineContainer) {
        this.Select(container, lineContainer);
        this.lineContainers[this.selectedLineContainerID].containers[this.selectedContainerID].toIncreaseSize();
    };
    CreatorComponent.prototype.DecreaseSize = function (container, lineContainer) {
        this.Select(container, lineContainer);
        this.lineContainers[this.selectedLineContainerID].containers[this.selectedContainerID].toDecreaseSize();
    };
    CreatorComponent.prototype.DeleteContainer = function () {
        if (this.deleteLineContainer) {
            this.lineContainers.splice(this.selectedLineContainerID, 1);
        }
        else {
            this.lineContainers[this.selectedLineContainerID].containers.splice(this.selectedContainerID, 1);
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