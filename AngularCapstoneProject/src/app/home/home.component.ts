import { Component } from '@angular/core';
import { ServiceService } from '../Services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  product_list: any = [];
  constructor(private productDetails: ServiceService) {
    productDetails.getHomeProductsDetails().subscribe((response => {
      this.product_list = response;
    }))
  }

}
