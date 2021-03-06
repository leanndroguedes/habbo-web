import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'habbo-header-large',
  templateUrl: './header-large.component.html',
  styles: [
  ]
})
export class HeaderLargeComponent implements OnInit {
  @Input()
  active?: string;

  toggle = false;

  constructor() { }

  ngOnInit(): void {
  }

}
