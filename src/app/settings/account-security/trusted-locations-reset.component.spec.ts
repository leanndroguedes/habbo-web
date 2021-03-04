import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedLocationsResetComponent } from './trusted-locations-reset.component';

describe('TrustedLocationsResetComponent', () => {
  let component: TrustedLocationsResetComponent;
  let fixture: ComponentFixture<TrustedLocationsResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrustedLocationsResetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrustedLocationsResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
