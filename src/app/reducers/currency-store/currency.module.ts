import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CurrencyEffects } from './currency.effects';
import { reducer } from './currency.reducer';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		StoreModule.forFeature('currency', reducer),
		EffectsModule.forFeature([CurrencyEffects])
	]
})
export class CurrencyStoreModule {
}
