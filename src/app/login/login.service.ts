import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class LoginService {

  result:any;

  constructor(private _http: Http) { }

  getUsers() {
    return this._http.get("/api/user")
    .map(result => this.result = result.json());
  }

  postLogin(dataLogin){
    return this._http.post('/api/login', dataLogin).subscribe();
  }
}
