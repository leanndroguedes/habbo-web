import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FansitesComponent } from './fansites.component';

describe('FansitesComponent', () => {
  let component: FansitesComponent;
  let fixture: ComponentFixture<FansitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FansitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FansitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
