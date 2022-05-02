import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as AuthState from './auth-store';
import * as CurrencyState from './currency-store';

export interface State {
  auth: AuthState.AuthStoreState.AuthState;
  currency: CurrencyState.CurrencyStoreState.CurrencyState
}

export const reducers: ActionReducerMap<State | any> = {
  auth: AuthState.AuthStoreState.reducer,
  currency: CurrencyState.CurrencyStoreState.reducer
};

// console.log all actions
export function debug(reducer: ActionReducer<State>): ActionReducer<any> {
	return (state, action) => reducer(state, action);
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [debug] : [];
