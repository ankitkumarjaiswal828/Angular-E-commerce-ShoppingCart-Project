import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicecartService {

  private cart = new BehaviorSubject<any[]>([]);
  cart$ = this.cart.asObservable();

  constructor() { }

  addToCart(product: any): void {
    const currentCart = this.cart.value;
    currentCart.push(product);
    this.cart.next(currentCart);
  }

  getCart(): any[] {
    return this.cart.value;
  }

  clearCart(): void {
    this.cart.next([]);
  }
}
