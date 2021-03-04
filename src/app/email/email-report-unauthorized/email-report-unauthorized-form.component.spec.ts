import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailReportUnauthorizedFormComponent } from './email-report-unauthorized-form.component';

describe('EmailReportUnauthorizedFormComponent', () => {
  let component: EmailReportUnauthorizedFormComponent;
  let fixture: ComponentFixture<EmailReportUnauthorizedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailReportUnauthorizedFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailReportUnauthorizedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
