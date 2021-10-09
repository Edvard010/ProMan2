import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(newUser: Register): Observable<any> {
    return this.http.post<any>('https://localhost:44338/api/register', newUser);
  }
}
