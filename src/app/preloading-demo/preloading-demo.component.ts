import { Component, OnInit } from '@angular/core';
import { of, map } from 'rxjs';

@Component({
  selector: 'app-preloading-demo',
  templateUrl: './preloading-demo.component.html',
  styleUrls: ['./preloading-demo.component.scss']
})
export class PreloadingDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    of(1, 2, 3)
      .pipe(map((x) => x * x))
      .subscribe((v) => console.log(`value: ${v}`));
  }

}
