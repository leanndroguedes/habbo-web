import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarCreateFormComponent } from './avatar-create-form.component';

describe('AvatarCreateFormComponent', () => {
  let component: AvatarCreateFormComponent;
  let fixture: ComponentFixture<AvatarCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarCreateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
