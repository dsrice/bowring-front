import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service'
import {UserService} from '../../services/user/user.service'

import { Router } from '@angular/router'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    private login: LoginService,
    private user: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.login.token != null){
      console.log(this.login.token)

      this.user.userlist();
      console.log(this.user.userlist())

    }else{
      this.router.navigate(['login']);
    }
  }

}
