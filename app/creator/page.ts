import {LineContainer} from "./line.container";
/**
 * Created by Dima on 13.01.2017.
 */

export class Page {

    name: string='';
    lineContainers: LineContainer[]=[];

    constructor(name: string) {
        this.name = name;
    }
}