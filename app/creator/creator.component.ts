import {Component, Input, OnInit, OnChanges} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Container} from "./container";
import {LineContainer} from "./line.container";
import {Page} from "./page";
import {PageToHTML} from "./PageToHTML";
// import { Ng2Summernote } from 'ng2-summernote/ng2-summernote';
import { IColorPickerConfiguration } from 'ng2-color-picker';
import {ModalText} from '../modals/modal.text'

declare var $: any;

@Component({
    moduleId: module.id,
    templateUrl: 'creator.component.html',
    styleUrls: ['./creator.component.css']

})

export class CreatorComponent implements OnInit {


    listOfPages: Page[] = [];
    selectedPage: Page;
    panelToolsComponent: string[]= ["Container","View","View Code","Settings WebSite"];

    selectedContainerID: number = 0;
    selectedLineContainerID: number = 0;
    availableComponents: string[] = [];
    deleteLineContainer: boolean = false;
    HTMLCode: string = '';
    public config: IColorPickerConfiguration;
    public model: any;
    modalText: ModalText= new ModalText();


    constructor() {
        this.availableComponents.push("Container");
        this.listOfPages.push(new Page("Main"));
        this.selectedPage = this.listOfPages[0];
        this.HTMLCode="";
        this.model = '#cccccc';
        this.config = {
            width: 25,
            height: 25,
            borderRadius: 4,
            availableColors: [
                '#33cccc',
                '#99cc99',
                '#cc99cc',
                '#fabf8f',
                '#bfbfbf',
                '#6699ff',
                '#ff6666',
                '#ffcc66'
            ]
        };
    }

    ngOnInit() {
        $("#sticker").sticky({topSpacing: 0});
        $('#froala-editor').froalaEditor({
            charCounterCount: false,
            height: '400'
        });
        $('#colorselector').colorselector('setColor', '#ff0000');

    }

    savePost() {
        let text =  $('#froala-editor').froalaEditor('html.get');
            if (text != null && text != '') {
                this.selectedPage.lineContainers[this.selectedLineContainerID].containers[this.selectedContainerID].postText = text;
            }
    }

    addPage(title: any) {
        this.listOfPages.push(new Page(title));
    }

    removePage(id: number) {
        this.listOfPages.splice(id, 1);
    }
    selectPage(page: Page) {
        this.selectedPage = page;
    }
    editTitlePage(title: string){
        this.selectedPage.name=title;
    }
    // openPageModal(){
    //     $('#PageModal').modal('toggle');
    //     this.selectedPage=new Page("df");
    //     this.addLineContainer();
    // }

    addContainer(lineContainer: LineContainer) {
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
    }


}
