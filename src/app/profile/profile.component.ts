import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'habbo-profile',
  templateUrl: './profile.component.html',
  styles: [
  ]
})
export class ProfileComponent implements OnInit {
  /* items; */
  /* profile; */
  /* stories; */
  /* photos; */

  constructor(
    private route: ActivatedRoute
  ) { }

  random(): number {
    return .5 - Math.random();
  }

  ngOnInit(): void {
    /* fiveFriends = (items.friends | orderBy: random | limitTo: 5); */
    /* fiveRooms = (items.rooms | orderBy: random | limitTo: 5); */
    /* fiveGroups = (items.groups | orderBy: random | limitTo: 5); */
  }

}
