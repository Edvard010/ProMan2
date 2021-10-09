import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectService } from '../../project.service';
import { NewComment } from '../new-comment-dialog/new-comment';
import { NewTask } from './new-task';

@Component({
  selector: 'app-new-task-dialog',
  templateUrl: './new-task-dialog.component.html',
  styleUrls: ['./new-task-dialog.component.css']
})
export class NewTaskDialogComponent implements OnInit {
  project;
  form!: FormGroup;

  constructor(public dialogRef: MatDialogRef<NewTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,
    private projectService: ProjectService,
    private fb: FormBuilder) { 
      this.project = data;
    }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: '',
      description: '',
      date: ''
    });
  }

  cancel() {
    this.dialogRef.close();
  }

  onSubmit(value: NewTask) {
    if (value.description) {
      const description = value.description.replace(/\n/g, '<br />');
      value.description = description;

      this.projectService.addTask(value, this.project.id).subscribe(() => {
        this.cancel();
      })
    }
  }

}
