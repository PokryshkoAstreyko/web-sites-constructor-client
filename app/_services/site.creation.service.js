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
var rxjs_1 = require("rxjs");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
// Operators
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/toPromise");
require("rxjs/Rx");
var SiteCreationService = (function () {
    function SiteCreationService(http) {
        this.http = http;
        this.creationUrl = 'http://localhost:8080/createsite';
        this.savingUrl = 'http://localhost:8080/savesite';
        this.getUserSitesUrl = 'http://localhost:8080/loadsites';
        // set token if saved in local storage
    }
    SiteCreationService.prototype.getRequestOptions = function () {
        var currentUser = localStorage.getItem('currentUser');
        this.token = JSON.parse(currentUser).token;
        console.log(this.token);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=utf-8',
            'Accept': 'application/json;charset=utf-8',
            'X-AUTH-TOKEN': this.token });
        return new http_1.RequestOptions({ headers: headers });
    };
    SiteCreationService.prototype.createSite = function (site) {
        debugger;
        var options = this.getRequestOptions();
        var body = JSON.stringify(site);
        return this.http.post(this.creationUrl, body, options)
            .map(function (response) {
            console.log(response.json() + ": siteFromServer");
            return response.json(); // Site object in json()
        });
    };
    SiteCreationService.prototype.saveOrUpdateSite = function (site) {
        var body = JSON.stringify(site);
        return this.http.post(this.savingUrl, body, this.getRequestOptions())
            .map(function (response) {
            //TODO возможно добавить сюда добавленный в базу сайт для отображения
            //если так не отобразится
            return response.json();
        });
    };
    SiteCreationService.prototype.loadAllUserSites = function () {
        return this.http.get(this.getUserSitesUrl, this.getRequestOptions())
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    SiteCreationService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body + ": res.json()");
        console.log(body.data + ": res.json().data");
        return body.data || [];
    };
    SiteCreationService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return rxjs_1.Observable.throw(errMsg);
    };
    return SiteCreationService;
}());
SiteCreationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SiteCreationService);
exports.SiteCreationService = SiteCreationService;
//# sourceMappingURL=site.creation.service.js.map