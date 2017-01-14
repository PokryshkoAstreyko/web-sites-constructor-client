import {Component, Input, OnInit, OnChanges} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Container} from "./container";
import {LineContainer} from "./line.container";
import {Page} from "./page";
import {PageToHTML} from "./PageToHTML";
// import { Ng2Summernote } from 'ng2-summernote/ng2-summernote';

declare var $: any;

@Component({
    moduleId: module.id,
    templateUrl: 'creator.component.html',
    styleUrls: ['./creator.component.css']

})

export class CreatorComponent implements OnInit {


    listOfPages: Page[] = [];
    selectedPage: Page;
    selectedViewPage: Page = new Page("");
    deletedPageID: number = 0;


    lineContainers: LineContainer[] = [];
    selectedContainerID: number = 0;
    selectedLineContainerID: number = 0;
    availableComponents: string[] = [];
    deleteLineContainer: boolean = false;
    HTMLCode: string = '';
    public editorContent: string = 'My Document\'s Title';

    constructor() {
        this.availableComponents.push("Container");
        this.listOfPages.push(new Page("Main"));
        this.selectedPage = this.listOfPages[0];
    }

    ngOnInit() {
        $("#sticker").sticky({topSpacing: 0});

    }

    savePost() {
        let text =  $('#froala-editor').froalaEditor('html.get');
            if (text != null && text != '') {
                this.selectedPage.lineContainers[this.selectedLineContainerID].containers[this.selectedContainerID].postText = text;
            }
    }

    addPage(title: string) {
        this.listOfPages.push(new Page(title));
        if (this.listOfPages.length == 1) {
            this.selectedPage = this.listOfPages[0];
        }
    }

    editTitlePage(title: string) {
        this.selectedPage.name = title;
    }

    removePage() {

        this.listOfPages.splice(this.deletedPageID, 1);
        this.selectedPage = this.listOfPages[0];
        if (this.listOfPages.length == 0) {
            this.selectedPage = new Page("");
        }

    }

    selectDeletePageID(page: number) {
        this.deletedPageID = page;
    }

    // openPageModal(){
    //     $('#PageModal').modal('toggle');
    //     this.selectedPage=new Page("df");
    //     this.addLineContainer();
    // }

    addContainer(event: any, lineContainer: LineContainer) {
        lineContainer.containers.push(new Container());
    }

    addLineContainer() {
        let lineContainer = new LineContainer();
        lineContainer.containers.push(new Container());
        this.selectedPage.lineContainers.push(lineContainer);
    }

    Select(container: Container, lineContainer: LineContainer) {
        this.selectedLineContainerID = this.selectedPage.lineContainers.indexOf(lineContainer);
        this.selectedContainerID = this.selectedPage.lineContainers[this.selectedLineContainerID].containers.indexOf(container);
        this.deleteLineContainer = false;
    }

    SelectLineContainer(lineContainer: LineContainer) {
        this.selectedLineContainerID = this.selectedPage.lineContainers.indexOf(lineContainer);
        this.deleteLineContainer = true;
    }

    selectPage(event: any) {
        console.log(event);
        this.selectedPage = event;
    }

    EditContainer(container: Container, lineContainer: LineContainer) {
        this.Select(container, lineContainer);
        $('#froala-editor').froalaEditor('html.set',container.postText);
    }

    IncreaseSize(container: Container, lineContainer: LineContainer) {
        this.Select(container, lineContainer);
        this.selectedPage.lineContainers[this.selectedLineContainerID].containers[this.selectedContainerID].toIncreaseSize();
    }

    DecreaseSize(container: Container, lineContainer: LineContainer) {
        this.Select(container, lineContainer);
        this.selectedPage.lineContainers[this.selectedLineContainerID].containers[this.selectedContainerID].toDecreaseSize();
    }

    DeleteContainer() {

        if (this.deleteLineContainer) {
            this.selectedPage.lineContainers.splice(this.selectedLineContainerID, 1);
        }
        else {
            this.selectedPage.lineContainers[this.selectedLineContainerID].containers.splice(this.selectedContainerID, 1);
        }

    }

    ToHTML() {
        this.HTMLCode = PageToHTML.transfer(this.selectedPage);
        this.selectedViewPage = this.selectedPage;
    }

    selectViewPage(page: Page) {
        this.HTMLCode = PageToHTML.transfer(page);
        this.selectedViewPage = page;
    }

}
