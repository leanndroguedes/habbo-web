import { Component, Input, OnInit } from '@angular/core';
import { SecuritySessionService } from 'src/app/shared/security-session.service';

@Component({
  selector: 'habbo-ad-unit',
  templateUrl: './ad-unit.component.html',
  styles: [
  ]
})
export class AdUnitComponent implements OnInit {
  @Input()
  unit!: string;

  hasAds = this.securitySessionService.hasAds();

  constructor(
    private securitySessionService: SecuritySessionService
  ) { }

  ngOnInit(): void {
  }

}
