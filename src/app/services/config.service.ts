import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ConfigService {
  getDataAPI() {
    throw new Error('Method not implemented.');
  }
 
  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get('https://fakerapi.it/api/v1/persons?_locale=en_EN');
  }
}
 @Injectable()
 export class DataAPIService{
  constructor(private http: HttpClient){}
  getDataAPI(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

 } 

