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
var PageToHTML_1 = require("../../creator/PageToHTML");
var ModalViewCode = (function () {
    function ModalViewCode() {
    }
    ModalViewCode.prototype.selectViewPage = function (page) {
        this.selectedViewPage = page;
        this.HTMLCode = PageToHTML_1.PageToHTML.transfer(page);
    };
    return ModalViewCode;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ModalViewCode.prototype, "listOfPages", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", page_1.Page)
], ModalViewCode.prototype, "selectedViewPage", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ModalViewCode.prototype, "HTMLCode", void 0);
ModalViewCode = __decorate([
    core_1.Component({
        templateUrl: 'app/modals/modal.view.code/modal.view.code.html',
        selector: 'modalViewCode',
    })
], ModalViewCode);
exports.ModalViewCode = ModalViewCode;
//# sourceMappingURL=modal.view.code.js.map