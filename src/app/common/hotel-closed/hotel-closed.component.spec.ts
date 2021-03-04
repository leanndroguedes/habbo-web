import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelClosedComponent } from './hotel-closed.component';

describe('HotelClosedComponent', () => {
  let component: HotelClosedComponent;
  let fixture: ComponentFixture<HotelClosedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelClosedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
