import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarCreateComponent } from './avatar-create.component';

describe('AvatarCreateComponent', () => {
  let component: AvatarCreateComponent;
  let fixture: ComponentFixture<AvatarCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
