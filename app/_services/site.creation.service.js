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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var SiteCreationService = (function () {
    function SiteCreationService(http) {
        this.http = http;
        this.creationUrl = 'http://localhost:8080/createsite';
        // set token if saved in local storage
    }
    SiteCreationService.prototype.createSite = function (site) {
        debugger;
        var currentUser = localStorage.getItem('currentUser');
        this.token = JSON.parse(currentUser).token;
        console.log(this.token);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=utf-8',
            'Accept': 'application/json;charset=utf-8',
            'X-AUTH-TOKEN': this.token });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify(site);
        return this.http.post(this.creationUrl, body, options)
            .map(function (response) {
            return response.json() && response.json().id;
        });
    };
    return SiteCreationService;
}());
SiteCreationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SiteCreationService);
exports.SiteCreationService = SiteCreationService;
//# sourceMappingURL=site.creation.service.js.map