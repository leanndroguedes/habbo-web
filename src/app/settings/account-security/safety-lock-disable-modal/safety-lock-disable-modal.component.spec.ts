import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyLockDisableModalComponent } from './safety-lock-disable-modal.component';

describe('SafetyLockDisableModalComponent', () => {
  let component: SafetyLockDisableModalComponent;
  let fixture: ComponentFixture<SafetyLockDisableModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetyLockDisableModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyLockDisableModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
