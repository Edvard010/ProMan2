import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishProjectDialogComponent } from './finish-project-dialog.component';

describe('FinishProjectDialogComponent', () => {
  let component: FinishProjectDialogComponent;
  let fixture: ComponentFixture<FinishProjectDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishProjectDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishProjectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
