import { Component, Input, OnInit } from '@angular/core';
import { Avatars } from 'src/app/shared/avatars.model';

@Component({
  selector: 'habbo-avatar-create',
  templateUrl: './avatar-create.component.html',
  styles: [
  ]
})
export class AvatarCreateComponent implements OnInit {
  @Input() avatars!: Avatars[];

  emailVerified = JSON.parse(sessionStorage.getItem('session') || '{}').emailVerified;
  identityVerified = JSON.parse(sessionStorage.getItem('session') || '{}').identityVerified;
  MAX_AVATARS = 50;

  constructor() { }

  open(): void {
  }

  ngOnInit(): void {
  }

}
