import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTasksListComponent } from './current-tasks-list.component';

describe('CurrentTasksListComponent', () => {
  let component: CurrentTasksListComponent;
  let fixture: ComponentFixture<CurrentTasksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentTasksListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTasksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
