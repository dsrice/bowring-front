import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'; // 追加

import { Session } from '../../models/session'; // 追加

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public session = new Session(); // 追加
  public sessionSubject = new Subject<Session>(); // 追加
  public sessionState = this.sessionSubject.asObservable(); // 追加

  constructor() { }

  login(): void { // 追加
    this.session.login = true;
    this.sessionSubject.next(this.session);
  }

  logout(): void { // 追加
    this.sessionSubject.next(this.session.reset());
  }
}