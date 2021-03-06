import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'habbo-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {
  links = [
    'FOOTER_SUPPORT',
    'FOOTER_SAFETY',
    'FOOTER_PARENTS',
    'FOOTER_TOS_AND_PRIVACY',
    'FOOTER_ADVERTISERS'
  ];
  currentYear = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
