import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-learn',
  templateUrl: './my-learn.component.html',
  styleUrls: ['./my-learn.component.scss']
})
export class MyLearnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pageName='APP 21'
  changePageName(){
    this.pageName ='Test in compoent ts'
  }
}
