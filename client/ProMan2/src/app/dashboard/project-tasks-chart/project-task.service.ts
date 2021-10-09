import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectTasks } from './project-tasks';

@Injectable({
  providedIn: 'root'
})
export class ProjectTaskService {

  constructor(private http: HttpClient) { }

  getStatistics(): Observable<ProjectTasks[]> {
    return this.http.get<ProjectTasks[]>('https://localhost:44338/api/project/statistics');
  }
}
