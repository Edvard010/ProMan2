import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { FinishProjectDialogComponent } from './finish-project-dialog/finish-project-dialog.component';
import { NewCommentDialogComponent } from './new-comment-dialog/new-comment-dialog.component';
import { NewTaskDialogComponent } from './new-task-dialog/new-task-dialog.component';
import { ProjectDetails } from './project-details';
import { TasksListComponent } from './tasks-list/tasks-list.component';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  @ViewChild('taskList', { static: true})
  taskList!: TasksListComponent;
  @ViewChild('commentList', {static: true})
  commentList!: CommentsListComponent;

  project: ProjectDetails = new ProjectDetails;

  constructor(private route: ActivatedRoute,
              private projectService: ProjectService,
              private dialog: MatDialog,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;

    this.projectService.getDetails(id).subscribe(x => {
      this.project = x;
    });
  }

  newTask() {
    const dialogRef = this.dialog.open(NewTaskDialogComponent, {
      width: '500px',
      data: this.project
    });

    dialogRef.afterClosed().subscribe(() => {
      this.taskList.update();
    });
  }

  newComment() {
    const dialogRef = this.dialog.open(NewCommentDialogComponent, {
      width: '500px',
      data: this.project
    });

    dialogRef.afterClosed().subscribe(() => {
      this.commentList.update();
    });
  }

  finishProject() {
    const dialogRef = this.dialog.open(FinishProjectDialogComponent, {
      width: '400px',
      data: this.project
    });

    dialogRef.afterClosed().subscribe(() => {
      if (this.project.status === 'Finished') {
        this.router.navigate(['/projects']);
      }
    });
  }
}
