import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Auth} from '../models/user';

import * as URLinfo from '../urlinfo';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
  ) { }

  private result = new Subject<string>();

  /**
   * Subscribe するためのプロパティ
   * `- コンポーネント間で共有するためのプロパティ
   *
   * @memberof CommonService
   */
  public token = this.result.asObservable();

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
      this.result.next("JWT " + response.tolen);
      return response; 
    });
  }
}
