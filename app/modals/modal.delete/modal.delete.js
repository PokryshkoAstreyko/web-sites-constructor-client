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
/**
 * Created by Dima on 15.01.2017.
 */
var ModalDelete = (function () {
    function ModalDelete() {
        this.deleting = new core_1.EventEmitter();
    }
    ModalDelete.prototype.delete = function () {
        this.deleting.emit();
    };
    return ModalDelete;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ModalDelete.prototype, "titleText", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ModalDelete.prototype, "bodyText", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ModalDelete.prototype, "deleting", void 0);
ModalDelete = __decorate([
    core_1.Component({
        templateUrl: 'app/modals/modal.delete/modal.delete.html',
        selector: 'modalDelete'
    }),
    __metadata("design:paramtypes", [])
], ModalDelete);
exports.ModalDelete = ModalDelete;
//# sourceMappingURL=modal.delete.js.map