import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProjectsListComponent } from './client-projects-list.component';

describe('ProjectsListComponent', () => {
  let component: ClientProjectsListComponent;
  let fixture: ComponentFixture<ClientProjectsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientProjectsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientProjectsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
