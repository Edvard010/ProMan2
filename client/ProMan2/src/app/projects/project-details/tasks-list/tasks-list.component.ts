import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../project.service';
import { TaskItem } from './task-item';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  @Input()
  projectId!: number;

  @Input()
  disabled!: boolean;

  tasks!: TaskItem[];

  displayedColumns = ['number', 'title', 'date', 'status'];

  constructor(private projectService: ProjectService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.projectId = id;
    this.update();
  }

  update() {
    this.projectService.getTasks(this.projectId).subscribe(x => {
      this.tasks = x;
    });
  }

  changeTaskStatus(id: number, status: string){
    this.projectService.changeTaskStatus(id, status).subscribe(() => {
      this.update();
    });
  }

}
