import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Task } from './task';
import { TaskslistService } from './taskslist.service';

@Component({
  selector: 'app-current-tasks-list',
  templateUrl: './current-tasks-list.component.html',
  styleUrls: ['./current-tasks-list.component.css']
})
export class CurrentTasksListComponent implements OnInit {
  tasks: any;
  
  displayedColumns = ['title', 'project', 'date', 'status'];

  constructor(private taskService: TaskslistService) { }

  ngOnInit(): void {
    this.taskService.getTasks(this.getToday(), this.getWeekLater()).subscribe(x => {
      this.tasks = new MatTableDataSource(x);
    });
  }

  getTaskStatus(task: Task): string {
    switch (task.status) {
      case 'New':
        return 'Nowy';
      case 'InProgress':
        return 'W trakcie';
      case 'Done':
        return 'Zakończone';
      default:
        return '';
    }
  }

  getToday(): string {
    const today = new Date();

    return `${String(today.getDate()).padStart(2, '0')}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getFullYear())}`;
  }

  getWeekLater(): string {
    const today = new Date();
    today.setDate(today.getDate() + 7);
    
    return `${String(today.getDate()).padStart(2, '0')}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getFullYear())}`;
  }

}
