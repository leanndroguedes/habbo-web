import { Component, OnInit } from '@angular/core';
import { Discussions } from 'src/app/shared/discussions.model';

@Component({
  selector: 'habbo-messaging',
  templateUrl: './messaging.component.html',
  styles: [
  ]
})
export class MessagingComponent implements OnInit {
  discussions: Discussions[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
