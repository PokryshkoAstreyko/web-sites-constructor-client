"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ProfileComponent = (function () {
    function ProfileComponent() {
        this.userImgUrl = '/app/profile/img/sarkhad.png';
        this.cloudData = [
            { text: 'Weight-9', weight: 9 },
            { text: 'Weight-7', weight: 7 },
            { text: 'Weight-7', weight: 7 },
            { text: 'Weight-5', weight: 5 },
            { text: 'Weight-1', weight: 1 }
        ];
    }
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'profile.component.html',
    })
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map