import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserData } from '../../models/user-data';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  userData: UserData;
  user = '';
  password = '';

  constructor( @Inject(FormBuilder) fb: FormBuilder, public loginService: LoginService ) {
    this.form = fb.group({
      name: fb.group({
        user: ['', [Validators.required, Validators.minLength(4)]],
        password: ['', [Validators.required, Validators.minLength(4)]],
      }),
    });
  }

  login() {
    this.loginService.login( btoa(this.user), btoa(this.password) );
  }

  ngOnInit() {
  }

}
