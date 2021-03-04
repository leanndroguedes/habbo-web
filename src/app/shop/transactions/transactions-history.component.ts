import { Component, Input, OnInit } from '@angular/core';
import { History } from 'src/app/shared/history.model';

@Component({
  selector: 'habbo-transactions-history',
  templateUrl: './transactions-history.component.html',
  styles: [
  ]
})
export class TransactionsHistoryComponent implements OnInit {
  @Input() transactions: History[] = [];
  // tslint:disable-next-line: no-input-rename
  @Input('limit-to') limitTo!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
