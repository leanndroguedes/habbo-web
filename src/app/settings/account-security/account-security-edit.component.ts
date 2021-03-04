import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'habbo-account-security-edit',
  templateUrl: './account-security-edit.component.html',
  styles: [
  ]
})
export class AccountSecurityEditComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('account-security-status')
  accountSecurityStatus!: string;

  constructor() { }

  openEditModal(): void {
  }

  openDisableModal(): void {
  }

  ngOnInit(): void {
  }

}
