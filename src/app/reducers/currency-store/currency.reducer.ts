import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { HandledError } from 'src/app/core/interfaces/handled-error.interface';
import * as CurrencyActions from './currency.actions';
import { CurrencyApiResponse } from 'src/app/core/interfaces/currency-api-response.interface';
import { Currency } from 'src/app/core/interfaces/currency.interface';

export const adapter: EntityAdapter<CurrencyApiResponse> = createEntityAdapter<CurrencyApiResponse>();

export interface CurrencyState extends EntityState<CurrencyApiResponse> {
  rates: Currency[];
  currentUser: string | null;
  loading: boolean;
	error: HandledError | null;
}

const initialState: CurrencyState = adapter.getInitialState({
  rates: [],
  currentUser: null,
  loading: false,
	error: null
});

const authReducer = createReducer(
  initialState,
  on(CurrencyActions.getRates, (state) => ({ ...state, loading: true })),
  on(CurrencyActions.getRatesSuccess, (state, { rates }) => ({
    ...state,
    rates,
    loading: false
  })),
);

export function reducer(state: CurrencyState, action: Action) {
  return authReducer(state, action);
}
