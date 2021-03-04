import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebPagesComponent } from './web-pages/web-pages.component';



@NgModule({
  declarations: [WebPagesComponent],
  imports: [
    CommonModule
  ],
  exports: [WebPagesComponent]
})
export class SharedModule { }
