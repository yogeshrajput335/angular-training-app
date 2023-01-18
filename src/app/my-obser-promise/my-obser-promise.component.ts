import { Component, OnInit } from '@angular/core';
import { Observable,from } from 'rxjs';

@Component({
  selector: 'app-my-obser-promise',
  templateUrl: './my-obser-promise.component.html',
  styleUrls: ['./my-obser-promise.component.scss']
})
export class MyObserPromiseComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {

  }
  StartObser(){
    const myObservable = from([1, 2, 3]);
    const myObserver = {
      next: (x:any) => console.log('Observer got a next value: ' + x),
      error: (err:any) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    myObservable.subscribe(myObserver);
  }
  StartObser1(){
    const observable = new Observable((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 2000);
    });
    console.log('just before subscribe');
    observable.subscribe({
      next(x) {
        console.log('got value ' + x);
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        console.log('done');
      },
    });
    console.log('just after subscribe');
  }
  StartObser3(){
    const foo = new Observable((subscriber) => {
      console.log('Hello');
      subscriber.next(42);
    });
    foo.subscribe((x) => {
      console.log(x);
    });
    foo.subscribe((y) => {
      console.log(y);
    });
  }
  StartObser4(){
    const observable = from([10, 20, 30]);
    const subscription1 = observable.subscribe((x) => console.log(x));
    // Later:
    subscription1.unsubscribe();
  }

}
