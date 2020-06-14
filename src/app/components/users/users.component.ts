import { Component, OnInit ,Output ,EventEmitter} from '@angular/core';
import {LoginService} from '../../services/login.service'
import {UserService} from '../../services/user/user.service'
import {SessionService} from '../../services/core/session.service'
import { HttpHeaders } from '@angular/common/http';
import { Session } from '../../models/session'; // 追加

import { Router } from '@angular/router'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Output() token = new EventEmitter<HttpHeaders>();

  constructor(
    public login: LoginService,
    public sessionService: SessionService,
    private user: UserService,
    private router: Router
  ) { }

  public info = false; 

  ngOnInit(): void {
    var list = this.user.userlist();
    console.log(list)
  }

}
