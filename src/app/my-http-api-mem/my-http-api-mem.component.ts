import { Component, OnInit } from '@angular/core';
import { ConfigService, MemAPIService } from '../services/config.service';


@Component({
  selector: 'app-my-http-api-mem',
  templateUrl: './my-http-api-mem.component.html',
  styleUrls: ['./my-http-api-mem.component.scss']
})
export class MyHttpApiMemComponent implements OnInit {
pagedata:any
  constructor(private api:MemAPIService) { }

  ngOnInit(): void {
this.api.getMemAPI().subscribe((data:any)=>{
this.pagedata=data;
})
}
  }


