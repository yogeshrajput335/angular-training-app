import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-my-left',
  templateUrl: './my-left.component.html',
  styleUrls: ['./my-left.component.scss']
})
export class MyLeftComponent implements OnInit {

  @Input() inputData : string = ""
  @Output() newItemEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  addNewItem() {
    this.newItemEvent.emit("Hi from left");
  }

}
