import { InjectionToken } from '@angular/core';

const DEFAULT_FREQUENCY_VALUE = 15000;

export interface FrequencyConfig {
  value: number;
}

export const FREQUENCY_CONFIG = new InjectionToken<FrequencyConfig>('get-rates-frequency.config', {
  providedIn: 'root',
  factory: () => ({ value: DEFAULT_FREQUENCY_VALUE })
});