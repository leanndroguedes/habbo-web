import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'habbo-email-report-unauthorized',
  templateUrl: './email-report-unauthorized.component.html',
  styles: [
  ]
})
export class EmailReportUnauthorizedComponent implements OnInit {
  email!: string;
  hash!: string;

  constructor(
    private route: ActivatedRoute
  ) {
    this.email = this.route.snapshot.queryParamMap.get('email') || 'true';
    this.hash = this.route.snapshot.queryParamMap.get('hash') || 'true';
  }

  ngOnInit(): void {
  }

}
