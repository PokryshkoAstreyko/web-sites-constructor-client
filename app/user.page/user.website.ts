/**
 * Created by Dima on 07.01.2017.
 */

export class UserWebSite{
    userMainPage: string;
    title: string;
    description: string;
    tags: string[];
    rating: number;

    constructor(userMainPage: string, title:string,description: string, tags:string[] ) {
        this.userMainPage=userMainPage;
        this.title=title;
        this.description=description;
        this.tags=tags;
        this.rating=3.5;
    }
}