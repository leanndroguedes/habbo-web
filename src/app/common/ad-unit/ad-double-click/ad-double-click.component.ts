import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'habbo-ad-double-click',
  templateUrl: './ad-double-click.component.html',
  styles: [
  ]
})
export class AdDoubleClickComponent implements OnInit {
  @Input()
  unit!: string;

  id = '';

  constructor() { }

  ngOnInit(): void {
  }

}
