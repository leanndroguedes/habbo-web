import { Component, OnInit } from '@angular/core';
import { CONFIG } from 'src/environments/environment';

@Component({
  selector: 'habbo-local-register-banner',
  templateUrl: './local-register-banner.component.html',
  styles: [
  ]
})
export class LocalRegisterBannerComponent implements OnInit {
  site!: Language | null;

  constructor() { }

  toSite(): Language | null {
    const language = navigator.language ? navigator.language.substr(0, 2) : null;
    switch (language) {
      case 'de':
        return {
          hotel: 'hhde',
          href: 'https://www.habbo.de',
          localization: 'DE',
          title: 'Habbo.de'
        };
      case 'en':
        return {
          hotel: 'hhus',
          href: 'https://www.habbo.com',
          localization: 'EN',
          title: 'Habbo.com'
        };
      case 'es':
        return {
          hotel: 'hhes',
          href: 'https://www.habbo.es',
          localization: 'ES',
          title: 'Habbo.es'
        };
      case 'fr':
        return {
          hotel: 'hhfr',
          href: 'https://www.habbo.fr',
          localization: 'FR',
          title: 'Habbo.fr'
        };
      case 'fi':
        return {
          hotel: 'hhfi',
          href: 'https://www.habbo.fi',
          localization: 'FI',
          title: 'Habbo.fi'
        };
      case 'it':
        return {
          hotel: 'hhit',
          href: 'https://www.habbo.it',
          localization: 'IT',
          title: 'Habbo.it'
        };
      case 'nl':
        return {
          hotel: 'hhnl',
          href: 'https://www.habbo.nl',
          localization: 'NL',
          title: 'Habbo.nl'
        };
      case 'pt':
        return {
          hotel: 'hhbr',
          href: 'https://www.habbo.com.br',
          localization: 'PT',
          title: 'Habbo.com.br'
        };
      case 'tr':
        return {
          hotel: 'hhtr',
          href: 'https://www.habbo.com.tr',
          localization: 'TR',
          title: 'Habbo.com.tr'
        };
      default:
        return null;
    }
  }

  ngOnInit(): void {
    const language = this.toSite();
    if (language && language.hotel === CONFIG.hotel) {
      this.site = language;
    }
  }

}

export interface Language {
  hotel: string;
  href: string;
  localization: string;
  title: string;
}
