import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivationStatusComponent } from './activation-status.component';

describe('ActivationStatusComponent', () => {
  let component: ActivationStatusComponent;
  let fixture: ComponentFixture<ActivationStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivationStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
