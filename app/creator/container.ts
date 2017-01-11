import {Product} from "./product";
/**
 * Created by Dima on 11.01.2017.
 */

export class Container{

    class: string;
    items: Product[];
    id: number;
    showResize: boolean;

    constructor(newclass : string,
                  id : number){
       this.class=newclass;
       this.id=id;
       this.items=[];
       this.showResize=false;
    }
}