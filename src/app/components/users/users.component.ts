import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service'

import { Router } from '@angular/router'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    private login: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.login.token != null){
      console.log("users")
    }else{
      this.router.navigate(['login']);
    }
  }

}
