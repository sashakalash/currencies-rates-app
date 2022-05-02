import { Pipe, PipeTransform } from '@angular/core';
import { Currency } from '../interfaces/currency.interface';

@Pipe({
  name: 'diffStatus'
})
export class StatusPipe implements PipeTransform {

  transform(currency: Currency, prevRates: Currency[] | null): string {
    const prevValue = prevRates?.find((curr: Currency) => curr.name === currency.name)?.value;
    if (!prevValue) {
      return 'hourglass_top';
    }
    switch (true) {
      case currency.value > prevValue:
        return 'arrow_upward';
      case currency.value < prevValue:
        return 'arrow_downward';
      default:
        return 'remove_circle_outline';
    }
  }

}