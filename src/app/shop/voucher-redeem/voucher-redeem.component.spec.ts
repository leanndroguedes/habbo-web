import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherRedeemComponent } from './voucher-redeem.component';

describe('VoucherRedeemComponent', () => {
  let component: VoucherRedeemComponent;
  let fixture: ComponentFixture<VoucherRedeemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoucherRedeemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherRedeemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
