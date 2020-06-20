import { Component, OnInit ,Output ,EventEmitter} from '@angular/core';
import {LoginService} from '../../services/login.service'
import {UserService} from '../../services/user/user.service'
import {SessionService} from '../../services/core/session.service'
import { HttpHeaders } from '@angular/common/http';

import {User} from '../../models/user';

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
  ) { }

  public info = false; 

  list:User[];

  ngOnInit(): void {
    this.user.userlist()
    .then((res) => {
      this.list = res;
    });
    console.log(this.list)
  }

}
