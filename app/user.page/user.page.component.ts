/**
 * Created by Dima on 06.01.2017.
 */

import {Component, ViewChild, ViewChildren, NgModule, OnInit} from "@angular/core";

import {WebSite} from './website';
import {IColorPickerConfiguration} from "ng2-color-picker";
import {ModalText} from "../modals/modal.text";


declare var $: any;
@Component({
    moduleId: module.id,
    templateUrl: 'user.page.component.html',
    styleUrls: ['user.page.component.css'],

})
export class UserPageComponent implements OnInit{
    webSites: WebSite[];
    newTags: string[];

    selectedWebSite: WebSite;
    deleteModal: boolean;
    titleError: boolean;
    showCreateModal: boolean;
    classInputTitle: string='';
    modalText: ModalText= new ModalText();

    public config: IColorPickerConfiguration;
    public model: any;


    constructor() {
        let tags: string[]
        let tag = "tag";
        tags = [];
        this.newTags = [];
        this.deleteModal = false;
        this.titleError = false;
        this.showCreateModal = true;
        this.webSites = [];
        this.selectedWebSite = new WebSite("", "",[], 3,1,"#6699ff");
        for (let i = 1; i <= 10; i++) {
            tags.push(tag + i);
            this.webSites.push(new WebSite("WebSite" + i, "blablablablablablablab" + i, tags,3,1,"#6699ff"));
        }
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

    ngOnInit() {
    }

    public change(val: any) {
        console.log(val);
    }

    toAddTeg(event: any) {
        if(!this.newTags.includes(event)){
            if(event){
                this.newTags.push(event);
            }
        }
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

    DeleteTeg(event: any) {
        this.newTags.splice(this.newTags.indexOf(event), 1);
    }

    selectWebSite(event: any) {
        this.selectedWebSite = event;
    }


    DeleteWebSite() {
        this.webSites.splice(this.webSites.indexOf(this.selectedWebSite), 1);
    }

    viewDeleteModal() {
        this.deleteModal = true;
    }

    toSubmitForm() {

        if ($('#inputTitle').val()) {
            this.webSites.push(new WebSite($('#inputTitle').val(), $('#inputDescription').val(), this.newTags,2,$('#inputDescription').val(),"#6699ff"));
            $('#create-modal').modal('toggle');
        }
        else {
            this.classInputTitle="has-error"
        }
    }
}


