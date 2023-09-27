import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { PRODUCTS_MOCK } from '../mocks/products.mock';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = PRODUCTS_MOCK;

  constructor() { }
}
