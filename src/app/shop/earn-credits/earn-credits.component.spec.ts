import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarnCreditsComponent } from './earn-credits.component';

describe('EarnCreditsComponent', () => {
  let component: EarnCreditsComponent;
  let fixture: ComponentFixture<EarnCreditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarnCreditsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarnCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
