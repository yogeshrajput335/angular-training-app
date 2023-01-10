import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageName='APP 21'
  changePageName(){
    this.pageName ='Test in compoent ts'
  }
}
