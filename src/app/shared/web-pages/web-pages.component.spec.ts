import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPagesComponent } from './web-pages.component';

describe('WebPagesComponent', () => {
  let component: WebPagesComponent;
  let fixture: ComponentFixture<WebPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
