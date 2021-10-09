import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectService } from '../../project.service';

@Component({
  selector: 'app-finish-project-dialog',
  templateUrl: './finish-project-dialog.component.html',
  styleUrls: ['./finish-project-dialog.component.css']
})
export class FinishProjectDialogComponent {
  project;

  constructor(public dialogRef: MatDialogRef<FinishProjectDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data: any,
              private projectService: ProjectService) { 
                this.project = data;
              }

  

  cancel() {
    this.dialogRef.close();
  }

  finishProject() {
    this.projectService.finishProject(this.project.id).subscribe(() => {
      this.project.status = 'Finished';
      this.cancel();
    });
  }
}
