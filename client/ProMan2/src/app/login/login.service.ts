import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Username } from './username';
import { Login } from './login';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  exists(): Observable<Username>{
    return this.http.get<Username>('https://localhost:44338/api/user/exists')
  }

  login(login: Login): Observable<User> {
    console.debug(login);
    return this.http.post<User>('https://localhost:44338/api/user/login', login);
  }
}
