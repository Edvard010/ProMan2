import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { ProjectItem } from './project-item';
import { HttpClient } from '@angular/common/http'
import { NewProjectComponent } from './new-project/new-project.component';
import { NewProject } from './new-project/new-project';
import { ProjectDetails } from './project-details/project-details';
import { CommentItem } from './project-details/comments-list/comment-item';
import { TaskItem } from './project-details/tasks-list/task-item';

import { NewTask } from './project-details/new-task-dialog/new-task';
import { NewComment } from './project-details/new-comment-dialog/new-comment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  success: any;

  constructor(private http: HttpClient) { }

  getProjects(): Observable<ProjectItem[]> {
    return this.http.get<ProjectItem[]>('https://localhost:44338/api/project');
  }

  createProject(newProject: NewProject): Observable<number> {
    return this.http.post<number>('https://localhost:44338/api/project', 
    {
      name: newProject.name,
      deadline: newProject.deadline,
      description: newProject.description,
      clientId: newProject.clientId,
      pricing: parseFloat(newProject.pricing.replace(',', '.'))
    });
  }

  getDetails(id: any): Observable<ProjectDetails> {
    return this.http.get<ProjectDetails>(`https://localhost:44338/api/project/${id}`);
  }

  getComments(id: any): Observable<CommentItem[]> {
    return this.http.get<CommentItem[]>(`https://localhost:44338/api/project/${id}/comment`);
  }

  getTasks(id: any): Observable<TaskItem[]> {
    return this.http.get<TaskItem[]>(`https://localhost:44338/api/project/${id}/task`);
  }

  finishProject( id: any): Observable<any> {
    return this.http.put<any>(`https://localhost:44338/api/project/${id}/finish`, null);
  }

  addComment(newComment: NewComment, id: any): Observable<any> {
    return this.http.post<any>(`https://localhost:44338/api/project/${id}/comment`, newComment);
  }

  addTask(newTask: NewTask, id: any): Observable<any> {
    return this.http.post<any>(`https://localhost:44338/api/project/${id}/task`, newTask);
  }

  removeComment(id: any): Observable<any> {
    return this.http.delete<any>(`https://localhost:44338/api/project/comment/${id}`);
  }

  changeTaskStatus(id: number, status: string): Observable<any> {
    return this.http.put<any>(`https://localhost:44338/api/project/${id}/task/${id}`, {
      status
    }); //${id} a było ${projectId}
  }
}
