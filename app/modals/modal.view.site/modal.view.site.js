/**
 * Created by Dima on 15.01.2017.
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
var ModalViewSite = (function () {
    function ModalViewSite() {
    }
    ModalViewSite.prototype.selectViewPage = function (page) {
        this.selectedViewPage = page;
    };
    return ModalViewSite;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ModalViewSite.prototype, "listOfPages", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", page_1.Page)
], ModalViewSite.prototype, "selectedViewPage", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ModalViewSite.prototype, "typeMenu", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ModalViewSite.prototype, "colorMenu", void 0);
ModalViewSite = __decorate([
    core_1.Component({
        templateUrl: 'app/modals/modal.view.site/modal.view.site.html',
        selector: 'modalViewSite',
        styleUrls: ['app/modals/modal.view.site/modal.view.site.css']
    })
], ModalViewSite);
exports.ModalViewSite = ModalViewSite;
//# sourceMappingURL=modal.view.site.js.map