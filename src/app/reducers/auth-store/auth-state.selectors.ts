import { IToken } from 'src/app/core/interfaces/token.interface';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HandledError } from 'src/app/core/interfaces/handled-error.interface';
import { AuthState } from './auth-state.reducer';


const getError = (state: AuthState): HandledError | null => state.error;
const getLoading = (state: AuthState): boolean => state.loading;
const getToken = (state: AuthState): IToken | null => state.token;
const isAuthenticated = (state: AuthState): boolean => !!state.token;
const currentUser = (state: AuthState): string => state.currentUser ?? 'Guest';


export const selectedAuthState = createFeatureSelector<AuthState>('auth');

export const selectError = createSelector(selectedAuthState, getError);
export const selectAuthenticateStatus = createSelector(selectedAuthState, isAuthenticated);
export const selectToken = createSelector(selectedAuthState, getToken);
export const selectLoading = createSelector(selectedAuthState, getLoading);
export const selectUserName = createSelector(selectedAuthState, currentUser);
