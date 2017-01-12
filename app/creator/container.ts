/**
 * Created by Dima on 11.01.2017.
 */

export class Container {

    size: number;
    postText: string;

    constructor() {
        this.size = 2;
        this.postText = "";
    }
    toIncreaseSize(){
        if(this.size!=12){
            this.size++;
        }
    }
    toDecreaseSize(){
        if(this.size!=1){
            this.size--;
        }
    }
}