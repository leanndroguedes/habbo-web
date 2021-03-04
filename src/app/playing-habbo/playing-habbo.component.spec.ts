import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingHabboComponent } from './playing-habbo.component';

describe('PlayingHabboComponent', () => {
  let component: PlayingHabboComponent;
  let fixture: ComponentFixture<PlayingHabboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayingHabboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayingHabboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
