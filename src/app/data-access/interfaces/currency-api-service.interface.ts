import { Observable } from 'rxjs';
import { CurrencyApiResponse } from 'src/app/core/interfaces/currency-api-response.interface';

export interface CurrencyApiServiceInterface {
  getCurrencies(): Observable<CurrencyApiResponse>;
}
