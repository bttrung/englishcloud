import {Component, HostListener, Directive, ElementRef, Input, } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
})

@Directive({
  selector: '[myHighlight]'
})



export class AppComponent {
    constructor(private el: ElementRef) {}
    title = 'Welcome to English Cloud!';


    logConsole(): void {
        console.log("sfsdfsd");
    }


    @HostListener('scroll') onscroll() {
        console.log("scroll...");
        this.logConsole();
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('yellow');
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }
    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
    
    @Input() highlightColor: string;
}