import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClaimPasswordModalComponent } from './claim-password-modal.component';

@Component({
  selector: 'habbo-claim-password',
  template: `
    <small><a (click)="openModal()" translate="LOGIN_FORGOT_LABEL"></a></small>
  `,
  styles: [
  ]
})
export class ClaimPasswordComponent implements OnInit {

  constructor(
    private ngbModal: NgbModal
  ) { }

  openModal(): void {
    this.ngbModal.open(ClaimPasswordModalComponent, {
      size: 'sm'
    });
  }

  ngOnInit(): void {
  }

}
