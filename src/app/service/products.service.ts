import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  // <!-- ** Services
  // constructor() {
  //   console.log('Product service');
  // }
  // getProductData() {
  //   return [
  //     { name: 'mobile', brand: 'redmi', price: '8500' },
  //     { name: 'laptop', brand: 'hp', price: '43000' },
  //     { name: 'watch', brand: 'boat', price: '2100' },
  //   ];
  // }

  // <!-- ** API Call
  constructor(private http: HttpClient) {}
  getProductData() {
    const url = 'https://dummyjson.com/products';
    return this.http.get(url);
  }
}
