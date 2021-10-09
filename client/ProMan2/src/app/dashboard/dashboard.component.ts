import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    
  }

  getToday(): string {
    const today = new Date();

    return `${String(today.getDate()).padStart(2, '0')}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getFullYear())}`;
  }

  getWeekLater(): string {
    const today = new Date();
    today.setDate(today.getDate() + 7);
    
    return `${String(today.getDate()).padStart(2, '0')}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getFullYear())}`;
  }
}
