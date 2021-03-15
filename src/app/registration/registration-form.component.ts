import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'habbo-registration-form',
  templateUrl: './registration-form.component.html',
  styles: [
  ]
})
export class RegistrationFormComponent implements OnInit {
  registerInProgress = false;

  constructor() { }

  register(): void {
  }

  ngOnInit(): void {
  }

}
