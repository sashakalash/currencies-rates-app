import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as AuthStore from '../../reducers/auth-store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {

  constructor(private store$: Store<AuthStore.AuthStoreState.AuthState>,
    private router: Router) {}

  canActivateChild(): boolean {
    if (this.store$.select(AuthStore.AuthStoreSelectors.selectAuthenticateStatus)) {
      return true;
    }
    /** TODO уведомление о необходимости авторизоваться */
    this.router.navigateByUrl('login');
    return false;
  }
}
