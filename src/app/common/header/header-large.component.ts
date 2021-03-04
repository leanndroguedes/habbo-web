import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'habbo-header-large',
  templateUrl: './header-large.component.html',
  styles: [
  ]
})
export class HeaderLargeComponent implements OnInit {
  toggle = false;
  @Input() active?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
