import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap, catchError, of, map, timer, filter, take, timeout } from 'rxjs';

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

  getRates$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CurrencyActions.getRates),
      switchMap(() => {
        return timer(0, 3000).pipe(
          switchMap(() => this.currencyService.getCurrencies()
          .pipe(
            map((payload: CurrencyApiResponse) => {
              const rates: Currency[] = Object.entries(payload.rates).map(([key, value]: [string, Currency]) => ({ key, ...value }));
              return CurrencyActions.getRatesSuccess({ rates });
            }),
            catchError(error => of(CurrencyActions.getRatesFail({ error })))
          )
          ),
          timeout(10000)
        )
     
        
        
        
        // this.currencyService.getCurrencies().pipe(
        //   map((payload: CurrencyApiResponse) => {
        //     const rates: Currency[] = Object.entries(payload.rates).map(([key, value]: [string, Currency]) => ({ key, ...value }));
        //     return CurrencyActions.getRatesSuccess({ rates });
        //   }),
        //   catchError(error => of(CurrencyActions.getRatesFail({ error })))
        // );
      })
    )
  )
};
