import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'habbo-login-form',
  templateUrl: './login-form.component.html',
  styles: [
  ]
})
export class LoginFormComponent implements OnInit {
  loginInProgress = false;

  constructor() { }

  login(): void {
  }

  ngOnInit(): void {
  }

}
