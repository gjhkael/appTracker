import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent}  from '../components/app.component';
import {ApplicationDetailsComponent} from '../components/application-details.component';
import {ApplicationListComponent} from '../components/application-list.component';
import {FileUploadComponent} from'../components/file-upload.component';
import {ApplicationItemComponent} from '../components/application-item.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SearchPipe} from '../pipes/text.pipe';
import {TogglePipe} from '../pipes/toggle.pipe';
import {FileTypeService} from "../services/file-type.service";
import {ServerConnector} from "../services/server-connector";
import {ContactTypeService} from "../services/contact-type.service";

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, NgbModule.forRoot()],
    declarations: [AppComponent, ApplicationDetailsComponent, ApplicationListComponent, FileUploadComponent, ApplicationItemComponent, SearchPipe, TogglePipe],
    bootstrap: [AppComponent],
    providers: [ServerConnector,
        {provide: FileTypeService, useClass: FileTypeService, useFactory: null},
        {provide: ContactTypeService, useClass: ContactTypeService, useFactory: null}]
})
export class AppModule {
}