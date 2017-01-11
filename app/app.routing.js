"use strict";
var router_1 = require("@angular/router");
var index_1 = require("./login/index");
var index_2 = require("./home/index");
var index_3 = require("./_guards/index");
var index_4 = require("./signup/index");
var profile_component_1 = require("./profile/profile.component");
var creator_component_1 = require("./creator/creator.component");
var appRoutes = [
    { path: 'login', component: index_1.LoginComponent },
    { path: '', component: index_2.HomeComponent, canActivate: [index_3.AuthGuard] },
    { path: 'register', component: index_4.RegisterComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: 'creator', component: creator_component_1.CreatorComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map