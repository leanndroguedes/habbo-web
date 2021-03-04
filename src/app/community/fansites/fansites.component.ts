import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'habbo-fansites',
  templateUrl: './fansites.component.html',
  styles: [
  ]
})
export class FansitesComponent implements OnInit {
  fansites!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
