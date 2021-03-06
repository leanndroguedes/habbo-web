import { Component, Input, OnInit } from '@angular/core';
import { Discussions, Hhbr13E9E7753A5F857704Fdbd86D8C79B23, Participants } from 'src/app/shared/discussions.model';

@Component({
  selector: 'habbo-discussions',
  templateUrl: './discussions.component.html',
  styles: [
  ]
})
export class DiscussionsComponent implements OnInit {
  @Input()
  items: Discussions[] = [];

  constructor() { }

  getParticipant(participants: Participants): Hhbr13E9E7753A5F857704Fdbd86D8C79B23 {
    return Object.values(participants)[0];
  }

  ngOnInit(): void {
  }

}
