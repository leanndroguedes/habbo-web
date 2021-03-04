import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'habbo-tabs',
  templateUrl: './tabs.component.html',
  styles: [
  ]
})
export class TabsComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('title-key')
  titleKey!: string;
  open = false;

  constructor() { }

  ngOnInit(): void {
  }

}
