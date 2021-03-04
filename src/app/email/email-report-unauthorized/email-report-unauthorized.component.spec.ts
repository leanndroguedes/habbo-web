import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailReportUnauthorizedComponent } from './email-report-unauthorized.component';

describe('EmailReportUnauthorizedComponent', () => {
  let component: EmailReportUnauthorizedComponent;
  let fixture: ComponentFixture<EmailReportUnauthorizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailReportUnauthorizedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailReportUnauthorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
