import { Component, OnInit } from '@angular/core';
import { AppConst }  from '../../app-const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // AppClass型変数を定義
  AppConstClass: AppConst;
  // 最終的に使用する型なしの変数定義
  AppConst;
  constructor() {
    // AppConstのインスタンスを代入
    this.AppConstClass = new AppConst;
    // インスタンスのメソッドを実行し、staticなクラスを代入
    this.AppConst = this.AppConstClass.main('ja');
  }

  ngOnInit(): void {
  }

}
