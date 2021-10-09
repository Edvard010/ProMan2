import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../project.service';
import { CommentItem } from './comment-item';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {
  @Input()
  projectId!: number;

  comments!: CommentItem[];

  displayedColumns = ['message', 'date', 'action'];

  constructor(private projectService: ProjectService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.projectId = id;
    this.update();
  }

  update() {
    this.projectService.getComments(this.projectId).subscribe(x => {
      this.comments = x;
    });
  }

  removeComment(id: any) {
    this.projectService.removeComment(id);
  }
 
}
