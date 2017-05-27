import { Component } from '@angular/core';

@Component({
  selector: 'body-component',
  templateUrl: 'body.component.html',
  styleUrls: ['body.component.css'],

})

export class BodyComponent {
  title: string = "My Content Componenents"
  isDisableLeftMenu: boolean = true;
  constructor() { }

 
}
