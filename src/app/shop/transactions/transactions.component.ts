import { Component, OnInit } from '@angular/core';
import { History } from 'src/app/shared/history.model';

@Component({
  selector: 'habbo-transactions',
  templateUrl: './transactions.component.html',
  styles: [
  ]
})
export class TransactionsComponent implements OnInit {
  items: History[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
