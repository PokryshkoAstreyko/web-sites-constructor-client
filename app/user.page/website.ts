import {Page} from "../creator/page";
import {Data} from "@angular/router";
import {Tag} from "./tag";

/**
 * Created by Dima on 07.01.2017.
 */

export class WebSite{

    title: string;

    description: string;

    tags: Tag[];

    rating: number;

    typeMenu: number;

    colorMenu: string;

    pages: Page[];

    date: number;

    dateView: string='';


    constructor(title:string,description: string,tags: Tag[],rating:number,typeMenu: number, colorMenu:string){
        this.title=title;
        this.description=description;
        this.tags=tags;
        this.rating=rating;
        this.typeMenu=typeMenu;
        this.colorMenu=colorMenu;
        this.pages=[];
        this.pages.push(new  Page("Main"));
        var today = new Date();
        this.date= Date.now();
        this.dateView+=('0' + today.getDate()).slice(-2)+'-'+('0' + (today.getMonth() + 1)).slice(-2)+'-' + today.getFullYear();
    }
}