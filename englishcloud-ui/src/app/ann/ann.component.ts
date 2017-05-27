import {Component} from '@angular/core';

@Component({
    selector: 'ann-component',
    templateUrl: 'ann.component.html',
    styleUrls: ['ann.component.css'],

})

export class AnnComponent {
    title: string = "My Ann Componenents"
    isInActive: boolean = true;
    constructor(){}
}
