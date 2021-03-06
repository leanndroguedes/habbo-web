import { Component, Input, OnInit } from '@angular/core';
import { History } from 'src/app/shared/history.model';

@Component({
  selector: 'habbo-transactions-list',
  templateUrl: './transactions-list.component.html',
  styles: [
  ]
})
export class TransactionsListComponent implements OnInit {
  @Input()
  transactions: History[] = [];

  transactionLimit = 10;
  hideShowAll = false;

  constructor() { }

  showAll(): void {
    this.transactionLimit = 1 / 0;
    this.hideShowAll = true;
  }

  ngOnInit(): void {
  }

}
