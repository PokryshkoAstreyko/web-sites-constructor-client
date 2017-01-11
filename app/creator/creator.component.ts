import {Component, Input, OnInit, OnChanges} from "@angular/core";
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

export class CreatorComponent implements OnInit{

    listOfPages : Array<string> = [];

    lineContainers: LineContainer[] = [];
    selectedContainerID: number = 0;
    selectedLineContainerID: number = 0;
    availableComponents: string[] = [];
    f: number = 2;


    ngOnInit() {
        $('#summernote').summernote();
    }
    savePost() {
        let text = $('#summernote').summernote('code');
        console.log(text);
        if (text != null && text != '') {
            this.lineContainers[this.selectedLineContainerID].containers[this.selectedContainerID].postText = text;
        }
    }

    constructor() {
        this.availableComponents.push("Container");
    }

    addPage(){
        this.listOfPages.push("new page");
    }

    removePage(index : number){
        this.listOfPages.splice(index, 1);
    }

    addContainer(lineContainer: LineContainer) {
        lineContainer.containers.push(new Container());
        console.log("add container" + lineContainer);
    }

    addLineContainer() {
        let lineContainer = new LineContainer();
        lineContainer.containers.push(new Container());
        this.lineContainers.push(lineContainer);
        console.log("linecontainers");
        console.log(this.lineContainers);
    }

    toSelect(container: Container, lineContainer: LineContainer) {
        this.selectedLineContainerID = this.lineContainers.indexOf(lineContainer);
        this.selectedContainerID = this.lineContainers[this.selectedLineContainerID].containers.indexOf(container);
    }

    toSelectContainer(container: Container, lineContainer: LineContainer) {
        this.toSelect(container, lineContainer);
        $('#summernote').summernote('code', container.postText);
    }

    toIncreaseSize(container: Container, lineContainer: LineContainer) {
        this.toSelect(container, lineContainer);
        this.lineContainers[this.selectedLineContainerID].containers[this.selectedContainerID].toIncreaseSize();
    }

    toDecreaseSize(container: Container, lineContainer: LineContainer) {
        this.toSelect(container, lineContainer);
        this.lineContainers[this.selectedLineContainerID].containers[this.selectedContainerID].toDecreaseSize();
    }

}
