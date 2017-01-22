import {Page} from "../creator/page";
import {LineContainer} from "../creator/line.container";
import {Container} from "../creator/container";
import {Observable} from "rxjs";

export class JsonParse {

    public static ourParseJSON(pagesString : string): Page[]{
        if(!pagesString){
            return;
        }
        let newPages: Page[] = [];
        let parsedPagesString = JSON.parse(pagesString);

        for (let i = 0; i < parsedPagesString.length; i++) {
            newPages.push(new Page(parsedPagesString[i].name));
            for (let j = 0; j < parsedPagesString[i].lineContainers.length; j++) {
                newPages[i].lineContainers.push(new LineContainer());
                for(let k=0;k<parsedPagesString[i].lineContainers[j].containers.length;k++){
                    newPages[i].lineContainers[j].containers.push(new Container());
                    newPages[i].lineContainers[j].containers[k].postText=parsedPagesString[i].lineContainers[j].containers[k].postText;
                    newPages[i].lineContainers[j].containers[k].size=parsedPagesString[i].lineContainers[j].containers[k].size;
                }
            }
        }
        return newPages;
    }
}