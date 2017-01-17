/**
 * Created by Dima on 16.01.2017.
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
var page_1 = require("../../creator/page");
var modal_text_1 = require("../../modals/modal.text");
var PanelToolsPages = (function () {
    function PanelToolsPages() {
        this.selectingPage = new core_1.EventEmitter();
        this.removingPage = new core_1.EventEmitter();
        this.addingPage = new core_1.EventEmitter();
        this.editingPage = new core_1.EventEmitter();
        this.modalText = new modal_text_1.ModalText();
        this.classInputTitle = "";
    }
    PanelToolsPages.prototype.addPage = function (title) {
        if (title) {
            this.addingPage.emit(title);
            $('#page-modal').modal('toggle');
            if (this.listOfPages.length == 1) {
                this.selectPage(this.listOfPages[0]);
            }
        }
        else {
            this.classInputTitle = "has-error";
        }
    };
    PanelToolsPages.prototype.editTitlePage = function (title) {
        if (title) {
            this.editingPage.emit(title);
            $('#edit-page-modal').modal('toggle');
        }
        else {
            this.classInputTitle = "has-error";
        }
    };
    PanelToolsPages.prototype.removePage = function () {
        this.removingPage.emit(this.deletedPageID);
        if (this.listOfPages.length == 0) {
            this.selectedPage = new page_1.Page("");
        }
        this.selectedPage = this.listOfPages[0];
    };
    PanelToolsPages.prototype.selectDeletePageID = function (page) {
        this.deletedPageID = page;
    };
    PanelToolsPages.prototype.selectPage = function (event) {
        this.selectedPage = event;
        this.selectingPage.emit(this.selectedPage);
    };
    return PanelToolsPages;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], PanelToolsPages.prototype, "listOfPages", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", page_1.Page)
], PanelToolsPages.prototype, "selectedPage", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], PanelToolsPages.prototype, "selectingPage", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], PanelToolsPages.prototype, "removingPage", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], PanelToolsPages.prototype, "addingPage", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], PanelToolsPages.prototype, "editingPage", void 0);
PanelToolsPages = __decorate([
    core_1.Component({
        templateUrl: 'app/creator/panel.tools.pages/panel.tools.pages.html',
        selector: 'panelToolsPages',
    }),
    __metadata("design:paramtypes", [])
], PanelToolsPages);
exports.PanelToolsPages = PanelToolsPages;
//# sourceMappingURL=panel.tools.pages.js.map