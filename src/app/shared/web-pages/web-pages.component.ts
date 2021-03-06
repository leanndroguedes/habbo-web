import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'habbo-web-pages',
  template: `
    <aside class="static-content">
      <p>
        web-pages works!
      </p>
    </aside>
  `,
  styles: [
  ]
})
export class WebPagesComponent implements OnInit {
  @Input()
  key!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
