/**
 * Created by pkulenkamp on 25/10/2016.
 */
import {Component} from '@angular/core';
import {JobApplication} from '../models/job-application.model';
import {ApplicationService} from '../services/application.service'

@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: '../../html/app.html',
    styleUrls: ['../../css/app.css'],
    providers: [ApplicationService]
})

export class AppComponent {

    constructor(private applicationService: ApplicationService) {
    }

    applications: JobApplication[];
    currentApplication: JobApplication;
    application: JobApplication;
    editCompany: boolean = false;
    showAppInput: boolean = false;

    ngOnInit(): void {
        this.getApplications();
    }

    getApplications(): void {
        this.applicationService.getApplications().subscribe(
            (data: JobApplication[]) => {
                this.applications = data;
            }
        );
    }

    handleSelection(item: any) {
        if (!item.modify) {
            this.showDetails(item.application);
        } else {
            this.showApplicationInput(item.application);
        }
    }

    showDetails(application: JobApplication) {
        this.currentApplication = application;
    }

    showApplicationInput(application: JobApplication) {
        this.showAppInput = true;
        this.currentApplication = application;
    }

    closeDetails() {
        this.currentApplication = null;
    }

    closeApplicationInput(newApp: boolean) {
        this.showAppInput = false;
        if (newApp)
            this.getApplications();
        this.currentApplication= this.currentApplication.id?this.currentApplication:null;
    }
}