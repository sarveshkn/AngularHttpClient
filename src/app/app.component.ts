import { Component } from '@angular/core';
import { PersonComponent } from './person/person.component';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  { name = 'Angular'; }
