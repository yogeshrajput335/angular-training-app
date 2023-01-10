import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-head',
  templateUrl: './my-head.component.html',
  styleUrls: ['./my-head.component.scss']
})
export class MyHeadComponent implements OnInit {

  @Input() inputData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
