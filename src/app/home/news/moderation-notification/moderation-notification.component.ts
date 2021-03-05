import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'habbo-moderation-notification',
  templateUrl: './moderation-notification.component.html',
  styles: [
  ]
})
export class ModerationNotificationComponent implements OnInit {
  moderations: {
    createdAt: number
  }[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
