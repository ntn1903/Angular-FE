import { ChangeDetectorRef, Component, Injector, OnInit } from '@angular/core';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { AccountApiService } from '../account-api.service';
import { BaseService } from 'src/app/base/base.service';
import { ResponseModel } from 'src/app/models/response-model.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'vex-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [fadeInUp400ms]
})
export class RegisterComponent extends BaseService implements OnInit {

  form: FormGroup;

  inputType = 'password';
  visible = false;

  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private accountService: AccountApiService,
    private snackbar: MatSnackBar,
  ) {
    super();
  }

  ngOnInit() {
    this.form = this.fb.group({
      role: ['User', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required],
    });
  }

  send() {
    if (!this.form.valid) return this.snackbar.open(this.form.status, 'X', { duration: 3000 });

    if(this.form.value.password != this.form.value.passwordConfirm) return this.snackbar.open('Password confirm is incorrect!', 'X', { duration: 3000 });
    
    this.accountService.register(this.form.value).subscribe((response: ResponseModel) => {
      this.snackbar.open(response.message, 'X', { duration: 3000 });
      setTimeout(() => {
        return window.location.replace('http://localhost:4200/login');
      }, 1000);
    });
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
