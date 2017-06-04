import { Injectable }    from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Education } from '../person/Education';

@Injectable()
export class PersonService {
  private heroesUrl = 'http://localhost:8080/LoanService/rest';  // URL to web api

  constructor(private http: Http) { }

  getPerson(): Observable <Education> {
      let headers = new Headers([ 
                                { 'Content-Type': 'application/json'}]);
      var name = {"school":"HAL School Wow"};
      let options = new RequestOptions({ headers: headers });
      //console.log("Inside getPersons service " + this.http.get(this.heroesUrl));
      return this.http.post(`${this.heroesUrl}/person/education`,  name  , 
       {headers: this.getHeaders()}).map(this.extractData).catch(this.handleError);
  }

  private extractData(response: Response) : Response {
    console.log("Extract Data " + response);
    let body = response.json();
    console.log(body);
    return body || { };
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  private handleError (error: Response | any) {
    console.log("Extract error " + error);
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      console.error("body error " + errMsg);
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
