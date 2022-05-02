import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as AuthStore from 'src/app/reducers/auth-store';
import { IAuth } from '../../core/interfaces/auth.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store$: Store<AuthStore.AuthStoreState.AuthState>
  ) {
    this.form = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  public onSubmit(): void {
    const value: IAuth = this.form.value;
    this.store$.dispatch(AuthStore.AuthStoreActions.login({ payload: value }));
  }

}
