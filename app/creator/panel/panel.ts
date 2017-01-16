import {Component, Input} from "@angular/core";
/**
 * Created by Dima on 16.01.2017.
 */



@Component({
    templateUrl: 'app/creator/panel/panel.html',
    selector: 'panelborder',
})

export class PanelBorder {
    @Input() text: string;
    styleBorder: boolean = false;

    toBlackBorder(){
        this.styleBorder=true;
    }
    toDefaultBorder(){
        this.styleBorder=false;
    }
}