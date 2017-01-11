"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var product_1 = require("./product");
var forms_1 = require("@angular/forms");
var CreatorComponent = (function () {
    function CreatorComponent(formBuilder) {
        this.postSaved = false;
        this.counterItem = 1;
        // /** URL for upload server images */
        // @Input() hostUpload: string;
        //
        // /** Uploaded images server folder */
        // @Input() uploadFolder: string = "";
        this.listOne = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];
        this.availableProducts = [];
        this.shoppingBasket = [];
        this.availableComponents = [];
        this.workAreaComponents = [];
        this.availableProducts.push(new product_1.Product("Blue Shoes", 3, 35));
        this.availableProducts.push(new product_1.Product("Good Jacket", 1, 90));
        this.availableProducts.push(new product_1.Product("Red Shirt", 5, 12));
        this.availableProducts.push(new product_1.Product("Blue Jeans", 4, 60));
        this.availableComponents.push(new product_1.Product("Container", 3, 35));
        this.availableComponents.push(new product_1.Product("Item", 1, 90));
        this.selectedProduct = new product_1.Product("Item", 1, 90);
        this.selectedProduct.postText = "";
        this._formBuilder = formBuilder;
        this.savePostForm = this._formBuilder.group({});
        var newProduct = new product_1.Product('df', 2, 3);
        newProduct.postText = "wer";
        this.workAreaComponents.push(newProduct);
    }
    CreatorComponent.prototype.ngOnInit = function () {
        // $ init summernote
        $('#summernote').summernote();
    };
    CreatorComponent.prototype.savePost = function (event) {
        var _this = this;
        var text = $('#summernote').summernote('code');
        console.log(text);
        if (text != null && text != '') {
            this.workAreaComponents[this.workAreaComponents.indexOf(this.selectedProduct)].postText = text;
            this.selectedProduct.postText = text;
            this.postSaved = true;
            setTimeout(function () { return _this.postSaved = false; }, 2000);
        }
        else {
            console.error("posts empty");
            this.postSaved = false;
        }
    };
    CreatorComponent.prototype.removeElem = function ($event) {
    };
    CreatorComponent.prototype.addToWorkArea = function ($event) {
        this.availableComponents.pop();
        this.availableComponents.push(new product_1.Product("Item", 1, 90));
        var newProduct = $event.dragData;
        newProduct.postText = "item" + this.counterItem++;
        this.workAreaComponents.push(newProduct);
        console.log(this.workAreaComponents);
    };
    CreatorComponent.prototype.toConsole = function (event) {
        console.log(event);
    };
    CreatorComponent.prototype.toSelectItem = function (product) {
        this.selectedProduct = product;
        $('#summernote').summernote('code', product.postText);
    };
    CreatorComponent.prototype.toCreateSummer = function () {
    };
    CreatorComponent.prototype.replaceElements = function ($event) {
    };
    return CreatorComponent;
}());
CreatorComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'creator.component.html',
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], CreatorComponent);
exports.CreatorComponent = CreatorComponent;
//# sourceMappingURL=creator.component.js.map