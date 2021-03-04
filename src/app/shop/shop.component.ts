import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'habbo-shop',
  templateUrl: './shop.component.html',
  styles: [
  ]
})
export class ShopComponent implements OnInit {
  earnCreditsEnabled = true;

  constructor() { }

  ngOnInit(): void {
  }

}
