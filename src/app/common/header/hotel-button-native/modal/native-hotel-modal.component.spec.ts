import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeHotelModalComponent } from './native-hotel-modal.component';

describe('NativeHotelModalComponent', () => {
  let component: NativeHotelModalComponent;
  let fixture: ComponentFixture<NativeHotelModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NativeHotelModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeHotelModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
