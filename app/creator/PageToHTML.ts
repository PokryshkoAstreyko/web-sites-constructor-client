import {Page} from "./page";
import {LineContainer} from "./line.container";
/**
 * Created by Dima on 14.01.2017.
 */


export class PageToHTML {
   static result:string="";

    constructor(){

    }
    static transfer (page: Page): any{
        this.result="";
        for(let i=0;i<page.lineContainers.length;i++){
            this.result+="  <div class=\"row\"\n";
            this.linecontainerToHTML(page.lineContainers[i]);
            this.result+="  </div>\n";
        }
        return this.result;
    }
    private static linecontainerToHTML(linecontainer: LineContainer){
        for(let i=0;i<linecontainer.containers.length;i++){
            this.result+="              <div class=\"col-md-"+linecontainer.containers[i].size+" style=\"padding: 0;\">\n";
            this.result+="          "+linecontainer.containers[i].postText+"\n";
            this.result+="              </div>\n"
        }
    }
}