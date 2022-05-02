import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap, catchError, of, map, timer, timeout, pairwise, tap, flatMap, startWith } from 'rxjs';

import * as CurrencyActions from './currency.actions';
import { CurrencyService } from 'src/app/data-access/currency.service';
import { CurrencyApiResponse } from 'src/app/core/interfaces/currency-api-response.interface';
import { CurrencyState } from './currency.reducer';
import { Currency } from 'src/app/core/interfaces/currency.interface';

@Injectable()
export class CurrencyEffects {
  constructor(
    private actions$: Actions,
    private store$: Store<CurrencyState>,
    private currencyService: CurrencyService,
  ) {}

  private convertResponseToCurrency(data: CurrencyApiResponse): Currency[] {
    return Object.entries(data.rates).map(([key, value]: [string, Currency]) => ({ key, ...value }))
  }

  getRates$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CurrencyActions.getRates),
      switchMap(payload => {
        return timer(0, payload.frequency).pipe(
          flatMap(() => this.currencyService.getCurrencies().pipe()),
          startWith({ rates: {} }),
          pairwise(),
          tap(v => console.log(v)),
          map(([prev, curr]: [CurrencyApiResponse, CurrencyApiResponse]) => {
            const prevRates: Currency[] = this.convertResponseToCurrency(prev);
            const currRates: Currency[] = this.convertResponseToCurrency(curr);
            return CurrencyActions.getRatesSuccess({ prevRates, currRates });
          }),
          timeout(200000),
          catchError(error => of(CurrencyActions.getRatesFail({ error })))
        )
      })
    )
  )
};
