import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthEffects } from './auth-state.effects';
import { reducer } from './auth-state.reducer';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		StoreModule.forFeature('auth', reducer),
		EffectsModule.forFeature([AuthEffects])
	]
})
export class AuthStoreModule {
}
