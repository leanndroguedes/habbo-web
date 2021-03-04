import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabboWayComponent } from './habbo-way.component';

describe('HabboWayComponent', () => {
  let component: HabboWayComponent;
  let fixture: ComponentFixture<HabboWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabboWayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabboWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
