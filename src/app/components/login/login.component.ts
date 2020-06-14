import { Component, OnInit ,Output ,EventEmitter} from '@angular/core';
import { Router } from '@angular/router'
import { Subscription } from 'rxjs';
import {LoginService} from '../../services/login.service'
import {SessionService} from '../../services/core/session.service'

import {Auth} from '../../models/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private service: LoginService ,
    public sessionService: SessionService ,
    private router: Router
  ) { }

  ngOnInit(): void {}

  @Output() auth: Auth = new Auth();

  private subscription: Subscription;

  mail = "";
  pwd = "";

  login(){
    const body = {
      email: this.mail ,
      password: this.pwd
    }
		this.service.login(body)
		.then(result => {
      this.sessionService.login();
      this.router.navigate(['users']);
		});
	}
}
