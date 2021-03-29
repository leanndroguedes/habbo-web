import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(
    private translate: TranslateService,
    private toastr: ToastrService
  ) { }

  success(message: string): void {
    this.translate.get(message).subscribe((res: string) => {
      this.toastr.success(res);
    });
  }

  error(message: string): void {
    this.translate.get(message).subscribe((res: string) => {
      this.toastr.error(res);
    });
  }

  errorSticky(message: string): void {
    this.translate.get(message).subscribe((res: string) => {
      this.toastr.error(res);
    });
  }
}
