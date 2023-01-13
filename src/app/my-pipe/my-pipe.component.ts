import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-pipe',
  templateUrl: './my-pipe.component.html',
  styleUrls: ['./my-pipe.component.scss']
})
export class MyPipeComponent implements OnInit {

  today: number = Date.now();
  text='Movie name is kantara'

  constructor() { }

  ngOnInit(): void {
  }

}
