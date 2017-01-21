import {Component, Injectable,Input,Output,EventEmitter} from '@angular/core';
import {WebSite} from "../user.page/website";

/**
 * Created by nipo on 1/20/17.
 */

@Injectable()
export class SharedService {

    currentSite: WebSite;
}