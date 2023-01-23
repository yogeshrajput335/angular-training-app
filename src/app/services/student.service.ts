import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable()
export class studentService{
    constructor(private http:HttpClient){}
    getUserAPI(){
        return this.http.get('https://jsonplaceholder.typicode.com/todos');
    }
}