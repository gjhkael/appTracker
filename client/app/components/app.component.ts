/**
 * Created by pkulenkamp on 25/10/2016.
 */
import {Component} from '@angular/core';
import {JobApplication} from '../models/job-application.model';
import {ApplicationService} from '../services/application.service'
import {ServerConnector} from '../services/server-connector'


@Component({
  selector: 'my-app',
  templateUrl: '../../html/app.html',
  styleUrls: ['../../css/app.css'],
  providers: [ApplicationService]
})

export class AppComponent {

  constructor(private applicationService: ApplicationService) { }

  applications: JobApplication[];
  currentApplication: JobApplication;
  application: JobApplication;
  editCompany: boolean = false;

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

  showDetails(item) {
    this.currentApplication = item;
  }

  closeDetails() {
    this.currentApplication = null;
  }
}