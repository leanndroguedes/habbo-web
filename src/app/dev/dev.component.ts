import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'habbo-dev',
  templateUrl: './dev.component.html',
  styles: [
  ]
})
export class DevComponent implements OnInit {
  page!: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.page = this.route.snapshot.paramMap.get('page')?.replace(/-/g, '_') || '';
  }

}
