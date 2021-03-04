import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'habbo-avatar-create-modal',
  templateUrl: './avatar-create-modal.component.html',
  styles: [
  ]
})
export class AvatarCreateModalComponent implements OnInit {

  constructor(
    public ngbActiveModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

}
