import { Component } from '@angular/core';
import { ServicecartService } from '../Cart/servicecart.service';
import { Product } from '../product-details/product.model';
import {PriceUpdateingService} from '../CartPriceUpdating/price-updateing.service'


@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrl: './cart-products.component.css'
})
export class CartProductsComponent {
  //cartItems: any[] = [];
  cartItems: Product[] = [];
  cartTotal: number = 0;

  constructor(private cartService: ServicecartService, private priceupdat: PriceUpdateingService ) { }

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
    });
    this.priceupdat.getCartTotal().subscribe(total => {
      this.cartTotal = total;
    });
  }
  updateQuantity(productId: number, quantity: number) {
    this.priceupdat.updateQuantity(productId, quantity);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }
}
