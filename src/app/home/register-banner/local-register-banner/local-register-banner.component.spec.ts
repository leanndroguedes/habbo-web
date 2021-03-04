import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalRegisterBannerComponent } from './local-register-banner.component';

describe('LocalRegisterBannerComponent', () => {
  let component: LocalRegisterBannerComponent;
  let fixture: ComponentFixture<LocalRegisterBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalRegisterBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalRegisterBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
