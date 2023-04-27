import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(price: any, quantity: any) {
    return price*quantity;
}
    
  }


