import { Component, OnInit } from '@angular/core';
import { Rooms } from 'src/app/shared/rooms.model';

@Component({
  selector: 'habbo-rooms',
  templateUrl: './rooms.component.html',
  styles: [
  ]
})
export class RoomsComponent implements OnInit {
  rooms!: Rooms[];

  constructor() { }

  ngOnInit(): void {
  }

}
