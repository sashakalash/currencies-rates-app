import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { IAuth } from 'src/app/core/interfaces/auth.interface';
import { HandledError } from 'src/app/core/interfaces/handled-error.interface';
import * as AuthActions from './auth-state.actions';
import { IToken } from 'src/app/core/interfaces/token.interface';

export const adapter: EntityAdapter<IAuth> = createEntityAdapter<IAuth>();

export interface AuthState extends EntityState<IAuth> {
  token: IToken | null;
  currentUser: string | null;
  loading: boolean;
	error: HandledError | null;
}

const initialState: AuthState = adapter.getInitialState({
  token: null,
  currentUser: null,
  loading: false,
	error: null
});

const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => ({ ...state, loading: true })),
  on(AuthActions.loginSuccess, (state, { token }) => ({
    ...state,
    token,
    loading: false
  })),
  on(AuthActions.logout, state => ({
    ...state,
    token: null,
    currentUser: null
  })),
  on(AuthActions.setCurrentUser, (state, { user }) => ({
    ...state,
    currentUser: user
  }))
);

export function reducer(state: AuthState, action: Action) {
  return authReducer(state, action);
}
