import {Component} from '@angular/core';

@Component({
    selector: 'header-component',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css'],

})


export class HeaderComponent {
    title: string = "My Header Componenents"
    student: any = {'name':'Robert Bui', 'age': 30}
    link: string = 'https://www.facebook.com/'
    isActive: boolean = true
    showInfo(): string {
        return this.student.name + '---' + this.student.age;
    }
    constructor(){}
    
     
} 
//export class HeaderComponent {
//    title: string = "My Header Componenents"
//    student: any = {'name':'Robert Bui', 'age': 30}
//    link: string = 'https://www.facebook.com/'
//    isActive: boolean = true
//    showInfo(): string {
//        return this.student.name + '---' + this.student.age;
//    }
//    constructor(){}
//} 
