import { Component, OnInit } from '@angular/core';
import { Avatars } from 'src/app/shared/avatars.model';

@Component({
  selector: 'habbo-avatar-selection',
  templateUrl: './avatar-selection.component.html',
  styles: [
  ]
})
export class AvatarSelectionComponent implements OnInit {
  avatars: Avatars[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.avatars = [
      {
        uniqueId: 'hhbr-fcf028d352ff067b7ba597165f0d4ad7',
        name: 'leandromacx',
        figureString: 'hr-3531-45-45.hd-180-1.ch-3110-64-1408.lg-275-82.sh-295-1408.he-3551.fa-3993-91.ca-4036-72',
        motto: 'crikey',
        buildersClubMember: false,
        habboClubMember: false,
        lastWebAccess: '2021-02-27T11:25:58.000+0000',
        creationTime: '2015-04-30T16:55:39.000+0000',
        banned: false
      },
      {
        uniqueId: 'hhbr-13e9e7753a5f857704fdbd86d8c79b23',
        name: 'mr.retr0',
        figureString: 'hr-802-45.hd-180-1.ch-3030-1408.lg-275-64.ha-1006.wa-3211-64-1408',
        motto: 'Love and Peace',
        buildersClubMember: false,
        habboClubMember: false,
        lastWebAccess: '2021-02-25T16:03:17.000+0000',
        creationTime: '2016-12-21T21:14:26.000+0000',
        banned: false
      }
    ];
  }

}
