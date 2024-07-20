import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private url: string = "assets/HomeProducts.json"
  private prourl: string = "assets/productsDetails.json";

  constructor(private httpClient: HttpClient) { }

  getHomeProductsDetails() {
    return this.httpClient.get(this.url)

  }
  getProductsDetails() {
    return this.httpClient.get(this.prourl)
  }

  getProducts(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.prourl);
  }
}



