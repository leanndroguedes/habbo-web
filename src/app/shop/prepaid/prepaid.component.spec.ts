import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepaidComponent } from './prepaid.component';

describe('PrepaidComponent', () => {
  let component: PrepaidComponent;
  let fixture: ComponentFixture<PrepaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrepaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
