import {Product} from "./product";
/**
 * Created by Dima on 11.01.2017.
 */

export class Container{

    classCss: string;
    items: Product[];
    id: number;
    showResize: boolean;

    constructor(classCss : string,
                  id : number){
       this.classCss=classCss;
       this.id=id;
       this.items=[];
       this.showResize=false;
    }
}