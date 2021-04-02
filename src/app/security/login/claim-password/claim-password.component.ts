import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'habbo-claim-password',
  template: `
    <small><a (click)="openModal()" translate="LOGIN_FORGOT_LABEL"></a></small>
  `,
  styles: [
  ]
})
export class ClaimPasswordComponent implements OnInit {

  constructor() { }

  openModal(): void {
  }

  ngOnInit(): void {
  }

}
