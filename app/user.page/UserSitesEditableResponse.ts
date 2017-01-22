import {WebSite} from "./website";
import {JsonParse} from "../_services/json.parse.service";

/**
 * Created by Dima on 22.01.2017.
 */


export class UserSitesEditableResponse {

    public static userEditableParseJSON(userSites: any[]): WebSite[] {
        if (!userSites) {
            return;
        }
        let webSites: WebSite[] = [];
        for (let i = 0; i < userSites.length; i++) {
            webSites.push(new WebSite(userSites[i].title, userSites[i].description,
                userSites[i].tags, userSites[i].rating, userSites[i].menuType, userSites[i].menuColor));
            webSites[i].pages = JsonParse.ourParseJSON(userSites[i].pagesString);
        }
        return webSites;
    }

}