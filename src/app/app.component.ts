import { Component } from '@angular/core';
import { AppConst }  from './app-const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  AppConstClass: AppConst;
  AppConst;
  constructor() {
    this.AppConstClass = new AppConst;
    this.AppConst = this.AppConstClass.main('ja');
  }
}
