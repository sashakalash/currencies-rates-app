import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { AuthStoreModule } from './auth-store';
import { reducers } from '.';
import { CurrencyStoreModule } from './currency-store';


@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		AuthStoreModule,
		CurrencyStoreModule,
		StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
		EffectsModule.forRoot([]),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: environment.production
		}),

	]
})
export class RootStoreModule {
}
