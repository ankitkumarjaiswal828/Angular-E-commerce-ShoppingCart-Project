import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../product-details/product.model';

@Injectable({
  providedIn: 'root'
})
export class PriceUpdateingService {

  private cartItems: Product[] = [];
  private cartTotal = new BehaviorSubject<number>(0);
  private cartItemsSubject = new BehaviorSubject<Product[]>([]);

  getCartItems() {
    return this.cartItemsSubject.asObservable();
  }

  getCartTotal() {
    return this.cartTotal.asObservable();
  }

  addToCart(product: Product) {
    const existingProduct = this.cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.product_quantity += product.product_quantity;
    } else {
      this.cartItems.push({ ...product });
    }
    this.updateCartTotal();
    this.cartItemsSubject.next(this.cartItems);
  }

  updateQuantity(productId: number, quantity: number) {
    const product = this.cartItems.find(item => item.id === productId);
    if (product && quantity >= 1) {
      product.product_quantity = quantity;
      this.updateCartTotal();
      this.cartItemsSubject.next(this.cartItems);
    }
  }

  private updateCartTotal() {
    const total = this.cartItems.reduce((sum, item) => sum + (item.product_price * item.product_quantity), 0);
    this.cartTotal.next(total);
  }
}
