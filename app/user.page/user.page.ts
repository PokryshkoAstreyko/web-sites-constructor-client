/**
 * Created by Dima on 07.01.2017.
 */
export interface IUserWebSite {
    userMainPage: string;
    title: string;
    description: string;
    tags: string[];
    colorTD: string;

}

export class UserWebSite implements IUserWebSite {
    userMainPage: string;
    title: string;
    description: string;
    tags: string[];
    colorTD: string;

    constructor(userMainPage: string, title:string,description: string, tags:string[] ) {
        this.userMainPage=userMainPage;
        this.title=title;
        this.description=description;
        this.tags=tags;
        this.colorTD="#ECF0F1";
    }
}