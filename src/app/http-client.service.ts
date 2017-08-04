import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs/add/observable/of';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operator/map';

@Injectable()
export class HttpClientService {

  constructor(private http: Http) { }

  getHeader(options?) {
    let headerOptions = options || { 'Content-Type': 'application/json; charset=UTF-8', 'Accept': 'application/json; charset=UTF-8', 'Access-Control-Allow-Origin': '*' };
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let header = new Headers(headerOptions);
    if (currentUser && currentUser.UserLoginToken) {
      header.append('Authorization-Token', currentUser.UserLoginToken);
    }
    return new RequestOptions({ headers: header });
  }

  private extractData(res: Response) {
    // If request fails, throw an Error that will be caught
    if (res.status < 200 || res.status >= 300) {
      console.log('This request has failed ' + res.status);
    } // If everything went fine, return the response
    else {
      let body = res.json() || {};
      console.log(body.MESSAGE);
      return body;
    }
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.log(errMsg);
    return Observable.throw(errMsg);
  }

  get(url): Observable<any> {
    return this.http.get(environment.baseAPIUrl + url, this.getHeader()).map(this.extractData).catch(this.handleError);
  }

  post(url, data): Observable<any> {
    
    return this.http.post(environment.baseAPIUrl + url, data).map(res => {
      let body = res.json() || {};
      
      return body;
     
    });
  }
}
