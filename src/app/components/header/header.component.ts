import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  users:string;
  scorelist:string;

  ngDocheck(){
    (this.router.url === '/users')?
      this.users = 'active'
    :
      this.users = ''
    ;

    (this.router.url === '/scorelist')?
      this.scorelist = 'active'
    :
      this.scorelist = ''
    ;
  }
}
