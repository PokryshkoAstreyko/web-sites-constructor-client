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
        this.lineContainers = [];
        this.selectedContainerID = 0;
        this.selectedLineContainerID = 0;
        this.availableComponents = [];
        this.deleteLineContainer = false;
        this.availableComponents.push("Container");
        this.listOfPages.push(new page_1.Page("Main"));
        this.selectedPage = this.listOfPages[0];
    }
    CreatorComponent.prototype.ngOnInit = function () {
        $('#summernote').summernote();
        $("#sticker").sticky({ topSpacing: 0 });
    };
    CreatorComponent.prototype.savePost = function () {
        var text = $('#summernote').summernote('code');
        console.log(text);
        if (text != null && text != '') {
            this.selectedPage.lineContainers[this.selectedLineContainerID].containers[this.selectedContainerID].postText = text;
        }
    };
    CreatorComponent.prototype.addPage = function (title) {
        // $('#PageModal').title = title;
        this.listOfPages.push(new page_1.Page(title));
        if (this.listOfPages.length == 1) {
            this.selectedPage = this.listOfPages[0];
        }
    };
    CreatorComponent.prototype.removePage = function (index) {
        if (this.listOfPages.length > 1) {
            this.selectedPage = this.listOfPages[0];
        }
        else {
            this.selectedPage = new page_1.Page("");
            console.log(this.selectedPage);
        }
        this.listOfPages.splice(index, 1);
    };
    // openPageModal(){
    //     $('#PageModal').modal('toggle');
    //     this.selectedPage=new Page("df");
    //     this.addLineContainer();
    // }
    CreatorComponent.prototype.addContainer = function (event, lineContainer) {
        console.log(event);
        lineContainer.containers.push(new container_1.Container());
        console.log("add container" + lineContainer);
    };
    CreatorComponent.prototype.addLineContainer = function () {
        var lineContainer = new line_container_1.LineContainer();
        lineContainer.containers.push(new container_1.Container());
        this.selectedPage.lineContainers.push(lineContainer);
        console.log("linecontainers");
        console.log(this.lineContainers);
    };
    CreatorComponent.prototype.Select = function (container, lineContainer) {
        this.selectedLineContainerID = this.selectedPage.lineContainers.indexOf(lineContainer);
        this.selectedContainerID = this.selectedPage.lineContainers[this.selectedLineContainerID].containers.indexOf(container);
        this.deleteLineContainer = false;
        console.log(container.postText);
    };
    CreatorComponent.prototype.SelectLineContainer = function (lineContainer) {
        this.selectedLineContainerID = this.selectedPage.lineContainers.indexOf(lineContainer);
        this.deleteLineContainer = true;
    };
    CreatorComponent.prototype.selectPage = function (event) {
        console.log(event);
        this.selectedPage = event;
    };
    CreatorComponent.prototype.EditContainer = function (container, lineContainer) {
        this.Select(container, lineContainer);
        $('#summernote').summernote('code', container.postText);
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