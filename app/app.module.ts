import {NgModule, PipeTransform, Pipe}      from '@angular/core';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import {FormsModule, FormBuilder, ControlContainer}    from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService } from './_services/index';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { RegisterComponent } from "./signup/index";
import { NavbarComponent } from "./navbar/navbar.component";
import { ProfileComponent } from "./profile/profile.component";
import { DndModule } from "ng2-dnd";
import { CreatorComponent } from "./creator/creator.component";


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
        DndModule.forRoot()
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        RegisterComponent,
        NavbarComponent,
        ProfileComponent,
        CreatorComponent,

        EscapeHtmlPipe

    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        UserService,

        FormBuilder,
        ControlContainer
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }