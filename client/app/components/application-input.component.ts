/**
 * Created by pkulenkamp on 18/11/2016.
 */
import {Component, Output, Input, EventEmitter} from "@angular/core";
import {ServerConnector} from "../services/server-connector";
import {ContactTypeService} from "../services/contact-type.service";
import {ContactType} from "../models/contact-type.model";
import {JobApplication} from "../models/job-application.model";
import {Company} from "../models/company.model";
import {CompanyService} from "../services/company.service";
import {Observable} from "rxjs/Rx";
import {ApplicationService} from "../services/application.service";
import {NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-input',
    templateUrl: '../../html/application-input.html',
    styleUrls: ['../../css/application-input.css'],
})
export class ApplicationInputComponent {
    @Output() close = new EventEmitter();
    @Input() application: JobApplication;

    companies: Company[] = [];
    contactTypes: ContactType[];
    error: string;

    showError: boolean = false;
    item: any;
    isNew: boolean = false;

    today = new Date();
    dateApplied: NgbDateStruct;
    followUp: NgbDateStruct;

    constructor(private contactTypeService: ContactTypeService, private companyService: CompanyService,
                private applicationService: ApplicationService, private connector: ServerConnector,
                private parserFormatter: NgbDateParserFormatter) {
        contactTypeService.getContactTypes().subscribe(result => {
            this.contactTypes = result;
        });
        companyService.getCompanies().subscribe(result => {
            this.companies = result;
        });
    };

    searchCompanies = (text$: Observable<string>) =>
        text$
            .debounceTime(200)
            .distinctUntilChanged()
            .map(term => term === '' ? []
                : this.companies.filter(v => new RegExp(term, 'gi').test(v.name)).splice(0, 9).concat(new Company({"name": term})));

    taFormatter = (x: {name: string}) => x.name;

    validateInput() {
        if (typeof(this.application.company) === 'string') {
            let searchCompany: any = this.application.company;
            let foundCompany: Company = this.companies.find(function (company) {
                return company.name.toLowerCase() === searchCompany.toLowerCase()
            })

            if (foundCompany) {
                this.application.company = foundCompany;
            } else {
                this.application.company = new Company({name: searchCompany});
            }
        }
    }

    closeSelf() {
        this.close.emit(this.isNew);
    }

    submitApplication() {

        if (this.application.appliedTo) {
            //translate date structs into actual dates
            this.application.dateApplied = new Date(this.parserFormatter.format(this.dateApplied));
            this.application.followUp = new Date(this.parserFormatter.format(this.followUp));
        } else{
            this.application.dateApplied =null;
            this.application.followUp = null;
        }
        this.applicationService.postApplication(this.application).subscribe(
            (data: JobApplication) => {
                this.isNew = this.application.id == null;
                this.application.id = data.id;
                this.application.contactType.type = data.contactType.type;
                this.closeSelf();
            }
        );
    }

}
