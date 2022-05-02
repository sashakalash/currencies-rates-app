import { Currency } from './currency.interface'

export interface CurrencyApiResponse {
  rates: {
    [key: string]: Currency
  }
}
