import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {LoginService} from '../login.service'

import {User} from '../../models/user';

import * as URLinfo from '../../urlinfo';
import * as key from '../../sessionkey';

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
    headers: new HttpHeaders(URLinfo.header),
  };

  //ユーザ一覧
  userlist(){
    var token = sessionStorage.getItem(key.token)
    console.log(URLinfo.header)
    var base_header = URLinfo.header

    base_header["Authorization"] = token
    console.log(base_header["Content-Type"])
    console.log(base_header["Authorization"])
    console.log(token)
    var header = new HttpHeaders(base_header);
    console.log(this.httpOptions.headers)
    return this.http.get<User[]>(this.url,this.httpOptions).subscribe()
  }
}
