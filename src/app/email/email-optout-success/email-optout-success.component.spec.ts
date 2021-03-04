import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailOptoutSuccessComponent } from './email-optout-success.component';

describe('EmailOptoutSuccessComponent', () => {
  let component: EmailOptoutSuccessComponent;
  let fixture: ComponentFixture<EmailOptoutSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailOptoutSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailOptoutSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
