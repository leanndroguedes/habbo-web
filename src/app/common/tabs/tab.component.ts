import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'habbo-tab',
  templateUrl: './tab.component.html',
  styles: [
  ]
})
export class TabComponent implements OnInit {
  @Input()
  path!: string;
  // tslint:disable-next-line: no-input-rename
  @Input('alternative-path')
  alternativePath!: string;
  // tslint:disable-next-line: no-input-rename
  @Input('strict-path')
  strictPath!: boolean;
  // tslint:disable-next-line: no-input-rename
  @Input('translation-key')
  translationKey!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
