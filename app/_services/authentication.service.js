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
var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.loginUrl = 'http://localhost:8080/login';
        this.registerUrl = 'http://localhost:8080/register';
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var body = JSON.stringify({ username: username, password: password });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=utf-8', 'Accept': 'application/json;charset=utf-8' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.loginUrl, body, options)
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var token = response.json() && response.json().jwtToken;
            if (token) {
                // set token property
                _this.token = token;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    // register(username : string, password : string): Observable<boolean> {
    //     let body = JSON.stringify({ username: username, password: password });
    //     let headers = new Headers( {'Content-Type': 'application/json;charset=utf-8', 'Accept' : 'application/json;charset=utf-8'});
    //     let options = new RequestOptions({ headers: headers });
    //
    //     return this.http.post(this.registerUrl, body, options)
    //         .map((response : Response) => {
    //             let errorMessage = response.json() && response.json().errorMessage;
    //             if(errorMessage){
    //
    //             }
    //             let token = response.json() && response.json().jwtToken;
    //
    //
    //             if(token) {
    //                 this.token = token;
    //                 localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));
    //                 return true;
    //
    //             } else {
    //                 return false;
    //             }
    //         });
    // }
    AuthenticationService.prototype.register = function (username, password) {
        var _this = this;
        var body = JSON.stringify({ username: username, password: password });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json;charset=utf-8', 'Accept': 'application/json;charset=utf-8' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.registerUrl, body, options)
            .map(function (response) {
            debugger;
            var errorMessage = response.json() && response.json().errorMessage;
            var token = response.json() && response.json().jwtToken;
            if (errorMessage) {
                return errorMessage;
            }
            if (token) {
                _this.token = token;
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                return 'token';
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map