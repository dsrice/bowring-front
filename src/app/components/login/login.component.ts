import { Component, OnInit ,Output } from '@angular/core';
import { Router } from '@angular/router'

import {LoginService} from '../../services/login.service'

import {Auth} from '../../models/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private service: LoginService ,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  @Output() auth: Auth = new Auth();

  mail = "";
  pwd = "";

  login(){
    const body = {
      email: this.mail ,
      password: this.pwd
    }
		this.service.login(body)
		.then(result => {
      this.router.navigate(['users']);
		});
	}
}
