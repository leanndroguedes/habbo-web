import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'habbo-beta-hotel-button',
  templateUrl: './hotel-button-beta.component.html',
  styles: [
  ]
})
export class HotelButtonBetaComponent implements OnInit {
  visible = false;
  client: {
    v1?: boolean
    v2?: boolean
    v4?: boolean
  } = { v2: true, v4: true };

  constructor() { }

  ngOnInit(): void {
    this.visible = this.client.v2 || false;
  }

}
