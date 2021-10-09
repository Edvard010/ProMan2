import { Component, Input, OnInit } from '@angular/core';
import { ProjectItem } from 'src/app/projects/project-item';

@Component({
  selector: 'app-client-projects-list',
  templateUrl: './client-projects-list.component.html',
  styleUrls: ['./client-projects-list.component.css']
})
export class ClientProjectsListComponent implements OnInit {
  
  @Input()
  projects!: ProjectItem[];

  displayedColumns = [ 'number', 'name', 'pricing', 'deadline', 'status'];

  constructor() { }

  ngOnInit(): void {
  }

  getProjectStatus(project: any) {
    switch (project.status) {
      case 'New':
        return 'Nowy';
      case 'InProgress':
        return 'W trakcie';
      case 'Finished':
        return 'Zakończony';
      default:
        return '';
    }
  }
}
