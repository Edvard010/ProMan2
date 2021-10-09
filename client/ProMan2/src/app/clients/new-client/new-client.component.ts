import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';
import { NewClient } from './new-client';


@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {
  
  form!: FormGroup;
  constructor(private fb: FormBuilder, 
              private router: Router,
              private clientService: ClientService,) {  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: '',
      description: '',
      address: '',
      phone: '',
      email: ''
    });
  }

  onSubmit(value: NewClient){
    this.clientService.createClient(value).subscribe(x => {
      this.router.navigate(['/client', x]);
    });
  
  }
}

