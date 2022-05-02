import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HandledError } from 'src/app/core/interfaces/handled-error.interface';
import { CurrencyState } from './currency.reducer';
import { Currency } from 'src/app/core/interfaces/currency.interface';


const getError = (state: CurrencyState): HandledError | null => state.error;
const getLoading = (state: CurrencyState): boolean => state.loading;
const getCurrRates = (state: CurrencyState): Currency[] => state.currRates;
const getPrevRates = (state: CurrencyState): Currency[] => state.prevRates;

export const selectedCurrencyState = createFeatureSelector<CurrencyState>('currency');

export const selectError = createSelector(selectedCurrencyState, getError);
export const selectLoading = createSelector(selectedCurrencyState, getLoading);
export const selectCurrRates = createSelector(selectedCurrencyState, getCurrRates);
export const selectPrevRates = createSelector(selectedCurrencyState, getPrevRates);
