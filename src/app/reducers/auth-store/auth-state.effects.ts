import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { withLatestFrom, switchMap, catchError, of, mergeMap, tap } from 'rxjs';

import { AuthService } from 'src/app/core/services/auth.service';
import * as AuthActions from './auth-state.actions';
import { IToken } from 'src/app/core/interfaces/token.interface';
import { AuthState } from './auth-state.reducer';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private store$: Store<AuthState>,
    private authService: AuthService,
    private router: Router
  ) {}

  login = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      withLatestFrom(this.store$),
      switchMap(([action, state]) => {
        return this.authService.login(action.payload).pipe(
          mergeMap((token: IToken) => {
            this.router.navigate(['rates']);
            return [
              AuthActions.setCurrentUser({ user: action.payload.login }),
              AuthActions.loginSuccess({ token })
            ]
          }),
          catchError(error => {
            if (error.errorCode === '404') {
              this.router.navigate(['/404'], { skipLocationChange: true });
            }
            return of(AuthActions.loginFail({ error }));
          })
        );
      })
    )
  )
};
