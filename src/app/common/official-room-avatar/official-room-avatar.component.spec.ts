import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialRoomAvatarComponent } from './official-room-avatar.component';

describe('OfficialRoomAvatarComponent', () => {
  let component: OfficialRoomAvatarComponent;
  let fixture: ComponentFixture<OfficialRoomAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficialRoomAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficialRoomAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
