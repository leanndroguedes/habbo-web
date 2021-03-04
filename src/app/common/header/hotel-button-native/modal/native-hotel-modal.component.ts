import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'habbo-native-hotel-modal',
  templateUrl: './native-hotel-modal.component.html',
  styles: [
  ]
})
export class NativeHotelModalComponent implements OnInit {

  constructor(
    public ngbActiveModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

}
