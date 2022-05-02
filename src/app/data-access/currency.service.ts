import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CurrencyApiResponse } from '../core/interfaces/currency-api-response.interface';
import { CurrencyApiServiceInterface } from './interfaces/currency-api-service.interface';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService implements CurrencyApiServiceInterface {

  constructor(private http: HttpClient) {}

  public getCurrencies(): Observable<CurrencyApiResponse> {
    return this.http.get<CurrencyApiResponse>(environment.urls.currency.rates);
  }
}
