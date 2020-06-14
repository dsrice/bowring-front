import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Auth} from '../models/user';

import * as URLinfo from '../urlinfo';
import * as key from '../sessionkey';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
  ) { }

  private url = URLinfo.method + URLinfo.host + URLinfo.auth;
  private httpOptions: any = {
    // ヘッダ情報
    headers: new HttpHeaders(URLinfo.header),
    body: null
  };

  //認証のためのポスト処理
  login(body: any): Promise<Auth> {
    return this.http
    .post(this.url , body , this.httpOptions)
    .toPromise()
    .then((res) => {
      const response: any = res;
      sessionStorage.setItem(key.token,"JWT " + response.token)
      return response;
    });
  }
}
