import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'
import { Register } from './register';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,
              private registerService: RegisterService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: '',
      password: ''
    })
  }

  onSubmit(value: Register) {
    if (value.name !== '' && value.password !== '') {
      this.registerService.register(value).subscribe(() => {
        this.router.navigate(['/login']);
      });
    }
  }
}
