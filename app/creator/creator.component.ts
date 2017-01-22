import {Component, Input, OnInit, OnChanges} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Container} from "./container";
import {LineContainer} from "./line.container";
import {Page} from "./page";
import {PageToHTML} from "./PageToHTML";
import {IColorPickerConfiguration} from 'ng2-color-picker';
import {ModalText} from '../modals/modal.text'
import {WebSite} from "../user.page/website";
import {Tag} from "../user.page/tag";
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from "../_services/shared.service";
import {SiteCreationService} from "../_services/site.creation.service";

declare var $: any;

@Component({
    moduleId: module.id,
    templateUrl: 'creator.component.html',
    styleUrls: ['./creator.component.css']

})

export class CreatorComponent implements OnInit {


    selectedPage: Page;
    selectedContainerID: number = 0;
    selectedLineContainerID: number = 0;
    deleteLineContainer: boolean = false;
    HTMLCode: string = '';
    classInputTitle: string = "";
    newTags: string[] = [];

    public config: IColorPickerConfiguration;
    public model: any;
    modalText: ModalText = new ModalText();
    webSite: WebSite;

    editedSiteId : number;
    private subParams: any;

    constructor(private activatedRoute : ActivatedRoute,
                private sharedService : SharedService,
                private router: Router,
                private siteCreationService : SiteCreationService) {

        this.HTMLCode = "";
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

        console.log(this.sharedService.currentSite);
        this.webSite = this.createCurrentSite();

        this.selectedPage = this.webSite.pages[0];
        $('.menu').css("background-color", this.webSite.menuColor);
        this.getRouteParams();
    }


    ngOnDestroy(){
        this.subParams.unsubscribe();
    }

    createCurrentSite(){
        //TODO pagesString добавить сюда
        let currentSite = this.sharedService.currentSite;
        let curSiteId = currentSite.id;
        let curSiteTitle = currentSite.title;
        let curSiteDescr = currentSite.description;
        let curSiteTags = currentSite.tags;
        let curSiteMenuType = currentSite.menuType;
        let curSiteMenuColor = currentSite.menuColor;

        let webSitee = new WebSite( curSiteTitle,
            curSiteDescr,
            curSiteTags,
            2,
            curSiteMenuType,
            curSiteMenuColor );
        webSitee.id = curSiteId;

        console.log(webSitee);
        return webSitee;
    }

    saveSiteToServer(){
        this.webSite.pagesString = JSON.stringify(this.webSite.pages);
        this.siteCreationService.saveOrUpdateSite(this.webSite)
            .subscribe(siteFromServer => {
               if(siteFromServer){
                   this.router.navigate(['/userpage']);
               } else console.log('EBANII SAIT NE SOZDALSYA NAHUI');
            });

    }

    getRouteParams(){
        //to get params from route
        this.subParams = this.activatedRoute.params.subscribe(params => {
            this.editedSiteId = +params['id']; // (+) converts string 'id' to a number
            // In a real app: dispatch action to load the details here.
        });
    }


    savePost() {
        let text = $('#froala-editor').froalaEditor('html.get');
        if (text != null && text != '') {
            this.selectedPage.lineContainers[this.selectedLineContainerID].containers[this.selectedContainerID].postText = text;
        }
    }

    addPage(title: any) {
        this.webSite.pages.push(new Page(title));
    }

    removePage(id: number) {
        console.log(this.webSite.pages[id].name);
        this.webSite.pages.splice(id, 1);
        if (this.webSite.pages.length == 0) {
            this.selectedPage = new Page("");
        }
        else {
            this.selectedPage = this.webSite.pages[0];
        }


    }

    selectPage(page: Page) {
        this.selectedPage = page;
    }

    editTitlePage(title: string) {
        this.selectedPage.name = title;
    }

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
        $('#froala-editor').froalaEditor('html.set', container.postText);
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

    toHTML() {
        this.HTMLCode = PageToHTML.transfer(this.selectedPage);
    }

    editSettingsWebSite() {
        $('#editTitle').val(this.webSite.title);
        $('#editDescription').val(this.webSite.description);
        $('#editTag').val('');
        $('#editTypeMenu').val(this.webSite.menuType);
        this.model = this.webSite.menuType;
        this.classInputTitle = "";
        this.newTags=[];
        for(let tag of this.webSite.tags){
            this.newTags.push(tag.tag);
        }
    }


    AddTeg(event: any) {
        if (!this.newTags.includes(event)) {
            if (event) {
                this.newTags.push(event);
            }
        }
    }

    DeleteTag(tag: string) {
        this.newTags.splice(this.newTags.indexOf(tag), 1);
    }

    SafeChange() {

        if ($('#editTitle').val()) {

            let tag: Tag[]=[];
            for(let i=0;i<this.newTags.length;i++){
                tag.push(new Tag(this.newTags[i]));
            }
            this.webSite.title = $('#editTitle').val();
            this.webSite.menuType = $('#editTypeMenu').val();
            this.webSite.menuColor = this.model;
            this.webSite.description = $('#editDescription').val();
            this.webSite.tags = tag;
            $('.menu').css("background-color", this.webSite.menuColor);
            $('#settings-modal').modal('toggle');
        }
        else {
            this.classInputTitle = "has-error"
        }
        console.log(this.webSite);

    }

}
