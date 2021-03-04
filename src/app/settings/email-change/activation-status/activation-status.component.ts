import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'habbo-activation-status',
  templateUrl: './activation-status.component.html',
  styles: [
  ]
})
export class ActivationStatusComponent implements OnInit {
  user = JSON.parse(sessionStorage.getItem('session') || '{}');
  resendInProgress = false;
  isSent = false;

  constructor() { }

  resend(): void {
  }

  ngOnInit(): void {
  }

}
