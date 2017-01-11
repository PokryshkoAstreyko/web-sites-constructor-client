/**
 * Created by Dima on 07.01.2017.
 */
import {UserWebSite} from './user.page';


export class WebSiteRow {
    userWebSites: UserWebSite[];

    constructor(userWebSite: UserWebSite[]) {
        this.userWebSites=userWebSite;
    }
}