
import {Component, OnInit} from "@angular/core";
import {AuthenticationService} from "../_services/authentication.service";
import {Router} from "@angular/router";
import {WebSite} from "../user.page/website";
import {IColorPickerConfiguration} from "ng2-color-picker/lib";

declare var $: any;
@Component({
    moduleId: module.id,
    templateUrl: 'navbar.component.html',
    selector: 'navbar'

})
export class NavbarComponent implements OnInit{

    newTags: string[]=[];
    classInputTitle: string='';
    public config: IColorPickerConfiguration;
    public model: any;

    constructor(private router: Router,
                private authenticationService: AuthenticationService ){

        this.model = '#6699ff';
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
        this.router.navigate(['/login']);
    }

    toFormCreateWebSite() {
        this.newTags = [];
        $('#inputTitle').val('');
        $('#inputDescription').val('');
        $('#inputTag').val('');
        $('#selectTypeMenu').val(1);
        this.model = '#6699ff';
        this.classInputTitle="";
    }

    toSubmitForm() {
        if ($('#inputTitle').val()) {
           // this.webSites.push(new WebSite($('#inputTitle').val(), $('#inputDescription').val(), this.newTags,0,$("#selectTypeMenu").val(),this.model));
            $('#create-modal').modal('toggle');
        }
        else {
            this.classInputTitle="has-error"
        }
    }

    toAddTeg(event: any) {
        if(!this.newTags.includes(event)){
            if(event){
                this.newTags.push(event);
            }
        }
    }

    DeleteTeg(event: any) {
        this.newTags.splice(this.newTags.indexOf(event), 1);
    }


}
