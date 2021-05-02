import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FooBarQuixService {
  constructor(private http: HttpClient,
              @Inject('SERVER_URL') private serviceUrl: string) { }

  convertNumber(inputNumber: number): Observable<any> {
    return this.http.get(this.serviceUrl +'/foo-bar-quix/'+ inputNumber);
  }

}
