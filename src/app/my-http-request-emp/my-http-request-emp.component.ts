import { Component, OnInit } from '@angular/core';
import { ConfigService, DataAPIService } from '../services/config.service';

@Component({
  selector: 'app-my-http-request-emp',
  templateUrl: './my-http-request-emp.component.html',
  styleUrls: ['./my-http-request-emp.component.scss']
})
export class MyHttpRequestEmpComponent implements OnInit {
  pagedata:any;
  pagedata2:any;
  $pageData1
  constructor(private cs: ConfigService, private gs:DataAPIService) { }

  ngOnInit(): void {

    // this.cs.getData().subscribe((data:any)=>{

    //   this.pagedata = data;
    // })

    // this.gs.getDataAPI().subscribe((data:any)=>{
    //   this.pagedata2 = data;
    // })
    this.$pageData1 = this.cs.getData();
  }



  }


