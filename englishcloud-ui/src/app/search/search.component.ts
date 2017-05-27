import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'search-component',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.css'],

})


export class SearchComponent {
    title: string = "My Search Componenents"
    constructor() { }
    clickMe($event): void {
        console.log("Clicked me!")
        console.log(event);

    }


    onKeyUpEnter($event): void {

        //    if ($event.which === 13) {// for enter keypress event

        if ($event.target.value !== '') {

            
            alert($event.target.value);
            

        }

    }

     setstyles() {
        return {
            'font-weight': 'bold',
            'color':'red',
            'font-size': '24px'
        }
     }

    // old behaviors
    /* onKeyUpEnter($event): void {
 
         //    if ($event.which === 13) {// for enter keypress event
 
         if ($event.target.value !== '') {
             $("body-left-component div[class='alert alert-success fade in alert-dismissable']").attr("class", "alert alert-info fade in alert-dismissable");
             $("body-left-component div#subjects")
                 .prepend('<div class="alert alert-success fade in alert-dismissable" style="margin-bottom: 5px; text-align: center;padding-top:10px"><strong>'
                 + '<a href="#" class="close" data-dismiss="alert" aria-label="close" title="close">×</a>'
                 + $event.target.value + '</strong></div>');
 
 
             //onclick behavior
             $("body-left-component div.alert").click(function () {
                 $("body-left-component div[class='alert alert-success fade in alert-dismissable']").attr("class", "alert alert-info fade in alert-dismissable");
                 $(this).attr("class", "alert alert-success fade in alert-dismissable");
             });
 
             $event.target.value = '';
 
             var size = $("[class*=alert-]").length;
             if (size >= 6) {
                 $("[class*=alert-]:last").remove();
 
             }
 
         }
 
     }*/
}
