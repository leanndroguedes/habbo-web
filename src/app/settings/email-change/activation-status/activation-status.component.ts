import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'src/app/shared/notifier.service';

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

  constructor(
    private notifier: NotifierService
  ) { }

  resend(): void {
    this.resendInProgress = true;
    this.notifier.success('ACTIVATION_RESEND_SUCESS');
  }

  ngOnInit(): void {
  }

}
