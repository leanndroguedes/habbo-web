import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsHabboComponent } from './what-is-habbo.component';

describe('WhatIsHabboComponent', () => {
  let component: WhatIsHabboComponent;
  let fixture: ComponentFixture<WhatIsHabboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatIsHabboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsHabboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
