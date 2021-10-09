import { TestBed } from '@angular/core/testing';

import { TaskslistService } from './taskslist.service';

describe('TaskslistService', () => {
  let service: TaskslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
