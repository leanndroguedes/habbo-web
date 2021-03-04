import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'habbo-email-report-unauthorized-form',
  templateUrl: './email-report-unauthorized-form.component.html',
  styles: [
  ]
})
export class EmailReportUnauthorizedFormComponent implements OnInit {
  @Input() emailaddress!: string;
  @Input() hash!: string;

  reportInProgress = false;

  constructor() { }

  report(): void {
  }

  ngOnInit(): void {
  }

}
