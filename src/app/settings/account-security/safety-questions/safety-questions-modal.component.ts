import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'habbo-safety-questions-modal',
  templateUrl: './safety-questions-modal.component.html',
  styles: [
  ]
})
export class SafetyQuestionsModalComponent implements OnInit {

  constructor(
    public ngbActiveModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

}
