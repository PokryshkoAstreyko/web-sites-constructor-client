
import {Component, OnInit} from "@angular/core";
import {AuthenticationService} from "../_services/authentication.service";
import {Router} from "@angular/router";
import {WebSite} from "../user.page/website";
import {IColorPickerConfiguration} from "ng2-color-picker/lib";
import {SiteCreationService} from "../_services/site.creation.service";
import {isUndefined} from "util";
import {Tag} from "../user.page/tag";
import {SharedService} from "../_services/shared.service";

declare var $: any;
@Component({
    moduleId: module.id,
    templateUrl: 'navbar.component.html',
    selector: 'navbar'

})
export class NavbarComponent implements OnInit{

    isUserInfoShowed: boolean;

    newTags: string[]=[];
    titleInputClass: string='';

    public config: IColorPickerConfiguration;
    public menuColor: any;


    constructor(private router: Router,
                private authenticationService: AuthenticationService,
                private siteCreationService: SiteCreationService,
                private sharedService : SharedService){

        this.isUserInfoShowed = !!localStorage.getItem('currentUser');

        this.menuColor = '#6699ff';
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
    ngOnInit(){
        $('[data-toggle="tooltip"]').tooltip();
    }

    goLoginPage(){
        //TODO тут надо удалять из локал стореджа юзера
        this.router.navigate(['/login']);
    }

    clearCreationWebSiteForm() {
        this.newTags = [];
        $('#titleInput').val('');
        $('#descriptionInput').val('');
        $('#tagInput').val('');
        $('#menuType').val(1);
        this.menuColor = '#6699ff';
        this.titleInputClass="";
    }

    submitSiteSettingsForm() {
        if ($('#titleInput').val()) {

            $('#create-modal').modal('toggle');
            let tags: Tag[]=[];

            for(let i=0; i<this.newTags.length; i++){
                tags.push(new Tag(this.newTags[i]));
            }
            this.saveSite(
                new WebSite(
                        $('#titleInput').val(),
                        $('#descriptionInput').val(),
                        tags,
                        0,
                        $("#menuType").val(),
                        this.menuColor
                    )
                );
        }
        else {
            this.titleInputClass="has-error"
        }
    }

    addTag(event: any) {
        if(!this.newTags.includes(event)){
            if(event){
                this.newTags.push(event);
            }
        }
    }

    deleteTag(event: any) {
        this.newTags.splice(this.newTags.indexOf(event), 1);
    }

    saveSite(site : WebSite){
        this.siteCreationService.saveOrUpdateSite(site).
            subscribe(siteFromServer => {
                if(siteFromServer){
                    this.sharedService.currentSite = siteFromServer;
                    this.router.navigate( ['/creator', siteFromServer.id] );
                } //TODO возможно сделать обработку ошибки,
                    // если сайт на серваке уже будет с таким именем
        })
    }


    // на юзерпейдже будет смотреться прараметр,
    // если my - будет грузить текущего юзера
    // + значок редактирования будет активным
    //если придет не 'my' параметр, тогда будет грузиться страница с id юзера
    // + значок редактирования будет спрятам

    loadLoggedInUserUserPage(){
        if(localStorage.getItem('currentUser')) {
            this.router.navigate(['/userpage', 'my']);
        }
    }

}
