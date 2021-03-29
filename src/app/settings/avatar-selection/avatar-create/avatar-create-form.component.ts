import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'habbo-avatar-create-form',
  templateUrl: './avatar-create-form.component.html',
  styles: [
  ]
})
export class AvatarCreateFormComponent implements OnInit {
  name = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(15),
    Validators.pattern(/^[a-zA-Z0-9_\\-\\=\\?\\!@\\:\\.,\\]+/)
  ]);
  createInProgress = false;

  constructor(
    private ngbActiveModal: NgbActiveModal
  ) { }

  create(): void {
    console.warn(this.name);
  }

  onCancel(): void {
    this.ngbActiveModal.close();
  }

  ngOnInit(): void {
  }

}
