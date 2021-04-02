import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NotifierService } from 'src/app/shared/notifier.service';

@Component({
  selector: 'habbo-trusted-locations-reset',
  templateUrl: './trusted-locations-reset.component.html',
  styles: [
  ]
})
export class TrustedLocationsResetComponent implements OnInit {
  inProgress = false;

  constructor(
    private translate: TranslateService,
    private notifier: NotifierService
  ) { }

  action(): void {
    this.notifier.success('ACCOUNT_SECURITY_TRUSTED_LOGINS_RESET_OK');
    this.notifier.error('ERROR_SERVER');
    this.inProgress = false;
  }

  reset(): void {
    this.inProgress = true;
    this.translate.get('ACCOUNT_SECURITY_RESET_LOCATIONS_CONFIRMATION').subscribe((res: string) => {
      confirm(res) ? this.action() : this.inProgress = false;
    });
  }

  ngOnInit(): void {
  }

}
