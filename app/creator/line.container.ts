import {Container} from "./container";
/**
 * Created by Солнышко on 11.01.2017.
 */
export class LineContainer{

    containers: Container[];
    lenght: number=12;

    constructor(container: Container){
        this.containers=[];
        this.containers.push(container);
    }
}