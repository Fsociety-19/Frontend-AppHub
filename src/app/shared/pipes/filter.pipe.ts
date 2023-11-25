import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...arg: any): any {
    const resultProduct = [];
    for (let app of value){
      /*if (app.name.toLowerCase().indexOf(arg) > -1){
        resultProduct.push(product)
      }*/
      resultProduct.push(app)

    }
    return resultProduct;
  }

}
