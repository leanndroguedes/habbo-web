import { Component, OnInit } from '@angular/core';
import { Purse } from '../shared/purse.model';

@Component({
  selector: 'habbo-purse',
  templateUrl: './purse.component.html',
  styles: [
  ]
})
export class PurseComponent implements OnInit {
  purse: Purse = {
    creditBalance: 0,
    diamondBalance: 0,
    habboClubDays: 0,
    buildersClubDays: 0,
    buildersClubFurniLimit: 50
  };

  constructor() { }

  ngOnInit(): void {
  }

}
