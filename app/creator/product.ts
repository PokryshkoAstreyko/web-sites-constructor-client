
export class Product{

    name: string;
    cost: number;
    quantity: number;
    postText: string;

    constructor(name: string,
                cost: number,
                quantity : number,){
        this.name = name;
        this.cost = cost;
        this.quantity = quantity;
    }
}