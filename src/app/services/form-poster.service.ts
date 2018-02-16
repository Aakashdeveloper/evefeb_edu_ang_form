import {Injectable} from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Employee} from '../models/employee.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()

export class FormPoster{
    
    constructor(private http:Http){}
    private extractData(res:Response){
        let body = res.json();
        return body.fields || { }
    }
    private handleError(error:any){
        return Observable.throw(error.statusText)
    }
    postEmployeeForm(employee:Employee):Observable<any>{
        let body = JSON.stringify(employee);
        let headers = new Headers({'Content-Type':'application/json'})
        let options = new RequestOptions({headers:headers})
        return this.http.post('http://localhost:3100/postemployee',body,options)
                        .map(this.extractData)
                        .catch(this.handleError)
    }
}