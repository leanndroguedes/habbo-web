import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBannerComponent } from './register-banner.component';

describe('RegisterBannerComponent', () => {
  let component: RegisterBannerComponent;
  let fixture: ComponentFixture<RegisterBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
