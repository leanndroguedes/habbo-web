import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'habbo-login-modal',
  templateUrl: './login-modal.component.html',
  styles: [
  ]
})
export class LoginModalComponent implements OnInit {

  constructor(
    public ngbActiveModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

}
