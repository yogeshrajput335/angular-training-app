import { Component, OnInit } from '@angular/core';

import { Observable,from} from 'rxjs';
@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  StartTest(){
    const myObservable=from([4,5,6]);
    const myObsserver={
      next:(x:any)=>console.log('Observer got a next value:'+x),
      error:(err:any)=>console.error('Observer got an error:'+err),
      complete:()=>console.log('Observer got a complete notification')

    };
    myObservable.subscribe(myObsserver);
  }

}
