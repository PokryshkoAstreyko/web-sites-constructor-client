import {Component, Input, OnInit} from "@angular/core";
import {Product} from "./product";
import {FormBuilder, FormGroup} from "@angular/forms";
// import { Ng2Summernote } from 'ng2-summernote/ng2-summernote';

declare var $: any;

@Component({
    moduleId: module.id,
    templateUrl: 'creator.component.html',

})


export class CreatorComponent implements OnInit {
    postText: string[];
    errorMessage: string;
    postSaved: boolean = false;
    counterItem: number = 1;
    selectedProduct: Product;


    ngOnInit() {
        // $ init summernote
        $('#summernote').summernote();
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

    constructor(formBuilder: FormBuilder) {
        this.availableProducts.push(new Product("Blue Shoes", 3, 35));
        this.availableProducts.push(new Product("Good Jacket", 1, 90));
        this.availableProducts.push(new Product("Red Shirt", 5, 12));
        this.availableProducts.push(new Product("Blue Jeans", 4, 60));

        this.availableComponents.push(new Product("Container", 3, 35));
        this.availableComponents.push(new Product("Item", 1, 90));
        this.selectedProduct = new Product("Item", 1, 90);
        this.selectedProduct.postText="";

        this._formBuilder = formBuilder;
        this.savePostForm = this._formBuilder.group({})
        let newProduct = new  Product('df',2,3);
        newProduct.postText="wer";
        this.workAreaComponents.push(newProduct);
    }

    addToWorkArea($event: any) {
        this.availableComponents.pop();
        this.availableComponents.push(new Product("Item", 1, 90));
        let newProduct: Product = $event.dragData;
        newProduct.postText = "item" + this.counterItem++;
        this.workAreaComponents.push(newProduct);
        console.log(this.workAreaComponents);
    }

    toConsole(event: any) {
        console.log(event);
    }

    toSelectItem(product: Product) {
        this.selectedProduct = product;
        $('#summernote').summernote('code',product.postText);

    }
    toCreateSummer(){

    }


    replaceElements($event: any) {
    }

}
