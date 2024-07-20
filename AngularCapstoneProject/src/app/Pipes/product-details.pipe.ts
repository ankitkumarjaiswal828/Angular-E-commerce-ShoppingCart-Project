import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productDetails'
})
export class ProductDetailsPipe implements PipeTransform {

  transform(products:[], searchitem: string): any[] {
    if (!products || !searchitem) {
      return products
    }

    return products.filter(item =>JSON.stringify(item).toLowerCase().includes(searchitem.toLowerCase())
      //||JSON.stringify(item).toUpperCase().includes(searchitem.toUpperCase())
    )
   
  }

}
