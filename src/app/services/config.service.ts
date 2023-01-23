import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get('https://fakerapi.it/api/v1/persons?_locale=en_EN');
  }
 
}
@Injectable()
export class MemAPIService{
  constructor(private http: HttpClient){}
  getMemAPI(){
    return this.http.get('http://122.166.147.16/CMSWEBAPI/API/member/oc3');
  }
}
