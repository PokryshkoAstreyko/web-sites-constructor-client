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
/**
 * Created by Dima on 15.01.2017.
 */
var core_1 = require("@angular/core");
var ModalEditTitle = (function () {
    function ModalEditTitle() {
        this.change = new core_1.EventEmitter();
        this.editing = true;
    }
    ModalEditTitle.prototype.edit = function (title) {
        console.log($('#myInput'));
        if (title.value != "") {
            this.change.emit(title.value);
        }
        this.editing = true;
    };
    ModalEditTitle.prototype.console = function () {
        console.log($('#myInput'));
    };
    return ModalEditTitle;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ModalEditTitle.prototype, "titleText", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ModalEditTitle.prototype, "currentTitle", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ModalEditTitle.prototype, "change", void 0);
ModalEditTitle = __decorate([
    core_1.Component({
        templateUrl: 'app/modals/modal.edit.title.page/modal.edit.title.page.html',
        selector: 'modalEditTitlePage'
    }),
    __metadata("design:paramtypes", [])
], ModalEditTitle);
exports.ModalEditTitle = ModalEditTitle;
//# sourceMappingURL=modal.edit.title.page.js.map