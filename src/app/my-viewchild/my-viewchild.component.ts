import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-my-viewchild',
  templateUrl: './my-viewchild.component.html',
  styleUrls: ['./my-viewchild.component.scss']
})
export class MyViewchildComponent implements OnInit {
  @ViewChild('txtname', { static: true }) mytxt: ElementRef;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  MyFunc(val) {
    console.log(val)
    console.log(this.mytxt.nativeElement.value);
    this.mytxt.nativeElement.value ="10"
    this.renderer.setStyle(this.mytxt.nativeElement, 'backgroundColor', 'red');
    this.renderer.setStyle(this.mytxt.nativeElement, 'color', 'white');
    }

}
