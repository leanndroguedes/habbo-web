import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSecurityEditComponent } from './account-security-edit.component';

describe('AccountSecurityEditComponent', () => {
  let component: AccountSecurityEditComponent;
  let fixture: ComponentFixture<AccountSecurityEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSecurityEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSecurityEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
