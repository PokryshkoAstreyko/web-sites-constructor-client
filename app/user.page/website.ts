import {Page} from "../creator/page";
import {Data} from "@angular/router";
import {Tag} from "./tag";

/**
 * Created by Dima on 07.01.2017.
 */

export class WebSite{

    id: string;
    title: string;
    description: string;
    tags: Tag[];
    menuType: number;
    menuColor: string;
    pages: Page[] = [];
    rating: number;
    pagesString: string;

    constructor(
                title:string,
                description: string,
                tags: Tag[],
                rating:number,
                menuType: number,
                menuColor:string){

        this.title=title;
        this.description=description;
        this.tags=tags;
        this.rating=rating;
        this.menuType=menuType;
        this.menuColor=menuColor;
        this.pages.push(new Page("Main"));



    }

}