import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'habbo-navigation',
  templateUrl: './navigation.component.html',
  styles: [
  ]
})
export class NavigationComponent implements OnInit {
  @Input() active?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
