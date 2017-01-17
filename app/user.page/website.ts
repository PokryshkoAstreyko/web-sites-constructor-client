import {Page} from "../creator/page";
/**
 * Created by Dima on 07.01.2017.
 */

export class WebSite{
    title: string;
    description: string;
    tags: string[];
    rating: number;
    typeMenu: number;
    colorMenu: string;
    pages: Page[];

    constructor(title:string,description: string,tags:string[],rating:number,typeMenu: number, colorMenu:string){
        this.title=title;
        this.description=description;
        this.tags=tags;
        this.rating=3.5;
        this.typeMenu=typeMenu;
        this.colorMenu=colorMenu;
        this.pages=[];
    }
}