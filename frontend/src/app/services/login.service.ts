import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { RootService } from './root.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', observe: 'response'})
};

@Injectable({
  providedIn: 'root'
})

export class LoginService extends RootService {
    isLoggedIn = false;
    CSRFToken = ''
    
    constructor(private http:HttpClient, private router: Router) {
      super();
    }

    getsession(){
      return this.http.get(this.URL + '/getsession').subscribe(
        (data: any) => {
          console.log(data['login'])
          this.isLoggedIn = data['login']
          // this.loginService.isLoggedIn = data
        }
      )
    }

    getcsrf(){
      this.http.get(this.URL + '/getcsrf', {observe: 'response'}).subscribe(
        (data: any) => {
          // window.sessionStorage.setItem('CSRFToken', data.headers.get("X-CSRFToken"))
          // console.log('token: ', window.sessionStorage.getItem('CSRFToken'))
          this.CSRFToken = data.headers.get("X-CSRFToken")
          // console.log(this.CSRFToken)
        }
      )
    }

    login(username: string, password: string): Observable<any> {
      console.log('called api')
      const httpHeaders = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json', 'X-CSRFToken': this.CSRFToken})
      };
      return this.http.post(this.URL + '/login', {
        'email':username, 'password':password
      }, httpHeaders)
    }

    logout(){
      console.log("storage cleared");
      this.isLoggedIn = false;
      window.sessionStorage.clear();
    }
}