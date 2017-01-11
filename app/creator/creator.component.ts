import {Component, Input, OnInit,OnChanges} from "@angular/core";
import {Product} from "./product";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Container} from "./container";
import {LineContainer} from "./line.container";
// import { Ng2Summernote } from 'ng2-summernote/ng2-summernote';

declare var $: any;

@Component({
    moduleId: module.id,
    templateUrl: 'creator.component.html',
    styleUrls: ['./creator.component.css']

})



export class CreatorComponent implements OnInit {
    postText: string[];
    leftClassContainer: string="col-md-1 work";
    rightClassContainer: string="col-md-1 work";
    postSaved: boolean = false;
    counterItem: number = 0;
    selectedProduct: Product;
    valueContainer: number=0;
    showSlider: boolean=false;

    ngOnInit() {
        // $ init summernote
        $('#summernote').summernote();


    }

    ngOnChanges(...args: any[]) {

    }


    private _formBuilder: FormBuilder;
    savePostForm: FormGroup;


    savePost(event: any) {
        let text = $('#summernote').summernote('code');
        console.log(text);
        if (text != null && text != '') {

            this.workAreaComponents[this.workAreaComponents.indexOf(this.selectedProduct)].postText=text;
            this.selectedProduct.postText=text;

            this.postSaved = true;
            setTimeout(() => this.postSaved = false, 2000);
        }
        else {
            console.error("posts empty");
            this.postSaved = false;
        }
    }

    // /** URL for upload server images */
    // @Input() hostUpload: string;
    //
    // /** Uploaded images server folder */
    // @Input() uploadFolder: string = "";


    listOne: Array<string> = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];

    removeElem($event: any) {

    }

    availableProducts: Array<Product> = [];
    shoppingBasket: Array<Product> = [];

    availableComponents: Array<Object> = [];
    workAreaComponents: Array<Product> = [];
    containers: Container[];
    lineContainers: LineContainer[];
    selectedContainer : Container;

    constructor(formBuilder: FormBuilder) {
        this.availableProducts.push(new Product("Blue Shoes", 3, 35));
        this.availableProducts.push(new Product("Good Jacket", 1, 90));
        this.availableProducts.push(new Product("Red Shirt", 5, 12));
        this.availableProducts.push(new Product("Blue Jeans", 4, 60));

        this.availableComponents.push(new Product("Container", 3, 35));
        this.availableComponents.push(new Product("Item", 1, 90));
        this.selectedProduct = new Product("Item", 1, 90);
        this.selectedProduct.postText="";
        this.containers=[];
        this.containers.push(new Container('work col-md-1',1));
        this.containers.push(new Container('work col-md-1',2));
        this.containers.push(new Container('work col-md-1',3));
        this.containers.push(new Container('work col-md-1',4));
        this.selectedContainer=this.containers[0];

        this.lineContainers=[];
        this.lineContainers.push(new LineContainer(new Container('work col-md-1',1)));
        this.lineContainers[0].containers=this.containers;

        this._formBuilder = formBuilder;
        this.savePostForm = this._formBuilder.group({})
        let newProduct = new  Product('df',2,3);
        newProduct.postText="wer";
        this.workAreaComponents.push(newProduct);
    }

    addToWorkArea(event: any,container: Container,lineContainer: LineContainer) {
            this.availableComponents.pop();
            this.availableComponents.push(new Product("Item", 1, 90));
            if(event.dragData.name=="Item"){
                let newProduct: Product = event.dragData;
                newProduct.postText = "item" + this.counterItem++;
                container.items.push(newProduct);
                this.workAreaComponents.push(newProduct);
            }
            else {
                if(this.containers.length!=12){
                    lineContainer.containers.push(new Container('work col-md-1',4));
                    console.log("add container");
                }
            }

        console.log(lineContainer);

    }

    toConsole(event: any) {
        console.log(event);
    }

    toSelectItem(product: Product) {
        this.selectedProduct = product;
        $('#summernote').summernote('code',product.postText);

    }
    toResizeContainer(event: any){
        // console.log( $('#ex1').slider('getValue'));
        // this.valueContainer= $('#ex1').slider('getValue');
        // this.leftClassContainer="work col-md-"+this.valueContainer;
        // this.rightClassContainer="work col-md-"+(12-this.valueContainer);
        console.log(event.target.value);
    }
    totoggleShowResize(container: any){
        container.showResize=!container.showResize;
        this.showSlider=!this.showSlider;
        this.selectedContainer=container;

    }
    addLineContainer(container: any){
        console.log(container);
        let lineContainer =  new LineContainer(new Container('work col-md-12',4));
        console.log(lineContainer);
        this.lineContainers.push(lineContainer);
        console.log(this.lineContainers);

    }

}
