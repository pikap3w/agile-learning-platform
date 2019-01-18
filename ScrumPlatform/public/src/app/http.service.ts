import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }


  getQuizzes(){
    return this._http.get('/api/quizzes');
  }

  register(info){
    return this._http.post('/register', info);
   }

   login(info){
    return this._http.post('/login', info);
   }

}
