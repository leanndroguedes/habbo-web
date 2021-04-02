import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimPasswordComponent } from './claim-password.component';

describe('ClaimPasswordComponent', () => {
  let component: ClaimPasswordComponent;
  let fixture: ComponentFixture<ClaimPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
