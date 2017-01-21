import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import {WebSite} from "../user.page/website";
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';


@Injectable()
export class SiteCreationService {


    public token: string;
    private creationUrl = 'http://localhost:8080/createsite';
    private savingUrl = 'http://localhost:8080/savesite';
    private getUserSitesUrl = 'http://localhost:8080/loadsites';

    constructor(private http: Http) {
        // set token if saved in local storage
    }

    getRequestOptions(){
        let currentUser  = localStorage.getItem('currentUser');
        this.token = JSON.parse(currentUser).token;
        console.log(this.token);
        let headers = new Headers(
            {'Content-Type': 'application/json;charset=utf-8',
                'Accept' : 'application/json;charset=utf-8',
                'X-AUTH-TOKEN' : this.token});

        return new RequestOptions({headers: headers});
    }


    createSite(site : WebSite) : Observable<any>{ debugger;
         let options = this.getRequestOptions();
         let body = JSON.stringify(site);

         return this.http.post(this.creationUrl, body, options)
             .map((response: Response)=> {
                 console.log(response.json() + ": siteFromServer");

                return response.json() ;// Site object in json()
             });
    }

    saveOrUpdateSite(site : WebSite){

        let body = JSON.stringify(site);
        return this.http.post(this.savingUrl, body, this.getRequestOptions())
            .map((response: Response) => {
            //TODO возможно добавить сюда добавленный в базу сайт для отображения
                //если так не отобразится
                return response.json();
            });
    }

    loadAllUserSites(): Observable<WebSite[]>{

        return this.http.get(this.getUserSitesUrl, this.getRequestOptions())
                .map((response: Response) => {

                return response.json();

                })
                .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log(body + ": res.json()");
        console.log(body.data + ": res.json().data");
        return body.data || [];
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }




}