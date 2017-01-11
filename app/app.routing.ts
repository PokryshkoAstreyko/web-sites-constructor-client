import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { AuthGuard } from './_guards/index';
import {RegisterComponent} from "./register/index";
import {ProfileComponent} from "./profile/profile.component";
import {CreatorComponent} from "./creator/creator.component";
import {UserPageComponent} from "./user.page/user.page.component";

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent},
    { path: 'creator', component: CreatorComponent},
    { path: 'userpage', component: UserPageComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);