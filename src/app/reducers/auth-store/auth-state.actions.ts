import { IAuth } from '../../core/interfaces/auth.interface';
import { createAction, props } from '@ngrx/store';
import { HandledError } from 'src/app/core/interfaces/handled-error.interface';
import { IToken } from 'src/app/core/interfaces/token.interface';

export enum AuthActionsTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAIL = '[Auth] Login Fail',
  LOGOUT = '[Auth] LogOut',
  SET_CURRENT_USER = '[Auth] Set Current User',
}

export const login = createAction(
	AuthActionsTypes.LOGIN,
	props<{ payload: IAuth }>()
);

export const loginSuccess = createAction(
  AuthActionsTypes.LOGIN_SUCCESS,
  props<{ token: IToken }>()
);

export const loginFail = createAction(
  AuthActionsTypes.LOGIN_FAIL,
  props<{ error: HandledError }>()
);

export const logout = createAction(
	AuthActionsTypes.LOGOUT
);


export const setCurrentUser = createAction(
	AuthActionsTypes.SET_CURRENT_USER,
	props<{ user: string }>()
);
