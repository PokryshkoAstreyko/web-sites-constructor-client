"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var index_1 = require("./_guards/index");
var index_2 = require("./_services/index");
var index_3 = require("./login/index");
var index_4 = require("./home/index");
var index_5 = require("./register/index");
var navbar_component_1 = require("./navbar/navbar.component");
var profile_component_1 = require("./profile/profile.component");
var ng2_dnd_1 = require("ng2-dnd");
var creator_component_1 = require("./creator/creator.component");
var user_page_component_1 = require("./user.page/user.page.component");
var froala_directives_1 = require("./froala.directives");
var ng2_color_picker_1 = require("ng2-color-picker");
var modal_delete_1 = require("./modals/modal.delete/modal.delete");
var modal_edit_title_page_1 = require("./modals/modal.edit.title.page/modal.edit.title.page");
var modal_view_site_1 = require("./modals/modal.view.site/modal.view.site");
var modal_view_code_1 = require("./modals/modal.view.code/modal.view.code");
var panel_tools_pages_1 = require("./creator/panel.tools.pages/panel.tools.pages");
var angular2_datatable_1 = require("angular2-datatable");
var ng2_rating_1 = require("ng2-rating");
var EscapeHtmlPipe = (function () {
    function EscapeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    EscapeHtmlPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = []; }
        // simple JS inj cleanup that should be done on server side primarly
        if (value.indexOf('<script>') != -1) {
            console.log('JS injection. . . html purified');
            return value.replace('<script>', '').replace('<\/script>', '');
        }
        return this.sanitized.bypassSecurityTrustHtml(value); // so ng2 does not remove CSS
    };
    return EscapeHtmlPipe;
}());
EscapeHtmlPipe = __decorate([
    core_1.Pipe({ name: 'escapeHtml', pure: false }),
    __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
], EscapeHtmlPipe);
exports.EscapeHtmlPipe = EscapeHtmlPipe;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_1.routing,
            ng2_dnd_1.DndModule.forRoot(),
            ng2_color_picker_1.ColorPickerModule,
            ng2_rating_1.RatingModule,
            angular2_datatable_1.DataTableModule
        ],
        declarations: [
            app_component_1.AppComponent,
            index_3.LoginComponent,
            index_4.HomeComponent,
            index_5.RegisterComponent,
            navbar_component_1.NavbarComponent,
            profile_component_1.ProfileComponent,
            creator_component_1.CreatorComponent,
            EscapeHtmlPipe,
            user_page_component_1.UserPageComponent,
            froala_directives_1.FroalaEditorDirective, froala_directives_1.FroalaViewDirective,
            modal_delete_1.ModalDelete,
            modal_edit_title_page_1.ModalEditTitle,
            modal_view_site_1.ModalViewSite,
            modal_view_code_1.ModalViewCode,
            panel_tools_pages_1.PanelToolsPages,
        ],
        providers: [
            index_1.AuthGuard,
            index_2.AuthenticationService,
            index_2.UserService,
            forms_1.FormBuilder,
            forms_1.ControlContainer
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map