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
 * Created by Dima on 18.01.2017.
 */
var core_1 = require("@angular/core");
var ModalViewDescription = (function () {
    function ModalViewDescription() {
    }
    return ModalViewDescription;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ModalViewDescription.prototype, "description", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ModalViewDescription.prototype, "tags", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ModalViewDescription.prototype, "title", void 0);
ModalViewDescription = __decorate([
    core_1.Component({
        templateUrl: 'app/modals/modal.view.description/modal.view.description.html',
        selector: 'modalViewDescription',
    }),
    __metadata("design:paramtypes", [])
], ModalViewDescription);
exports.ModalViewDescription = ModalViewDescription;
//# sourceMappingURL=modal.view.description.js.map