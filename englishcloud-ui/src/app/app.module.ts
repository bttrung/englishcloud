import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './home/app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {BodyComponent} from './body/body.component';
import {AnnComponent} from './ann/ann.component';
import {SearchComponent} from './search/search.component';
import {StudyComponent} from './study/study.component';
import {BodyLeftComponent} from './body/left/body-left.component';
import {BodyRightComponent} from './body/right/body-right.component';
import {BodyCenterComponent} from './body/center/body-center.component';
import {CardComponent} from './templates/card/card.component';
import {LoginComponent} from './templates/login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        AnnComponent,
        SearchComponent,
        BodyComponent,
        FooterComponent,
        StudyComponent,
        BodyLeftComponent,
        BodyRightComponent,
        BodyCenterComponent,
        CardComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
