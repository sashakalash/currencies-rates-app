import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { Currency } from 'src/app/core/interfaces/currency.interface';
import * as CurrencyStore from 'src/app/reducers/currency-store';

@Component({
  selector: 'app-rate-list',
  templateUrl: './rate-list.component.html',
  styleUrls: ['./rate-list.component.scss']
})
export class RateListComponent implements OnInit {

  public rates$: Observable<Currency[]> = this.store$.select(CurrencyStore.CurrencyStoreSelectors.selectRates);
  public displayedColumns: string[] = ['unit', 'name', 'value', 'type'];

  constructor(private store$: Store<CurrencyStore.CurrencyStoreState.CurrencyState>) {
    this.store$.dispatch(CurrencyStore.CurrencyStoreActions.getRates());
  }

  ngOnInit(): void {
  }

}
