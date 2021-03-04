import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'habbo-account-security',
  templateUrl: './account-security.component.html',
  styles: [
  ]
})
export class AccountSecurityComponent implements OnInit {
  accountSecurityStatus = 'enabled';

  constructor() { }

  ngOnInit(): void {
  }

}
