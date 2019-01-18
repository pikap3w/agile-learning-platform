import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.css']
})
export class LoginRegComponent implements OnInit {
	entry = {};
	login_entry = {};
 	errors = {};
 	login_errors = {};
  	dup_errors = {};


  constructor(private _route: ActivatedRoute, private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  	this.entry = {username: "", password: "", password_conf: ""};
  	this.login_entry = {username: "", password: ""};
  	this.errors = {username: false, password: false, password_conf: false};
  	this.login_errors = {username: false, password: false};
  	this.dup_errors = {err: false};
  }

  registerButton() {
  	var observable = this._httpService.register(this.entry);
  	observable.subscribe(data2 => {
  		if (data2['errors']){
  			this.errors = data2['errors'];
  		}
  		else {
  			this.entry = {username: "", password: "", password_conf: ""};
  			return this._router.navigate(['lesson/overview']);
  		}
  	});
  }

  loginButton() {
  	var observable = this._httpService.login(this.login_entry);
  	observable.subscribe(data2 => {
  		this.login_entry = {username: "", password: ""};
      	return this._router.navigate(['lesson/overview']);
  	},
    (err) => {
      let errors = err.json();
      if (errors.errmsg)
      {
        this.dup_errors = {err: "Duplicate found"};
      }
      else
      {
        this.login_errors = errors;
      }
      this.login_entry = {username: "", password: ""};
    });
  }

}
