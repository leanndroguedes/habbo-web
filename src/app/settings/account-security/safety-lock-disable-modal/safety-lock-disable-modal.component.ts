import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'habbo-safety-lock-disable-modal',
  templateUrl: './safety-lock-disable-modal.component.html',
  styles: [
  ]
})
export class SafetyLockDisableModalComponent implements OnInit {

  constructor(
    public ngbActiveModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

}
