import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalComponent } from 'src/app/security/login/login-modal.component';

@Component({
  selector: 'habbo-header-small',
  templateUrl: './header-small.component.html',
  styles: [
  ]
})
export class HeaderSmallComponent implements OnInit {
  @Input()
  active?: string;

  constructor(
    private ngbModal: NgbModal
  ) { }

  openLoginModal(): void {
    this.ngbModal.open(LoginModalComponent);
  }

  ngOnInit(): void {
  }

}
