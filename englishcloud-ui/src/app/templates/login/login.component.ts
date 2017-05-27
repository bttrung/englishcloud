import {Component, Input} from '@angular/core';

@Component({
    selector: 'login-component',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],

})

export class LoginComponent {
    onSubmitLogin(): void {
        alert("Submit login");
    }
    
//    @Input() enText: s    tring;
//    @Input() viText: string     ;

//    constructor(enText: string, viText: string)     {
//        this.enText = enTex    t;
//        this.viText = viTex    t;
//    }


}
