
import {Component} from "@angular/core";
import {AuthenticationService} from "../_services/authentication.service";
import {Router} from "@angular/router";


@Component({
    moduleId: module.id,
    templateUrl: 'navbar.component.html',
    selector: 'navbar'

})
export class NavbarComponent {

    constructor(private router: Router,
                private authenticationService: AuthenticationService ){

    }

    goLoginPage(){
        this.router.navigate(['/login']);
    }


}
