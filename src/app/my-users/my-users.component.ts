import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-users',
  templateUrl: './my-users.component.html',
  styleUrls: ['./my-users.component.scss']
})
export class MyUsersComponent implements OnInit {

  testData = "Sample";
  constructor() { }

  ngOnInit(): void {
  }

}
