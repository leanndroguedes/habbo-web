import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'habbo-voucher-redeem',
  templateUrl: './voucher-redeem.component.html',
  styles: [
  ]
})
export class VoucherRedeemComponent implements OnInit {
  voucherCode = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-z0-9]{8}$/i)
  ]);
  redeemInProgress = false;

  constructor() { }

  redeem(): void {
  }

  ngOnInit(): void {
  }

}
