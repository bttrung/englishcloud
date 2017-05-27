import {Component} from '@angular/core';
//import {$} from "protractor/built";
import * as $ from 'jquery';

@Component({
    selector: 'study-component',
    templateUrl: 'study.component.html',
    styleUrls: ['study.component.css'],

})

export class StudyComponent {
    firstname: string = "angular sj2";
    isShow: boolean = true;
    isColor: boolean = false;

    courses: string[] = ['Angular', 'Algorighm', 'NodeJS']

    //    ngSwitch
    mySwitch: string = "b";

    //ngClass
    isList: boolean = true;
    setclasses() {
        return {
            'glyphicon-th': !this.isList,
            'glyphicon-th-list': this.isList
        }
    }

    //ngStyle
    setstyles() {
        return {
            'font-weight': 'bold',
            'font-size': '24px'
        }
    }

    //    title: string = "My Search Componenents"
    //    constructor() {}
    //    clickMe($event): void {
    //        console.log("Clicked me!")
    //        console.log(event);
    //
    //    }
    //
    //    onKeyUp($event): void {
    //        if ($event.which === 13) {
    //            $("p#search-results").append('<span class="label label-info">' + $event.target.value + '</span> ');
    //            $event.target.value = '';
    //        }
    //
    //    }
    //    textChange(): void {
    //        console.log("Text change me!")
    //
    //    }
}
