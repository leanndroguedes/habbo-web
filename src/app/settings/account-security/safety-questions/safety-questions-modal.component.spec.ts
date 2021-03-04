import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyQuestionsModalComponent } from './safety-questions-modal.component';

describe('SafetyQuestionsModalComponent', () => {
  let component: SafetyQuestionsModalComponent;
  let fixture: ComponentFixture<SafetyQuestionsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetyQuestionsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyQuestionsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
