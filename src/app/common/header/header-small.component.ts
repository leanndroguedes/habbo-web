import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'habbo-header-small',
  templateUrl: './header-small.component.html',
  styles: [
  ]
})
export class HeaderSmallComponent implements OnInit {
  @Input()
  active?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
