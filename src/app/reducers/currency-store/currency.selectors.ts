import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HandledError } from 'src/app/core/interfaces/handled-error.interface';
import { CurrencyState } from './currency.reducer';
import { Currency } from 'src/app/core/interfaces/currency.interface';


const getError = (state: CurrencyState): HandledError | null => state.error;
const getLoading = (state: CurrencyState): boolean => state.loading;
const getRates = (state: CurrencyState): Currency[] => state.rates;


export const selectedCurrencyState = createFeatureSelector<CurrencyState>('currency');

export const selectError = createSelector(selectedCurrencyState, getError);
export const selectLoading = createSelector(selectedCurrencyState, getLoading);
export const selectRates = createSelector(selectedCurrencyState, getRates);
