import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...arg: any): any {
    const resultProduct = [];
    for (let product of value){
      if (product.name.toLowerCase().indexOf(arg) > -1){
        resultProduct.push(product)
      }
    }
    return resultProduct;
  }

}
