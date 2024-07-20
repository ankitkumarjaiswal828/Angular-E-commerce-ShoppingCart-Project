import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service';
import { ServicecartService } from '../Cart/servicecart.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import {PriceUpdateingService} from '../CartPriceUpdating/price-updateing.service'


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(500)
      ])
    ])
  ]
})

export class ProductDetailsComponent implements OnInit {
  products: any = [];
  searchitem: string = '';
  showSuccessMessage: boolean = false;


  constructor(private productDetails: ServiceService, private cartService: ServicecartService, private priceupdate: PriceUpdateingService) {

    productDetails.getProductsDetails().subscribe((response => {
      this.products = response;
    }))
  }

  ngOnInit():void {
    this.productDetails.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);

    this.showSuccessMessage = true;
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 1000);
  }

}
