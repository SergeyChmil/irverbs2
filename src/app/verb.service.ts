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

  /***
   * Load and provide main data from json file
   * @returns {Observable<R>}
   */
  getVerbAPI():Observable<Verb[]>{
    return this.http.get("http://localhost:3000/verbs")
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || "Service said: Server error"));
  }
}
