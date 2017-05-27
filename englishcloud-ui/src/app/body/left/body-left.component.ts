import {Component} from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'body-left-component',
    templateUrl: 'body-left.component.html',
    styleUrls: ['body-left.component.css'],

})

export class BodyLeftComponent {
    title: string = "Body Left Componenents"
    constructor() {}

    initData = {
        'Link 1': 'Link 1 value', 'Link 2': 'Link 2 value', 'Link 3': 'Link 3 value',
        'Link 4': 'Link 4 value', 'Link 5': 'Link 5 value'
    };

    onClickHandle($event): void {
        console.log($event);
        $("a[class='active']").attr("class", "");
        $event.target.className = 'active';
    }
    

}
