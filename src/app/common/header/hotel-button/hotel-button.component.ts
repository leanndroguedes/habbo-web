import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'habbo-hotel-button',
  templateUrl: './hotel-button.component.html',
  styles: [
  ]
})
export class HotelButtonComponent implements OnInit {
  visible = false;
  client: {
    v1?: boolean
    v2?: boolean
    v4?: boolean
  } = { v2: true, v4: true };

  constructor() { }

  ngOnInit(): void {
    this.visible = this.client.v1 || false;
  }

}
