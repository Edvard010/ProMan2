import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectService } from '../../project.service';
import { NewComment } from './new-comment';

@Component({
  selector: 'app-new-comment-dialog',
  templateUrl: './new-comment-dialog.component.html',
  styleUrls: ['./new-comment-dialog.component.css']
})
export class NewCommentDialogComponent implements OnInit {
  project;
  form!: FormGroup;

  constructor(public dialogRef: MatDialogRef<NewCommentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,
    private projectService: ProjectService,
    private fb: FormBuilder) { 
      this.project = data;
    }

  ngOnInit(): void {
    this.form = this.fb.group({
      message: ''
    });
  }

  cancel() {
    this.dialogRef.close();
  }

  onSubmit(value: any) {
    if (value.message) {
      const message = value.message.replace(/\n/g, '<br />');
      const newMessage = new NewComment();
      newMessage.message = message;

      this.projectService.addComment(newMessage, this.project.id).subscribe(() => {
        this.cancel();
      })
    }
  }

}
