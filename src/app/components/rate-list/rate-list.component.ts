import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime, Observable, Subject, takeUntil, tap } from 'rxjs';
import { FREQUENCY_CONFIG, FrequencyConfig } from 'src/app/config.token';
import { Currency } from 'src/app/core/interfaces/currency.interface';
import * as CurrencyStore from 'src/app/reducers/currency-store';

@Component({
  selector: 'app-rate-list',
  templateUrl: './rate-list.component.html',
  styleUrls: ['./rate-list.component.scss']
})
export class RateListComponent implements OnInit, OnDestroy {

  public currRates$: Observable<Currency[]> = this.store$.select(CurrencyStore.CurrencyStoreSelectors.selectCurrRates);
  public prevRates$: Observable<Currency[]> = this.store$.select(CurrencyStore.CurrencyStoreSelectors.selectPrevRates);
  public displayedColumns: string[] = ['unit', 'name', 'value', 'type', 'diff'];
  private destroyed$: Subject<void> = new Subject();

  public frequencyControl: FormControl = new FormControl();
  private readonly MILLISECONDS_TO_CALCULATE_FREQ = 1000;

  public isStatusVisible = true;
  public readonly DEFAULT_STATUS_TIMER: number = 5;
  public statusTimerControl: FormControl = new FormControl();

  constructor(
    @Inject(FREQUENCY_CONFIG) private defaultFrequency: FrequencyConfig,
    private store$: Store<CurrencyStore.CurrencyStoreState.CurrencyState>,
  ) {}

  private getRatesList(): void {
    this.store$.dispatch(CurrencyStore.CurrencyStoreActions.getRates({
      frequency: this.frequencyControl?.value ? this.frequencyControl?.value * this.MILLISECONDS_TO_CALCULATE_FREQ : this.defaultFrequency.value
    }));
  }

  private setSubscriptions(): void {
    this.frequencyControl.valueChanges
      .pipe(
        takeUntil(this.destroyed$),
        debounceTime(500)
      )
      .subscribe(() => this.getRatesList());
    this.statusTimerControl.valueChanges.subscribe(timer => this.hideDifference());
  }

  private hideDifference(): void {
    setTimeout(() => this.isStatusVisible = false, (this.statusTimerControl?.value ?? this.DEFAULT_STATUS_TIMER) * this.MILLISECONDS_TO_CALCULATE_FREQ);
  }

  ngOnInit(): void {
    this.getRatesList();
    this.setSubscriptions();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
