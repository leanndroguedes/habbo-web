import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CONFIG } from 'src/environments/environment';

@Component({
  selector: 'habbo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    translate: TranslateService
  ) {
    translate.setDefaultLang('com');

    translate.use(CONFIG.localizationSite);
  }
}
