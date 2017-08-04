import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpClientService } from './http-client.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operator/map';

import 'rxjs/add/observable/of';

@Injectable()
export class EmployeeService {

    constructor(private http: Http) { }

    getEmployee(page:any, offSet:any): Observable<any> {
		//return this.clientHttpap.post('/employee/showemployee', {});

    return this.http.post("http://localhost:8000/api/employee/showemployee", {

       model:{
            p_pageNo: page,
            p_offset: offSet
        }
    }).map(res => {
      let body = res.json() || {
       
      };
      
      return body;
     
    });
		
    };

    deleteEmployee(id:any): Observable<any> {
       return this.http.post("http://localhost:8000/api/employee/deleteEmployee", {
         model: {
                p_emp_id: id
            }
        }).map(res => {
      let body = res.json() || {};
      
      return body;
     
    });
		
    }

    addEmployee(id:any, firstName:any, lastName:any, email:any, password:any, j_pos:any, dept:any, sal:any): Observable<any> {
       return this.http.post("http://localhost:8000/api/employee/addEmployee", {
         model: {
                p_emp_id: id,
                p_emp_fName: firstName,
                p_emp_lName: lastName,
                p_emp_email: email,
                p_emp_password: password,
                p_emp_j_pos: j_pos,
                p_emp_dept: dept,
                p_emp_sal: sal
            }
        }).map(res => {
      let body = res.json() || {};
      
      return body;
     
    });
		
    }

}
