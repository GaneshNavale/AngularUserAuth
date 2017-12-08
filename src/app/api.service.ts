import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {

  API_URL:string = "http://localhost:3000/";
  constructor(public http: Http) { }

  public get(path) {
    var url = this.API_URL + path;
    return this.http.get(url);
  }

  public post(path:string, body:any) {
    var url = this.API_URL + path;
    return this.http.post(url, body);
  }
 
  public delete(path:string){
    var url = this.API_URL + path;
    return this.http.delete(url);
  }  
  
  public update(path:string, body:any){
    var url = this.API_URL + path;
    return this.http.put(url, body);
  }
}
