import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {LoginService} from '../login.service'

import {User} from '../../models/user';

import * as URLinfo from '../../urlinfo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private login: LoginService,
  ) { }

  private url = URLinfo.method + URLinfo.host + URLinfo.users_list;

  private httpOptions: any = {
    // ヘッダ情報
    headers:this.login.header(),
    body: null
  };

  //ユーザ一覧
  userlist(){
    return this.http.get<User[]>(this.url)
  }
}
