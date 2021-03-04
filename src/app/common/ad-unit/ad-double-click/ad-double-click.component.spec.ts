import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdDoubleClickComponent } from './ad-double-click.component';

describe('AdDoubleClickComponent', () => {
  let component: AdDoubleClickComponent;
  let fixture: ComponentFixture<AdDoubleClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdDoubleClickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdDoubleClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
