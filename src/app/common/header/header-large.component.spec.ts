import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLargeComponent } from './header-large.component';

describe('HeaderLargeComponent', () => {
  let component: HeaderLargeComponent;
  let fixture: ComponentFixture<HeaderLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
