import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { ProjectTaskService } from './project-task.service';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-project-tasks-chart',
  templateUrl: './project-tasks-chart.component.html',
  styleUrls: ['./project-tasks-chart.component.css']
})
export class ProjectTasksChartComponent implements OnInit {

  chartData: ChartDataSets[] = [];
  chartLabels: Label[] = [];

  chartOptions: ChartOptions = {
    responsive: true
  };

  constructor(private projectTaskService: ProjectTaskService) { }

  ngOnInit(): void {
    this.projectTaskService.getStatistics().subscribe(x => {
      const projects = x.map(p => `${p.projectName} (${p.clientName})`);
      const newTasks = x.map(p => p.new);
      const inProgress = x.map(p => p.inProgress);
      const finished = x.map(p => p.finished);

      this.chartLabels = projects;

      this.chartData = [
        { data: newTasks, label: 'Nowe', stack: 'a'},
        { data: inProgress, label: 'W trakcie', stack: 'a'},
        { data: finished, label: 'Zakończone', stack: 'a'}
      ];
    });
  }

}
