import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelButtonComponent } from './hotel-button.component';

describe('HotelButtonComponent', () => {
  let component: HotelButtonComponent;
  let fixture: ComponentFixture<HotelButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
