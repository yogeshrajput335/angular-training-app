import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-demo',
  templateUrl: './subject-demo.component.html',
  styleUrls: ['./subject-demo.component.scss']
})
export class SubjectDemoComponent implements OnInit {

  selTab = 0;
  constructor() { }

  ngOnInit(): void {
  }
  OnTabClick(tab){
    this.selTab = tab;
  }
  runSubject(){
    let mySubject = new Subject<number>();

    mySubject.subscribe(x => console.log("First Subscription : " + x));

    mySubject.next(1);
    mySubject.next(2);
    mySubject.next(3);

    mySubject.subscribe(x => console.log("Second Subscription : " + x));

    mySubject.next(4);
  }
  runBehaviorSubject(){
    let mySubject = new BehaviorSubject<number>(1);

    mySubject.subscribe(x => console.log("First Subscription : " + x));

    mySubject.next(2);
    mySubject.next(3);

    mySubject.subscribe(x => console.log("Second Subscription : " + x));

    mySubject.next(4);
  }
  runReplaySubject(){
    let mySubject = new ReplaySubject<number>();

    mySubject.subscribe(x => console.log("First Subscription : " + x));

    mySubject.next(1);
    mySubject.next(2);
    mySubject.next(3);

    mySubject.subscribe(x => console.log("Second Subscription : " + x));

    mySubject.next(4);
  }

}
