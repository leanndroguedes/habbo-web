import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Avatars } from 'src/app/shared/avatars.model';
import { AvatarCreateModalComponent } from './avatar-create-modal.component';

@Component({
  selector: 'habbo-avatar-create',
  templateUrl: './avatar-create.component.html',
  styles: [
  ]
})
export class AvatarCreateComponent implements OnInit {
  @Input()
  avatars!: Avatars[];

  emailVerified = JSON.parse(sessionStorage.getItem('session') || '{}').emailVerified;
  identityVerified = JSON.parse(sessionStorage.getItem('session') || '{}').identityVerified;
  MAX_AVATARS = 50;

  constructor(
    private ngbModal: NgbModal
  ) { }

  open(): void {
    this.ngbModal.open(AvatarCreateModalComponent, {
      size: 'sm'
    });
  }

  ngOnInit(): void {
  }

}
