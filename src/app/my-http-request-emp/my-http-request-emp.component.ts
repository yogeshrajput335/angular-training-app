import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-my-http-request-emp',
  templateUrl: './my-http-request-emp.component.html',
  styleUrls: ['./my-http-request-emp.component.scss']
})
export class MyHttpRequestEmpComponent implements OnInit {
  pagedata:any
  constructor(private cs: ConfigService) { }

  ngOnInit(): void {
    this.cs.getData().subscribe((data:any)=>{
      this.pagedata = data;
    })
  }

}
