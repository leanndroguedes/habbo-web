import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelButtonBetaComponent } from './hotel-button-beta.component';

describe('HotelButtonBetaComponent', () => {
  let component: HotelButtonBetaComponent;
  let fixture: ComponentFixture<HotelButtonBetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelButtonBetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelButtonBetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
