import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'habbo-user-menu',
  templateUrl: './user-menu.component.html',
  styles: [
  ]
})
export class UserMenuComponent implements OnInit {
  toggle = false;
  user?: {
    accountId: number;
    buildersClubMember: boolean;
    creationTime: string;
    country: string;
    email: string;
    emailVerified: boolean;
    figureString: string;
    force: string[];
    habboClubMember: boolean;
    identityId: number;
    identityType: string;
    identityVerified: boolean;
    loginLogId: number;
    name: string;
    partner: string;
    sessionLogId: string;
    traits: string[];
    trusted: boolean;
    uniqueId: string;
    motto: string;
    lastWebAccess: string;
  };

  constructor() { }

  logout(): void {
  }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('session') || '{}');
  }

}
