import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'habbo-empty-results',
  templateUrl: './empty-results.component.html',
  styles: [
  ]
})
export class EmptyResultsComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('translation-key')
  translationKey!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
