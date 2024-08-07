import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import { fadeInUp400ms } from '../../../@vex/animations/fade-in-up.animation';
import { AccountApiService } from '../account-api.service';
import { BaseService } from 'src/app/base/base.service';

@Component({
  selector: 'vex-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeInUp400ms
  ]
})
export class LoginComponent extends BaseService implements OnInit {

  form: FormGroup;

  inputType = 'password';
  visible = false;

  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;
  token: string | null = '';
  returnUrl: string = '';
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private snackbar: MatSnackBar,
    private loginService: AccountApiService
  ) {
    super();
    localStorage.clear();
  }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  send() {
    // this.router.navigate(['/']);
    // 
    if (this.form.invalid) return this.snackbar.open('Please, input Username and Password!', 'X', { duration: 3000 });
    this.loginService.login(this.form.value).subscribe(response => {
      if (response.isSuccess) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('currentUser', response.data.userName);
        return window.location.replace('http://localhost:4200/dashboard');
      }
      return this.snackbar.open(response.message, 'X', { duration: 3000 });
    })
  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }
}
