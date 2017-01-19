import {Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent implements OnInit {
    model: any = {};
    loading = false;
    error = ''; //отправлять ошибки с бэкэнда потом


    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }


    //TODO массив ошибок для разных ситуаций и возвращать массив в ngFor на страницу
    register() {
        this.loading = true;
        this.authenticationService.register(this.model.username, this.model.password)
            .subscribe(result => {
                if(result == "token"){
                    this.router.navigate(['/']);
                } else if (result == 'That username is already taken!'){
                    this.error = 'That username is already taken!';
                    this.loading = false;
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }


}
