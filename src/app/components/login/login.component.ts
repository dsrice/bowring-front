import { Component, OnInit } from '@angular/core';

import {LoginService} from '../../services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private service: LoginService
  ) { }

  ngOnInit(): void {
  }

  mail = "";
  pwd = "";

  login(){
    const body = {
      email: this.mail ,
      password: this.pwd
    }
		this.service.login(body)
		.then(result => {
      console.log(result)
		});
	}
}
