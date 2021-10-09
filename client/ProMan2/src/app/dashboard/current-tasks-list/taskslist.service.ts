import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskslistService {

  constructor(private http: HttpClient) { }

  getTasks(from: string, to: string): Observable<Task[]> {
    let params = new HttpParams();
    params = params.append('from', from);
    params = params.append('to', to);

    return this.http.get<Task[]>('https://localhost:44338/api/project/task/between', { params });
  }
}
