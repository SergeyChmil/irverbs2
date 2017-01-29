import {Injectable, EventEmitter} from '@angular/core';
import {Http, Response, RequestOptionsArgs} from "@angular/http";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {Observable} from "rxjs";
import {Verb} from "./verb";

@Injectable()
export class VerbService {
  public searchVerbInputed:EventEmitter<string>;

  constructor(private http:Http) {
    this.searchVerbInputed  = new EventEmitter();
  }

  getVerbAPI():Observable<Verb[]>{
    return this.http.get("http://localhost:3000/verbs")
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || "Service said: Server error"));
  }

  // search(pVerb:string){
  //    this.searchVerbInputed.emit(pVerb);
  //   // return this.searchVerbInputed.emit(pVerb);
  //   console.log('service said: ' + pVerb);
  // }

}
