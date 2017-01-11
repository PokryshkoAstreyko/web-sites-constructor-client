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
var container_1 = require("./container");
var line_container_1 = require("./line.container");
var CreatorComponent = (function () {
    function CreatorComponent(formBuilder) {
        this.leftClassContainer = "col-md-1 work";
        this.rightClassContainer = "col-md-1 work";
        this.postSaved = false;
        this.counterItem = 0;
        this.valueContainer = 0;
        this.showSlider = false;
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
        this.containers = [];
        this.containers.push(new container_1.Container('work col-md-1', 1));
        this.containers.push(new container_1.Container('work col-md-1', 2));
        this.containers.push(new container_1.Container('work col-md-1', 3));
        this.containers.push(new container_1.Container('work col-md-1', 4));
        this.selectedContainer = this.containers[0];
        this.lineContainers = [];
        this.lineContainers.push(new line_container_1.LineContainer(new container_1.Container('work col-md-1', 1)));
        this.lineContainers[0].containers = this.containers;
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
    CreatorComponent.prototype.ngOnChanges = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
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
    CreatorComponent.prototype.addToWorkArea = function (event, container, lineContainer) {
        this.availableComponents.pop();
        this.availableComponents.push(new product_1.Product("Item", 1, 90));
        if (event.dragData.name == "Item") {
            var newProduct = event.dragData;
            newProduct.postText = "item" + this.counterItem++;
            container.items.push(newProduct);
            this.workAreaComponents.push(newProduct);
        }
        else {
            if (this.containers.length != 12) {
                lineContainer.containers.push(new container_1.Container('work col-md-1', 4));
                console.log("add container");
            }
        }
        console.log(lineContainer);
    };
    CreatorComponent.prototype.toConsole = function (event) {
        console.log(event);
    };
    CreatorComponent.prototype.toSelectItem = function (product) {
        this.selectedProduct = product;
        $('#summernote').summernote('code', product.postText);
    };
    CreatorComponent.prototype.toResizeContainer = function (event) {
        // console.log( $('#ex1').slider('getValue'));
        // this.valueContainer= $('#ex1').slider('getValue');
        // this.leftClassContainer="work col-md-"+this.valueContainer;
        // this.rightClassContainer="work col-md-"+(12-this.valueContainer);
        console.log(event.target.value);
    };
    CreatorComponent.prototype.totoggleShowResize = function (container) {
        container.showResize = !container.showResize;
        this.showSlider = !this.showSlider;
        this.selectedContainer = container;
    };
    CreatorComponent.prototype.addLineContainer = function (container) {
        console.log(container);
        var lineContainer = new line_container_1.LineContainer(new container_1.Container('work col-md-12', 4));
        console.log(lineContainer);
        this.lineContainers.push(lineContainer);
        console.log(this.lineContainers);
    };
    return CreatorComponent;
}());
CreatorComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'creator.component.html',
        styleUrls: ['./creator.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], CreatorComponent);
exports.CreatorComponent = CreatorComponent;
//# sourceMappingURL=creator.component.js.map