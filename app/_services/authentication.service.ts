import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {

    public token: string;
    private loginUrl = 'http://localhost:8080/login';
    private registerUrl = 'http://localhost:8080/register';

    constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {
        let body = JSON.stringify({ username: username, password: password });
        let headers = new Headers( {'Content-Type': 'application/json;charset=utf-8', 'Accept' : 'application/json;charset=utf-8'});
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.loginUrl, body, options)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().jwtToken;
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

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

    register(username : string, password : string): Observable<string> {
        let body = JSON.stringify({ username: username, password: password });
        let headers = new Headers( {'Content-Type': 'application/json;charset=utf-8', 'Accept' : 'application/json;charset=utf-8'});
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.registerUrl, body, options)
            .map((response : Response) => { debugger;
                let errorMessage = response.json() && response.json().errorMessage;
                let token = response.json() && response.json().jwtToken;

                if(errorMessage){
                    return errorMessage;
                }
                if(token) {
                    this.token = token;
                    localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));
                    return 'token';
                }
            });
    }
    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}