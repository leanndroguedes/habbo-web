import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarCreateModalComponent } from './avatar-create-modal.component';

describe('AvatarCreateModalComponent', () => {
  let component: AvatarCreateModalComponent;
  let fixture: ComponentFixture<AvatarCreateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarCreateModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
