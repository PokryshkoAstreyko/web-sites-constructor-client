import {Component, Input, OnInit, OnChanges} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Container} from "./container";
import {LineContainer} from "./line.container";
import {Page} from "./page";
// import { Ng2Summernote } from 'ng2-summernote/ng2-summernote';

declare var $: any;

@Component({
    moduleId: module.id,
    templateUrl: 'creator.component.html',
    styleUrls: ['./creator.component.css']

})

export class CreatorComponent implements OnInit {


    listOfPages: Page[]=[];
    page: number = 0;


    lineContainers: LineContainer[] = [];
    selectedContainerID: number = 0;
    selectedLineContainerID: number = 0;
    availableComponents: string[] = [];
    deleteLineContainer: boolean = false;
    constructor() {
        this.availableComponents.push("Container");
        this.listOfPages.push(new Page("Main"));
    }

    //Methods for nav tabs menu__________________
    setAreaExpanded(page: Page){
        if(this.listOfPages.indexOf(page) == 0){
            return "true";
        }
        return "false";
    }
    setClassForNavTabs(page: Page){

        if(this.listOfPages.indexOf(page) == 0){
            return "active";
        }
        return " ";

    }
    setClassForTabContent(page : Page) {
        console.log(page);
        if (this.listOfPages.indexOf(page) == 0) {
            return 'tab-pane fade active in';
        }
        return 'tab-pane fade';
    }
    replaceSpacesFromId(page : Page){
        console.log(page);
        return page.name.replace(/\s/g,'');
    }
    //END of Methods for nav tabs menu__________________


    ngOnInit() {
        $('#summernote').summernote();
        $("#sticker").sticky({ topSpacing: 0 });

    }

    savePost() {
        let text = $('#summernote').summernote('code');
        console.log(text);
        if (text != null && text != '') {
            this.lineContainers[this.selectedLineContainerID].containers[this.selectedContainerID].postText = text;
        }
    }

    addPage(title: string) {
        // $('#PageModal').title = title;
         this.listOfPages.push( new Page(title));
    }

    removePage(index: number) {
        this.listOfPages.splice(index, 1);
    }

    addContainer(event: any, lineContainer: LineContainer) {
        console.log(event);
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

    Select(container: Container, lineContainer: LineContainer) {
        this.selectedLineContainerID = this.lineContainers.indexOf(lineContainer);
        this.selectedContainerID = this.lineContainers[this.selectedLineContainerID].containers.indexOf(container);
        this.deleteLineContainer = false;
        console.log(container.postText);
    }

    SelectLineContainer(lineContainer: LineContainer) {
        this.selectedLineContainerID = this.lineContainers.indexOf(lineContainer);
        this.deleteLineContainer = true;
    }

    EditContainer(container: Container, lineContainer: LineContainer) {
        this.Select(container, lineContainer);
        $('#summernote').summernote('code', container.postText);
    }

    IncreaseSize(container: Container, lineContainer: LineContainer) {
        this.Select(container, lineContainer);
        this.lineContainers[this.selectedLineContainerID].containers[this.selectedContainerID].toIncreaseSize();
    }

    DecreaseSize(container: Container, lineContainer: LineContainer) {
        this.Select(container, lineContainer);
        this.lineContainers[this.selectedLineContainerID].containers[this.selectedContainerID].toDecreaseSize();
    }

    DeleteContainer() {

        if (this.deleteLineContainer) {
            this.lineContainers.splice(this.selectedLineContainerID, 1);
        }
        else {
            this.lineContainers[this.selectedLineContainerID].containers.splice(this.selectedContainerID, 1);
        }

    }

}
