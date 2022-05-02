import { createAction, props } from '@ngrx/store';
import { Currency } from 'src/app/core/interfaces/currency.interface';
import { HandledError } from 'src/app/core/interfaces/handled-error.interface';

export enum CurrencyActionsTypes {
  GET_RATES = '[CURRENCY] Get Rates',
  GET_RATES_SUCCESS = '[CURRENCY] Get Rates Success',
  GET_RATES_FAIL = '[CURRENCY] Get Rates Fail',
}

export const getRates = createAction(
	CurrencyActionsTypes.GET_RATES
);

export const getRatesSuccess = createAction(
  CurrencyActionsTypes.GET_RATES_SUCCESS,
  props<{ rates: Currency[] }>()
);

export const getRatesFail = createAction(
  CurrencyActionsTypes.GET_RATES_FAIL,
  props<{ error: HandledError }>()
);