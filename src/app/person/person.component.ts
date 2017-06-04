import { Component } from '@angular/core';
import { PersonService } from '../service/person.service';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Education } from './Education';

@Component({
    selector: 'person-page',
    templateUrl: './person.component.html'
})


export class PersonComponent {

    personService : PersonService;
    education : Education;
    errorMessage: string;

    constructor (personService : PersonService) {
        this.personService = personService;
    }

    print() {
        console.log("Inside print of Client");
        this.personService.getPerson().subscribe(p => this.education = p);
    }

}