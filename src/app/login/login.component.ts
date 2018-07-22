import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Array<any>;

  constructor(private _dataService: LoginService,private _router: Router) {

  this._dataService.getUsers()
      .subscribe(res => {this.user = res});
  }
  ngOnInit() {
  }
  getLogin(signIn){
    console.log(signIn.value);
    if(this._dataService.postLogin(signIn.value)){
      this._router.navigate(["/wellcome"]);
    }else{
      console.log('false');
    }
  }
}
