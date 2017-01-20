import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import {WebSite} from "../user.page/website";


@Injectable()
export class SiteCreationService {


    public token: string;
    private creationUrl = 'http://localhost:8080/createsite';

    constructor(private http: Http) {
        // set token if saved in local storage
    }

    createSite(site : WebSite) : Observable<string>{ debugger;
         let currentUser  = localStorage.getItem('currentUser');

         this.token = JSON.parse(currentUser).token;
         console.log(this.token);

         let headers = new Headers(
                {'Content-Type': 'application/json;charset=utf-8',
                'Accept' : 'application/json;charset=utf-8',
                'X-AUTH-TOKEN' : this.token});
         let options = new RequestOptions({headers: headers});
         let body = JSON.stringify(site);

         return this.http.post(this.creationUrl, body, options)
             .map((response: Response)=> {
                return response.json() && response.json().id;
             })
    }


}