import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../services/core/session.service'
import { HttpHeaders } from '@angular/common/http';
import { Session } from '../../models/session'; // 追加
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public sessionService: SessionService) { }
  public login = false; // 変更
  ngOnInit(): void {
    this.sessionService.sessionState.subscribe((session: Session)=> { // 追加
      if(session) {
          this.login = session.login;
          console.log(this.login)
        }
    })
    console.log(this.login)
  }

}
