import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable()
export class loginService{
    constructor(private http:HttpClient){}
    getLoginAPI(){
        return this.http.get('https://jsonplaceholder.typicode.com/todos');
    }
}