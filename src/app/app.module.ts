import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { PersonService } from './service/person.service'
import { PersonComponent } from './person/person.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, JsonpModule ],
  declarations: [ AppComponent, PersonComponent ],
  bootstrap:    [ AppComponent ],
  providers : [ PersonService ] 
})
export class AppModule { }
