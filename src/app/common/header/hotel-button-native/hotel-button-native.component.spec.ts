import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelButtonNativeComponent } from './hotel-button-native.component';

describe('HotelButtonNativeComponent', () => {
  let component: HotelButtonNativeComponent;
  let fixture: ComponentFixture<HotelButtonNativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelButtonNativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelButtonNativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
