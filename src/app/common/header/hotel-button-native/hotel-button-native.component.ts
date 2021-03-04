import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NativeHotelModalComponent } from './modal/native-hotel-modal.component';

@Component({
  selector: 'habbo-hotel-native-button',
  templateUrl: './hotel-button-native.component.html',
  styles: [
  ]
})
export class HotelButtonNativeComponent implements OnInit {
  visible = false;
  client: {
    v1?: boolean
    v2?: boolean
    v4?: boolean
  } = { v2: true, v4: true };

  constructor(
    private ngbModal: NgbModal
  ) { }

  open(): void {
    this.ngbModal.open(NativeHotelModalComponent, {
      size: 'md',
      windowClass: 'hotel-button-native-modal'
    });
  }

  ngOnInit(): void {
    this.visible = this.client.v4 || false;
  }

}
