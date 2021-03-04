import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SafetyLockDisableModalComponent } from './safety-lock-disable-modal/safety-lock-disable-modal.component';
import { SafetyQuestionsModalComponent } from './safety-questions/safety-questions-modal.component';

@Component({
  selector: 'habbo-account-security-edit',
  templateUrl: './account-security-edit.component.html',
  styles: [
  ]
})
export class AccountSecurityEditComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('account-security-status')
  accountSecurityStatus!: string;

  constructor(
    private ngbModal: NgbModal
  ) { }

  openEditModal(): void {
    this.ngbModal.open(SafetyQuestionsModalComponent);
  }

  openDisableModal(): void {
    this.ngbModal.open(SafetyLockDisableModalComponent);
  }

  ngOnInit(): void {
  }

}
