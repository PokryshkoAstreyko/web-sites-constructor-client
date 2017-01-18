import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl: 'profile.component.html',

})

export class ProfileComponent {

    userImgUrl = '/app/profile/img/sarkhad.png';
    cloudData = [
        {text: 'Weight-9', weight: 9},
        {text: 'Weight-7', weight: 7},
        {text: 'Weight-7', weight: 7},
        {text: 'Weight-5', weight: 5},
        {text: 'Weight-1', weight: 1}
    ]

}
