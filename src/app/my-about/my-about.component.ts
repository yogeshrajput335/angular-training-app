import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my-about',
  templateUrl: './my-about.component.html',
  styleUrls: ['./my-about.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MyAboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
