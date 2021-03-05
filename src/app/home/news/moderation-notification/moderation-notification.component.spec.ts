import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModerationNotificationComponent } from './moderation-notification.component';

describe('ModerationNotificationComponent', () => {
  let component: ModerationNotificationComponent;
  let fixture: ComponentFixture<ModerationNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModerationNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModerationNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
