import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecuritySessionService {
  user = JSON.parse(sessionStorage.getItem('session') || '{}');

  constructor() { }

  init(): void {
  }

  create(): void {
  }

  update(): void {
  }

  hasSession(): boolean {
    return Boolean(this.user.accountId);
  }

  isTrusted(): void {
  }

  isEmailVerified(): void {
  }

  isHabboSessionWithEmail(): void {
  }

  hasAds(): boolean {
    return !this.hasSession() || !(this.user.buildersClubMember || this.user.habboClubMember);
  }

  hasPreRollAd(): void {
  }

  setLastPreRollAdTime(): void {
  }

  isTestUser(): void {
  }

  isCurrentUser(): void {
  }

  destroy(): void {
  }

  isStaff(): void {
  }

}
