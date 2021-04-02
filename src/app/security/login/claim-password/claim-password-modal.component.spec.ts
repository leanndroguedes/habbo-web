import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimPasswordModalComponent } from './claim-password-modal.component';

describe('ClaimPasswordModalComponent', () => {
  let component: ClaimPasswordModalComponent;
  let fixture: ComponentFixture<ClaimPasswordModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimPasswordModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimPasswordModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
