import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdUnitComponent } from './ad-unit.component';

describe('AdUnitComponent', () => {
  let component: AdUnitComponent;
  let fixture: ComponentFixture<AdUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
