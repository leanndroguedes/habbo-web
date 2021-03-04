import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'habbo-avatar',
  templateUrl: './avatar.component.html',
  styles: [
  ]
})
export class AvatarComponent implements OnInit {
  @Input() big!: string;
  @Input() user!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
