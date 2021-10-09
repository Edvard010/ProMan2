import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectItem } from '../project-item';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  projects!: MatTableDataSource<ProjectItem>;
  displayedColumns = ['number', 'name', 'client', 'deadline', 'status'];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(projects => {
      this.projects = new MatTableDataSource(projects);
    });
    
  }

  applyFilter(event: any) {
    const value = event.target.value;
  }

  getProjectStatus(project: any) {
    switch(project.status) {
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
