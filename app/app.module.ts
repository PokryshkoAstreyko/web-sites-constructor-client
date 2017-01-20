import { NgModule, PipeTransform, Pipe }      from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { FormsModule, FormBuilder, ControlContainer }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService } from './_services/index';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { RegisterComponent } from "./register/index";
import { NavbarComponent } from "./navbar/navbar.component";
import { ProfileComponent } from "./profile/profile.component";
import { DndModule } from "ng2-dnd";
import { CreatorComponent } from "./creator/creator.component";
import { UserPageComponent } from "./user.page/user.page.component";
import {Main} from "./main/main"
import {FroalaViewDirective, FroalaEditorDirective} from "./froala.directives";
import { ColorPickerModule } from 'ng2-color-picker';
import {ModalDelete} from './modals/modal.delete/modal.delete'
import {ModalEditTitle} from "./modals/modal.edit.title.page/modal.edit.title.page";
import {ModalViewSite} from "./modals/modal.view.site/modal.view.site"
import {ModalViewCode} from "./modals/modal.view.code/modal.view.code";
import {PanelToolsPages} from "./creator/panel.tools.pages/panel.tools.pages"
import {DataTableModule} from "angular2-datatable";
import {RatingModule} from "ng2-rating";
import { TagCloudModule } from 'angular-tag-cloud-module';
import {ModalViewDescription} from "./modals/modal.view.description/modal.view.description";
import {SiteCreationService} from "./_services/site.creation.service";
import {SharedService} from "./_services/shared.service";

@Pipe({ name: 'escapeHtml', pure: false })
export class EscapeHtmlPipe implements PipeTransform {
    constructor(private sanitized: DomSanitizer) { }
    transform(value: any, args: any[] = []) {
        // simple JS inj cleanup that should be done on server side primarly
        if (value.indexOf('<script>') != -1) {
            console.log('JS injection. . . html purified');
            return value.replace('<script>', '').replace('<\/script>', '');
        }
        return this.sanitized.bypassSecurityTrustHtml(value); // so ng2 does not remove CSS
    }
}


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        DndModule.forRoot(),
        ColorPickerModule,
        RatingModule,
        DataTableModule,
        TagCloudModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        RegisterComponent,
        NavbarComponent,
        Main,
        ProfileComponent,
        CreatorComponent,
        EscapeHtmlPipe,
        UserPageComponent,
        FroalaEditorDirective,FroalaViewDirective,
        ModalDelete,
        ModalEditTitle,
        ModalViewSite,
        ModalViewCode,
        PanelToolsPages,
        ModalViewDescription,
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        UserService,
        SiteCreationService,
        SharedService,

        FormBuilder,
        ControlContainer
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }