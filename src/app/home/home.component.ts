import { Component, OnInit } from '@angular/core';
import { SecuritySessionService } from '../shared/security-session.service';

@Component({
  selector: 'habbo-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor(
    private securitySessionService: SecuritySessionService
  ) { }

  hasHeaderLarge(): boolean {
    return !this.securitySessionService.hasSession();
  }

  ngOnInit(): void {
  }

}
