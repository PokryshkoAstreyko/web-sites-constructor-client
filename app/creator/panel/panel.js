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
 * Created by Dima on 16.01.2017.
 */
var PanelBorder = (function () {
    function PanelBorder() {
        this.styleBorder = false;
    }
    PanelBorder.prototype.toBlackBorder = function () {
        this.styleBorder = true;
    };
    PanelBorder.prototype.toDefaultBorder = function () {
        this.styleBorder = false;
    };
    return PanelBorder;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PanelBorder.prototype, "text", void 0);
PanelBorder = __decorate([
    core_1.Component({
        templateUrl: 'app/creator/panel/panel.html',
        selector: 'panelborder',
    })
], PanelBorder);
exports.PanelBorder = PanelBorder;
//# sourceMappingURL=panel.js.map