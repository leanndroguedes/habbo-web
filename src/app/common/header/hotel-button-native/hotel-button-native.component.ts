import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  open(): void {
  }

  ngOnInit(): void {
    this.visible = this.client.v4 || false;
  }

}
