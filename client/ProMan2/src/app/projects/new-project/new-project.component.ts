import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { NewProject } from './new-project';


@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  form!: FormGroup;
  
  
  constructor(private fb: FormBuilder, 
              private router: Router,
              private projectService: ProjectService, 
              private activatedRoute: ActivatedRoute        
              ) {  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: '',
      description: '',
      deadline: '',
      pricing: 0.0
    })
  }

  onSubmit(value: NewProject){
    const clientId = this.activatedRoute.snapshot.params.clientId;

    const newProject = value as NewProject;
    newProject.clientId = clientId != null ? Number(clientId) : 0;

    this.projectService.createProject(newProject).subscribe( x => {
      this.router.navigate(['/project', x]);
    });  
  }
}


