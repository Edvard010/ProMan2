import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTasksChartComponent } from './project-tasks-chart.component';

describe('ProjectTasksChartComponent', () => {
  let component: ProjectTasksChartComponent;
  let fixture: ComponentFixture<ProjectTasksChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectTasksChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTasksChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
