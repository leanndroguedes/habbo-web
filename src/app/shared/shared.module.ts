import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WebPagesComponent } from './web-pages/web-pages.component';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    WebPagesComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      extendedTimeOut: 1e3,
      easeTime: 300,
      positionClass: 'toast-top-center',
      toastClass: 'toast',
      preventDuplicates: true,
      progressBar: true,
      timeOut: 2e4
    }), // ToastrModule added
  ],
  exports: [
    WebPagesComponent
  ]
})
export class SharedModule { }
